import { Component, OnInit, Input } from '@angular/core';
import { AnuncioService } from '../../services/anuncio.service';
import { Anuncio } from 'src/app/core/models/classifika-models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-anuncio-grid',
  templateUrl: './anuncio-grid.component.html',
  styleUrls: ['./anuncio-grid.component.scss']
})
export class AnuncioGridComponent implements OnInit {

  @Input()
  anuncios: Anuncio[] = [];

  constructor(private anuncioService: AnuncioService, private router: Router) { }

  ngOnInit() {
  }

  gotoToDetaisPage(anuncio: Anuncio) {
    console.log(anuncio);
    this.router.navigate(['anuncios', anuncio.id]);
  }
}
