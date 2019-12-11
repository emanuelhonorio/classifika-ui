import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AnuncioService } from '../../services/anuncio.service';
import { Anuncio } from 'src/app/core/models/classifika-models';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationService } from 'primeng/api';
import { AccountService } from 'src/app/modules/account/services/account.service';

@Component({
  selector: 'app-anuncio-grid',
  templateUrl: './anuncio-grid.component.html',
  styleUrls: ['./anuncio-grid.component.scss']
})
export class AnuncioGridComponent implements OnInit {

  @Input()
  anuncios: Anuncio[] = [];

  @Input()
  page: number = 1;

  @Output()
  excluir = new EventEmitter();

  @Output()
  atualizar = new EventEmitter();

  @Output()
  desativar = new EventEmitter();

  @Output()
  pageChange = new EventEmitter();

  isAdmin: boolean;

  constructor(
    private anuncioService: AnuncioService,
    private accountService: AccountService,
    private router: Router,
    private toastService: ToastrService,
    private confirmationService: ConfirmationService
    ) { }

  ngOnInit() {
    this.isAdmin = this.accountService.isAdmin();
    console.log(this.isAdmin);
  }

  gotoToDetaisPage(anuncio: Anuncio) {
    console.log(anuncio);
    this.router.navigate(['anuncios', anuncio.id]);
  }

  onExcluir(anuncio) {
    this.excluir.emit(anuncio);
  }

  onDesativar(anuncio) {
    this.desativar.emit(anuncio);
  }

  onAtualizar(anuncio) {
    this.atualizar.emit(anuncio);
  }

  onPageChange(page: number) {
    this.pageChange.emit(page);
  }
}
