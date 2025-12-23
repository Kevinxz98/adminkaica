import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { addSteps as defaultSteps, defaultStepOptions } from "./tour.data";
import { ShepherdService } from "angular-shepherd";
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-test-agent',
  imports: [RouterLink],
  templateUrl: './test-agent.html',
  styleUrl: './test-agent.scss',
})
export class TestAgent {
  publicKey: string | null = null;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private renderer: Renderer2,
    private readonly _shepherdService: ShepherdService
  ) {}

  ngOnInit(): void {
    this.publicKey = this.route.snapshot.paramMap.get('public_key');
    console.log('Public Key:', this.publicKey);
    if (this.publicKey) {
      this.loadWidget(this.publicKey);
    }
    
    setTimeout(() => {
      this.startTour();
    }, 1500);
    
  }

  startTour() {
    this._shepherdService.defaultStepOptions = defaultStepOptions;
    this._shepherdService.modal = true;
    this._shepherdService.confirmCancel = false;
    this._shepherdService.addSteps(defaultSteps);
    this._shepherdService.start();
  }

  ngOnDestroy(): void {
    this.destroyWidget();
  }

  loadWidget(publicKey: string) {
    if (document.getElementById('kaica-widget')) return;

    const script = this.renderer.createElement('script');
    script.id = 'kaica-widget';
    script.src = 'https://chatbotv2-auerf7dbcpdudjfs.mexicocentral-01.azurewebsites.net/widget/embed.js';
    script.setAttribute('data-client', publicKey);
    script.async = true;

    this.renderer.appendChild(document.body, script);
  }

  

  destroyWidget() {
    // Eliminar script
    const script = document.getElementById('kaica-widget');
    if (script) script.remove();

    const chatToggle = document.getElementById('chat-toggle');
    if (chatToggle) chatToggle.remove();

    // Eliminar contenedor del widget (por si acaso)
    document.querySelectorAll('.chatbot-widget')
  .forEach(el => el.remove());

    // Limpieza extra: listeners globales (opcional)
    document.body.classList.remove('kaica-widget-open');
  }


}
