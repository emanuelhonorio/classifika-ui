import { Subscription } from "rxjs";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AnuncioService } from "../../services/anuncio.service";
import { Anuncio, Foto } from "src/app/core/models/classifika-models";

import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation,
  NgxGalleryImageSize,
} from "ngx-gallery-9";

import "hammerjs";
import { LocalizacaoService } from "src/app/modules/localizacao/services/localizacao.service";
import { take } from "rxjs/operators";

@Component({
  selector: "app-anuncio-detalhes-page",
  templateUrl: "./anuncio-detalhes-page.component.html",
  styleUrls: ["./anuncio-detalhes-page.component.scss"],
})
export class AnuncioDetalhesPageComponent implements OnInit {
  public anuncio: Anuncio = {};
  public localizacaoData: any = {};

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private anuncioService: AnuncioService,
    private localizacaoService: LocalizacaoService
  ) {}

  ngOnInit() {
    let idAnuncio = Number.parseInt(
      this.activatedRoute.snapshot.paramMap.get("id")
    );
    this.initAnuncio(idAnuncio);
  }

  initAnuncio(idAnuncio: number) {
    this.anuncioService
      .buscarPorId(idAnuncio)
      .pipe(take(1))
      .subscribe((anuncio: Anuncio) => {
        this.anuncio = anuncio;
        this.initImages(this.anuncio.fotos);
        this.initLocalizacao(this.anuncio.cep);
      });
  }

  initLocalizacao(cep: string) {
    this.localizacaoService
      .consultarCep(cep)
      .pipe(take(1))
      .subscribe((data) => {
        this.localizacaoData = data;
      });
  }

  initImages(fotos: Foto[]) {
    this.galleryOptions = [
      {
        width: "100%",
        height: "500px",
        arrowPrevIcon: "fas fa-chevron-left",
        arrowNextIcon: "fas fa-chevron-right",
        thumbnailsColumns: 6,
        thumbnailsPercent: 15,
        imageAnimation: NgxGalleryAnimation.Slide,
        imageSize: NgxGalleryImageSize.Contain,
      },
      // max-width 800
      {
        breakpoint: 800,
        width: "100%",
        height: "400px",
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
      },
    ];

    this.galleryImages = [];
    for (let foto of fotos) {
      this.galleryImages.push({
        small: foto.url,
        medium: foto.url,
        big: foto.url,
      });
    }
  }
}
