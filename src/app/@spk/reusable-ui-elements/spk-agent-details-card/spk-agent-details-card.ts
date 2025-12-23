import { Component, input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-spk-agent-details-card',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule],
  templateUrl: './spk-agent-details-card.html',
  styleUrl: './spk-agent-details-card.scss',
})
export class SpkAgentDetailsCard {
   avatar = input<string>(''); // Avatar image URL
   estadoClass = input<string>(''); 
   name = input<string>(''); 
   estadoActivacion = input<string>(''); // Activation status
   categoria = input<string>(''); // User category
   nombreEmpresa = input<string>(''); // Company name
   sitioWeb = input<string>(''); // Website
   openaiModel = input<string>(''); // OpenAI Model
   color = input<string>(''); // Color for status indicator
   createdAt = input<string>(''); // Creation date
   statusClass = input<string>(''); // Status CSS class
   status = input<string>(''); // Status text
   publicKey = input<string>('');
   apiKey = input<string>('');
  @Output() edit = new EventEmitter<string>();
  @Output() test = new EventEmitter<string>();
  @Output() disable = new EventEmitter<string>();

  isKeyVisible = false;
  copied = false;

  toggleKeyVisibility(): void {
    this.isKeyVisible = !this.isKeyVisible;
  }


  onEdit() {
    this.edit.emit(this.publicKey());
  }

  onTest() {
    this.test.emit(this.publicKey());
  }

  onDisable() {
    this.disable.emit(this.publicKey());
  }

  copyToClipboard(inputElement: HTMLInputElement): void {
    // Seleccionar el texto
    inputElement.select();
    inputElement.setSelectionRange(0, 99999); // Para móviles
    
    // Intentar copiar usando la API moderna
    try {
      navigator.clipboard.writeText(this.apiKey()).then(() => {
        this.showCopiedFeedback();
      }).catch(() => {
        // Fallback para navegadores antiguos
        document.execCommand('copy');
        this.showCopiedFeedback();
      });
    } catch (err) {
      // Fallback final
      document.execCommand('copy');
      this.showCopiedFeedback();
    }
  }

  private showCopiedFeedback(): void {
    this.copied = true;
    setTimeout(() => {
      this.copied = false;
    }, 2000); // El mensaje desaparece después de 2 segundos
  }

  getMaskedApiKey(): string {
    const key = this.apiKey();
    if (key.length <= 8) return '••••••••';
    return `${key.substring(0, 4)}${'•'.repeat(key.length - 8)}${key.substring(key.length - 4)}`;
  }


}
