import { Component, OnInit } from '@angular/core';
import { Anuncio } from 'src/app/core/models/classifika-models';
import { AnuncioService } from '../../services/anuncio.service';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-meus-anuncios-page',
  templateUrl: './meus-anuncios-page.component.html',
  styleUrls: ['./meus-anuncios-page.component.scss']
})
export class MeusAnunciosPageComponent implements OnInit {

  anunciosAtivos: Anuncio[] = [];
  anunciosInativos: Anuncio[] = [];
  anunciosExpirados: Anuncio[] = [];

  anuncios: Anuncio[] = [];

  constructor(
    private anuncioService: AnuncioService,
    private toastService: ToastrService, 
    private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.initAnuncios();
  }

  initAnuncios() {
    this.anuncioService.listarMeusAnuncios().subscribe((anuncios: Anuncio[]) => {
      this.anuncios = anuncios;
      this.anunciosAtivos = anuncios.filter((anuncio) => {
        return anuncio.ativo;
      });
      this.anunciosInativos = anuncios.filter((anuncio) => {
        return !anuncio.ativo;
      });
    });
  }

  toogleAtivoAnuncio(anuncio: Anuncio) {
    return this.anuncioService.toogleAtivoAnuncio(anuncio.id).subscribe(() => {
      this.initAnuncios();
      if (anuncio.ativo) {
        this.toastService.success('Anúncio desativado com sucesso');
      } else {
        this.toastService.success('Anúncio ativado com sucesso');
      }
    }, err => {
      this.toastService.error('Algo deu errado, tente novamente mais tarde');
    });
  }

  ativar(anuncio: Anuncio) {
    this.confirmationService.confirm({
      message: 'Deseja realmente ativar este anúncio?',
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.toogleAtivoAnuncio(anuncio);
      }
    });
  }

  desativar(anuncio: Anuncio) {
    this.confirmationService.confirm({
      message: 'Deseja realmente desativar este anúncio?',
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.toogleAtivoAnuncio(anuncio);
      }
    });
  }

  excluir(anuncio: Anuncio) {
    this.confirmationService.confirm({
      message: 'Deseja realmente excluir este anúncio?',
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.anuncioService.excluirAnuncio(anuncio.id).subscribe(()=> {
          this.initAnuncios();
          this.toastService.success('Anuncio excluído');
        }, (err) => {
          this.toastService.error('Algo deu errado, tente novamente mais tarde');
        })
        
      }
    });
  }

  renovar(anuncio: Anuncio) {
    this.confirmationService.confirm({
      message: 'Deseja realmente renovar este anúncio?',
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.toastService.success('Anuncio renovado');
      }
    });
  }

}
