import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, inject, TemplateRef, ViewChild } from '@angular/core';
import { NgbModule, NgbNavModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';

import { PickerComponent } from '@ctrl/ngx-emoji-mart';
import { SharedModule } from '../../../shared/shared.module';
import { SpkDropdowns } from '../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns';
import { SpkGallery } from '../../../@spk/spk-reusable-plugins/spk-gallery/spk-gallery';
import { FormsModule } from '@angular/forms';
interface Recent {
  message?: string;
  image?: string;
  images?:any[];
  bg?:string;
  name?: string;
  time?: string;
  unReadMsgCount?: string;
  unReadMsgStatus?: string;
  status?: string;
  chatMsgUnread: boolean;
  chatMsgTyping: boolean;
  number?:string;
  online?:string;
  bg1?:string
}


@Component({
  selector: 'app-chat',
  imports: [SharedModule, CommonModule,PickerComponent, OverlayscrollbarsModule, NgbNavModule, NgbModule ,FormsModule],
  templateUrl: './chat.html',
  styleUrl: './chat.scss',
  providers: [NgbOffcanvas]
})
export class Chat {
  message: string = '';
  showEmojiPicker: boolean = false;

  private offcanvasService = inject(NgbOffcanvas);
  isOpen: boolean = false;
  @ViewChild('emojiPicker') emojiPicker!: ElementRef;
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.showEmojiPicker && this.emojiPicker && !this.emojiPicker.nativeElement.contains(event.target)) {
      this.showEmojiPicker = false;
    }
  }
  open(content: any) {
    this.offcanvasService.open(content, { position: 'end', scroll: true });
    this.isOpen = !this.isOpen;
  }

  handleClick(activeUser: any): void {
    this.activeUser = activeUser;
    if (window.innerWidth <= 992) {
      document.querySelector('.main-chart-wrapper ')?.classList.add('responsive-chat-open');
    }
  }
  removedetails() {
    document.querySelector('.main-chart-wrapper ')?.classList.remove('responsive-chat-open');
  }

  allchats: Recent[] = [
    {
      name: 'John Doe',
      time: '10:30 AM',
      message: "Got your email 😊, I’ll send over the details by EOD! 😄",
      image: './assets/images/faces/15.jpg',
      unReadMsgCount: '',
      unReadMsgStatus: '',
      status: 'online',
      chatMsgUnread: false,
      chatMsgTyping: false,
    }

  ];


  activeUser = this.allchats[0];
  


  //
  detailsclick1(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'end' });
  }
  addEmoji(event: any) {
    // For emoji-mart, the emoji is usually in event.emoji or event.native
    this.message += event.emoji?.native || event.native || '';
  }
}
