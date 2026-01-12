
import { Component, ContentChild, ElementRef, Input, Renderer2, ViewChild, input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-showcode-card',
  templateUrl: './showcode-card.html',
  styleUrl: './showcode-card.scss',
  standalone: true,
  imports: [NgbModule]
})
export class ShowcodeCard implements OnInit {

   title = input<string>();
   prism = input<string>();
   showCodeByDefault = input<boolean>(false); 
  @Input('tsCode') tsCode!:string;
  @Input('reuseCode') reuseCode!:string;
   classbody = input<string>();
   cardClassCustom = input<string>();
  toggleStatus = false;

  toggleShowCode(){
    this.toggleStatus = !this.toggleStatus;
  }
  hasTsCode = false;

   ngOnInit() {
    this.toggleStatus = this.showCodeByDefault();
  }
}
