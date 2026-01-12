import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  ElementRef,
  HostListener,
  inject,
  TemplateRef,
  ViewChild,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  NgbModule,
  NgbNavModule,
  NgbOffcanvas,
} from '@ng-bootstrap/ng-bootstrap';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { PickerComponent } from '@ctrl/ngx-emoji-mart';
import {
  Subscription,
  debounceTime,
  distinctUntilChanged,
  Subject,
} from 'rxjs';

import { SharedModule } from '../../../shared/shared.module';
import {
  ChatService,
  ChatSession,
  ChatMessage,
} from '../../../shared/services/chat-service.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-chatbot-conversations',
  standalone: true,
  imports: [
    SharedModule,
    CommonModule,
    OverlayscrollbarsModule,
    NgbNavModule,
    NgbModule,
    FormsModule,
  ],
  templateUrl: './chatbot-conversations.html',
  styleUrl: './chatbot-conversations.scss',
  providers: [NgbOffcanvas],
})
export class ChatbotConversations {
  @Input({ required: true }) chatbotId!: number;

  message: string = '';
  showEmojiPicker: boolean = false;
  isLoading: boolean = true;
  isLoadingMessages: boolean = false;

  allchats: ChatSession[] = [];
  activeSession: ChatSession | null = null;
  activeMessages: ChatMessage[] = [];
  chatbotInfo: any = null;

  chatbotAvatar: string | null = null;

  private pendingActiveSession: ChatSession | null = null;
  private updatePending = false;

  private offcanvasService = inject(NgbOffcanvas);
  private chatService = inject(ChatService);
  private cdr = inject(ChangeDetectorRef);

  isOpen: boolean = false;
  @ViewChild('emojiPicker') emojiPicker!: ElementRef;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (
      this.showEmojiPicker &&
      this.emojiPicker &&
      !this.emojiPicker.nativeElement.contains(event.target)
    ) {
      this.showEmojiPicker = false;
    }
  }

  today: string = new Date().toISOString().split('T')[0]; // Formato YYYY-MM-DD

  ngOnInit() {
    if (this.chatbotId) {
      this.loadConversations();
    }
    this.today = new Date().toISOString().split('T')[0];
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['chatbotId'] && !changes['chatbotId'].firstChange) {
      this.resetChat();
      this.loadConversations();
    }
  }

  resetChat() {
    this.allchats = [];
    this.activeSession = null;
    this.activeMessages = [];
    this.message = '';
  }

  loadConversations() {
    if (!this.chatbotId) {
      this.safeUpdate(() => {
        this.isLoading = false;
      });
      return;
    }

    this.safeUpdate(() => {
      this.isLoading = true;
    });

    this.chatService.getConversations(this.chatbotId).subscribe({
      next: (response) => {
        this.safeUpdate(() => {
          if (response.success) {
            this.chatbotAvatar = response.chatbot?.avatar || null;
            this.allchats = response.conversations || [];
            this.chatbotInfo = response.chatbot;

            if (this.allchats.length > 0) {
              // Programar el handleClick para más tarde
              setTimeout(() => {
                this.safeUpdate(() => {
                  this.handleClick(this.allchats[0]);
                });
              });
            }
          }
          this.isLoading = false;
        });
      },
      error: (error) => {
        console.error('Error loading conversations:', error);
        this.safeUpdate(() => {
          this.isLoading = false;
        });
      },
    });
  }

  avatarErrorMap = new Set<string>();

  onAvatarError(key: string): void {
    this.avatarErrorMap.add(key);
  }

  shouldShowFallback(key: string, image?: string): boolean {
    return !image || this.avatarErrorMap.has(key);
  }

  getInitial(text?: string): string {
    return text?.trim()?.charAt(0)?.toUpperCase() || '?';
  }

  // Función helper para actualizaciones seguras
  private safeUpdate(callback: () => void): void {
    if (typeof requestAnimationFrame !== 'undefined') {
      requestAnimationFrame(() => {
        callback();
        this.cdr.detectChanges();
      });
    } else {
      setTimeout(() => {
        callback();
        this.cdr.detectChanges();
      });
    }
  }

  handleClick(session: ChatSession): void {
    console.log('handleClick llamado con session:', session);

    // Usar Promise.resolve() para el próximo microtask
    Promise.resolve().then(() => {
      this.activeSession = session;
      console.log('activeSession actualizado:', this.activeSession);

      this.loadSessionMessages(session.session_id);

      if (window.innerWidth <= 992) {
        document
          .querySelector('.main-chart-wrapper')
          ?.classList.add('responsive-chat-open');
      }

      this.cdr.detectChanges();
    });
  }

  loadSessionMessages(sessionId: string) {
    console.log('loadSessionMessages llamado con sessionId:', sessionId);
    console.log('chatbotId actual:', this.chatbotId);

    if (!sessionId || !this.chatbotId) {
      console.error('sessionId o chatbotId no válidos:', {
        sessionId,
        chatbotId: this.chatbotId,
      });
      return;
    }

    this.isLoadingMessages = true;
    console.log('isLoadingMessages establecido a true');

    this.chatService.getSessionMessages(this.chatbotId, sessionId).subscribe({
      next: (response) => {
        console.log('Respuesta recibida del servicio:', response);
        if (response.success) {
          console.log('Mensajes recibidos:', response.messages);
          this.activeMessages = response.messages;
        } else {
          console.error('Respuesta no exitosa:', response);
        }
        this.isLoadingMessages = false;
        this.cdr.detectChanges();
        console.log('Vista actualizada');
      },
      error: (error) => {
        console.error('Error en loadSessionMessages:', error);
        console.error('Error completo:', error);
        this.isLoadingMessages = false;
        this.cdr.detectChanges();
      },
      complete: () => {
        console.log('Suscripción completada');
      },
    });
  }

  sendMessage() {
    if (!this.message.trim() || !this.activeSession || !this.chatbotId) return;

    // Aquí iría la lógica para enviar un nuevo mensaje al chatbot
    console.log('Enviando mensaje al chatbot:', this.chatbotId, this.message);
    this.message = '';
  }

  open(content: any) {
    this.offcanvasService.open(content, { position: 'end', scroll: true });
    this.isOpen = !this.isOpen;
  }

  removedetails() {
    document
      .querySelector('.main-chart-wrapper')
      ?.classList.remove('responsive-chat-open');
  }

  detailsclick1(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
  }

  addEmoji(event: any) {
    this.message += event.emoji?.native || event.native || '';
  }
}
