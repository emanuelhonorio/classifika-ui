import { Component, OnInit, ViewChild } from '@angular/core';
import { Categoria, Anuncio, Contato, Usuario } from 'src/app/core/models/classifika-models';
import { CategoriaService } from 'src/app/modules/categoria/services/categoria.service';
import { AccountService } from 'src/app/modules/account/services/account.service';
import { AnuncioService } from '../../services/anuncio.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalizacaoService } from 'src/app/modules/localizacao/services/localizacao.service';

interface CategoriaDropdown {
  label?: string;
  value?: Categoria;
}

interface ContatoDropdown {
  label?: string;
  value?: Contato;
}

@Component({
  selector: 'app-publicar-anuncio-page',
  templateUrl: './publicar-anuncio-page.component.html',
  styleUrls: ['./publicar-anuncio-page.component.scss']
})
export class PublicarAnuncioPageComponent implements OnInit {

  anuncio: Anuncio = {};
  categorias: Categoria[] = [];
  categoriasDropdown: CategoriaDropdown[] = [];
  contatosDropDown: ContatoDropdown[] = [];
  contatosDoUsuario: Contato[] = [];

  novoContato: Contato = {};
  modalContato = false;

  @ViewChild('fotosComponent')
  fotosComponent;

  uploadedFiles: any[] = [];

  constructor(
    private categoriaService: CategoriaService,
    private localizacaoService: LocalizacaoService,
    private accountService: AccountService,
    private anuncioService: AnuncioService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSubmit(event) {
    console.log('submit');
  }


}
