import { Component, OnInit, Input } from '@angular/core';
import { Anuncio } from 'src/app/core/models/classifika-models';

@Component({
  selector: 'app-meu-anuncio',
  templateUrl: './meu-anuncio.component.html',
  styleUrls: ['./meu-anuncio.component.scss']
})
export class MeuAnuncioComponent implements OnInit {

  @Input()
  anuncio: Anuncio = {};

  constructor() { }

  ngOnInit() {
  }

}
