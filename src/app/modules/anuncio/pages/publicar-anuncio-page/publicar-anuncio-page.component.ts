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
    this.initCategorias();
    this.initContatos();
  }

  initCategorias() {
    this.categoriaService.listarCategorias().subscribe((categorias: Categoria[]) => {
      this.categorias = categorias;
      this.categoriasDropdown = [];
      this.categoriasDropdown.push({label: 'Selecione uma categoria', value: null});
      for (let categoria of this.categorias) {
        this.categoriasDropdown.push({label: categoria.nome, value: categoria});
      }
    });
  }

  initContatos() {
    this.accountService.getContatos().subscribe((contatos: Contato[]) => {
      this.contatosDoUsuario = contatos;

      this.contatosDropDown = [];
      this.contatosDropDown.push({label: 'Selecione um contato', value: null});
      for (let contato of this.contatosDoUsuario) {
        this.contatosDropDown.push({label: contato.telefone, value: contato});
      }
    });
  }

  uploadFotos(event) {
    this.uploadedFiles = [];
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }

    this.anuncioService.uparFotos(this.uploadedFiles, this.anuncio.id).subscribe(() => {
      console.log('fotos adicionadas');
      this.router.navigate(['/meus-anuncios']);
    });
  }

  consultarCep() {
    if (this.anuncio.cep && this.anuncio.cep.length === 8) {
      this.localizacaoService.consultarCep(this.anuncio.cep).subscribe((data: any) => {
        if (data.erro) {
          this.toastr.error('CEP inválido, insira-o novamente');
          this.anuncio.cep = '';
        } else {
          this.anuncio.uf = data.uf;
          console.log(data);
        }
      });
    }
  }

  anunciar(form: any) {    
    console.log(this.anuncio);
    console.log(this.uploadedFiles);

    this.anuncioService.anunciar(this.anuncio).subscribe((anuncio: Anuncio) => {
      this.anuncio.id = anuncio.id;
      this.fotosComponent.upload();
      this.toastr.success('Anuncio Publicado');
    }, err => {
      this.toastr.error('Algo deu errado, verifique se os campos foram inseridos corretamente');
    });

  }

  addContato() {
    this.accountService.addContato(this.novoContato).subscribe(() => {
      this.initContatos();
    });
    this.modalContato = false;
  }
  

}
