import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AnuncioService } from "../../services/anuncio.service";
import { take } from "rxjs/operators";

@Component({
  selector: "app-atualizar-anuncio-page",
  templateUrl: "./atualizar-anuncio-page.component.html",
  styleUrls: ["./atualizar-anuncio-page.component.scss"],
})
export class AtualizarAnuncioPageComponent implements OnInit {
  anuncio = {};

  constructor(
    private route: ActivatedRoute,
    private anuncioService: AnuncioService
  ) {}

  ngOnInit() {
    const anuncioId = this.route.snapshot.params.id;
    console.log(anuncioId);

    this.anuncioService
      .buscarPorId(anuncioId)
      .pipe(take(1))
      .subscribe((anuncio) => {
        this.anuncio = anuncio;
      });
  }
}
