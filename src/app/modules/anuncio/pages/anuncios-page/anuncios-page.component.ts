import { Subscription } from "rxjs";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { AnuncioService } from "../../services/anuncio.service";
import {
  Anuncio,
  AnuncioFilter,
  Categoria,
} from "src/app/core/models/classifika-models";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ConfirmationService } from "primeng/api";
import { take } from "rxjs/operators";

@Component({
  selector: "app-anuncios-page",
  templateUrl: "./anuncios-page.component.html",
  styleUrls: ["./anuncios-page.component.scss"],
})
export class AnunciosPageComponent implements OnInit, OnDestroy {
  anuncios: Anuncio[] = [];
  anuncioFilter: AnuncioFilter = {};
  page: number;
  size: number;

  $routerEvents: Subscription;

  constructor(
    private anuncioService: AnuncioService,
    private route: ActivatedRoute,
    private router: Router,
    private toastService: ToastrService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.pegarFiltrosDaRota();
    this.carregarAnuncios();

    this.$routerEvents = this.router.events.subscribe((event) => {
      if (
        event instanceof NavigationEnd &&
        this.router.url.split("?")[0] == "/"
      ) {
        this.pegarFiltrosDaRota();
        this.carregarAnuncios();
      }
    });
  }

  ngOnDestroy() {
    this.$routerEvents.unsubscribe();
  }

  onPageChange(page) {
    this.page = page;
  }

  excluirAnuncio(anuncio) {
    this.confirmationService.confirm({
      message: "Deseja realmente excluir este anúncio?",
      header: "Confirmação",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.anuncioService
          .excluirAnuncio(anuncio.id)
          .pipe(take(1))
          .subscribe(
            () => {
              this.carregarAnuncios();
              this.toastService.success("Anuncio excluído");
            },
            (err) => {
              this.toastService.error(
                "Algo deu errado, tente novamente mais tarde"
              );
            }
          );
      },
    });
  }

  desativarAnuncio(anuncio) {
    this.confirmationService.confirm({
      message: "Deseja realmente desativar este anúncio?",
      header: "Confirmação",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.anuncioService
          .toogleAtivoAnuncio(anuncio.id)
          .pipe(take(1))
          .subscribe(
            () => {
              this.carregarAnuncios();
              this.toastService.success("Anuncio desativado");
            },
            (err) => {
              this.toastService.error(
                "Algo deu errado, tente novamente mais tarde"
              );
            }
          );
      },
    });
  }

  atualizarAnuncio(anuncio) {
    this.router.navigate(["/anuncios", anuncio.id, "atualizar"]);
  }

  get categoriaSelecionada(): Categoria {
    if (this.anuncioFilter.categoria) {
      return { id: Number.parseInt(this.anuncioFilter.categoria) };
    }
    return {};
  }

  pegarFiltrosDaRota() {
    this.anuncioFilter.titulo = this.route.snapshot.queryParamMap.get("q");
    this.anuncioFilter.categoria = this.route.snapshot.queryParamMap.get("c");
    this.anuncioFilter.uf = this.route.snapshot.queryParamMap.get("l");
  }

  carregarAnuncios() {
    this.anuncioService
      .listarAnuncios(this.anuncioFilter, null, this.size)
      .pipe(take(1))
      .subscribe((anunciosPage: any) => {
        this.anuncios = anunciosPage.content;
      });
  }

  atualizarFiltrosRota() {
    console.log("atualizar: ", this.anuncioFilter);
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        c: this.anuncioFilter.categoria,
        l: this.anuncioFilter.uf,
        q: this.anuncioFilter.titulo,
      },
      queryParamsHandling: "merge",
    });
  }

  aoCategoriaSelecionada(categoria: any) {
    this.anuncioFilter.categoria = categoria.id;
    this.atualizarFiltrosRota();
  }

  aoExcluirSelecaoCategoria(event: any) {
    this.anuncioFilter.categoria = null;
    this.atualizarFiltrosRota();
  }

  aoLocalizacaoSelecionada(localizacao: any) {
    this.anuncioFilter.uf = localizacao;
    this.atualizarFiltrosRota();
  }

  aoExcluirLocalizacaoSelecionada(event: any) {
    this.anuncioFilter.uf = null;
    this.atualizarFiltrosRota();
  }

  filtrarTitulo(titulo: string) {
    this.anuncioFilter.titulo = titulo;
    this.atualizarFiltrosRota();
  }
}
