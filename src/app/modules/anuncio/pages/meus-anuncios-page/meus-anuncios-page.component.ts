import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Anuncio } from "src/app/core/models/classifika-models";
import { AnuncioService } from "../../services/anuncio.service";
import { ToastrService } from "ngx-toastr";
import { ConfirmationService } from "primeng/api";
import { Router } from "@angular/router";
import { take } from "rxjs/operators";

@Component({
  selector: "app-meus-anuncios-page",
  templateUrl: "./meus-anuncios-page.component.html",
  styleUrls: ["./meus-anuncios-page.component.scss"],
})
export class MeusAnunciosPageComponent implements OnInit {
  anunciosAtivos: Anuncio[] = [];
  anunciosInativos: Anuncio[] = [];
  anunciosExpirados: Anuncio[] = [];
  anuncios: Anuncio[] = [];

  constructor(
    private anuncioService: AnuncioService,
    private toastService: ToastrService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initAnuncios();
  }

  initAnuncios() {
    this.anuncioService
      .listarMeusAnuncios()
      .pipe(take(1))
      .subscribe((anuncios: Anuncio[]) => {
        this.anuncios = anuncios;

        this.anunciosAtivos = anuncios.filter((anuncio) => {
          return anuncio.ativo && !anuncio.expirado;
        });
        this.anunciosInativos = anuncios.filter((anuncio) => {
          return !anuncio.ativo && !anuncio.expirado;
        });
        this.anunciosExpirados = anuncios.filter((anuncio) => {
          return anuncio.expirado;
        });
      });
  }

  toogleAtivoAnuncio(anuncio: Anuncio) {
    return this.anuncioService
      .toogleAtivoAnuncio(anuncio.id)
      .pipe(take(1))
      .subscribe(
        () => {
          this.initAnuncios();
          if (anuncio.ativo) {
            this.toastService.success("Anúncio desativado com sucesso");
          } else {
            this.toastService.success("Anúncio ativado com sucesso");
          }
        },
        (err) => {
          this.toastService.error(
            "Algo deu errado, tente novamente mais tarde"
          );
        }
      );
  }

  ativar(anuncio: Anuncio) {
    this.confirmationService.confirm({
      message: "Deseja realmente ativar este anúncio?",
      header: "Confirmação",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.toogleAtivoAnuncio(anuncio);
      },
    });
  }

  desativar(anuncio: Anuncio) {
    this.confirmationService.confirm({
      message: "Deseja realmente desativar este anúncio?",
      header: "Confirmação",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.toogleAtivoAnuncio(anuncio);
      },
    });
  }

  excluir(anuncio: Anuncio) {
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
              this.initAnuncios();
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

  renovar(anuncio: Anuncio) {
    this.confirmationService.confirm({
      message: "Deseja realmente renovar este anúncio?",
      header: "Confirmação",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        // TODO: Lógica renovar
        this.toastService.warning("Função em desenvolvimento");
      },
    });
  }

  atualizar(anuncio) {
    this.router.navigate(["/anuncios", anuncio.id, "atualizar"]);
  }

  visualizar(anuncio) {
    this.router.navigate(["/anuncios", anuncio.id]);
  }
}
