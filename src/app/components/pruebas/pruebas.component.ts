import {ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PruebasComponent implements OnInit {
  items = Array.from({length: 100}).map((_, i) => `Item #${i}`);
  constructor() { }

  ngOnInit() {
  }

}