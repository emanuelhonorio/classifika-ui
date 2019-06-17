import { Component, OnInit } from '@angular/core';
import { AnuncioService } from '../../services/anuncio.service';
import { Anuncio, AnuncioFilter, Categoria } from 'src/app/core/models/classifika-models';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-anuncios-page',
  templateUrl: './anuncios-page.component.html',
  styleUrls: ['./anuncios-page.component.scss']
})
export class AnunciosPageComponent implements OnInit {

  anuncios: Anuncio[] = [];
  anuncioFilter: AnuncioFilter = {};
  page: number;
  size: number;

  constructor(private anuncioService: AnuncioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.pegarFiltrosDaRota();
    this.carregarAnuncios();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && this.router.url.split('?')[0] == '/') {
        console.log('entrou');
        this.pegarFiltrosDaRota();
        this.carregarAnuncios();
      }
    });
  }

  get categoriaSelecionada(): Categoria {
    if (this.anuncioFilter.categoria) {
      return {id: Number.parseInt(this.anuncioFilter.categoria)}
    }
    return {};
  }

  pegarFiltrosDaRota() {
    this.anuncioFilter.titulo = this.route.snapshot.queryParamMap.get('q');
    this.anuncioFilter.categoria =  this.route.snapshot.queryParamMap.get('c');
    this.anuncioFilter.uf = this.route.snapshot.queryParamMap.get('l');
  }

  carregarAnuncios() {
    this.anuncioService.listarAnuncios(this.anuncioFilter, this.page, this.size).subscribe((anunciosPage: any) => {
      this.anuncios = anunciosPage.content;
    });
  }

  atualizarFiltrosRota() {
    console.log('atualizar: ', this.anuncioFilter);
    this.router.navigate(
      [], 
      {
        relativeTo: this.route,
        queryParams: { c: this.anuncioFilter.categoria, l: this.anuncioFilter.uf, q: this.anuncioFilter.titulo },
        queryParamsHandling: "merge"
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
