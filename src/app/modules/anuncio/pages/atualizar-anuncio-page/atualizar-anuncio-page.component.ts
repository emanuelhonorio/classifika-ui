import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Anuncio } from 'src/app/core/models/classifika-models';
import { AnuncioService } from '../../services/anuncio.service';

@Component({
  selector: 'app-atualizar-anuncio-page',
  templateUrl: './atualizar-anuncio-page.component.html',
  styleUrls: ['./atualizar-anuncio-page.component.scss']
})
export class AtualizarAnuncioPageComponent implements OnInit {

  anuncio = {};

  constructor(private route: ActivatedRoute, private anuncioService: AnuncioService) { }

  ngOnInit() {
    const anuncioId = this.route.snapshot.params.id;
    console.log(anuncioId);

    this.anuncioService.buscarPorId(anuncioId).subscribe((anuncio) => {
      this.anuncio = anuncio;
    });
  }

}
