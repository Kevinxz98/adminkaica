import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-main',
  imports: [SharedModule],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main implements OnInit {

  constructor() { }

  ngOnInit(): void {}

}
