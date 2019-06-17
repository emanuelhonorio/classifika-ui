import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { Categoria } from 'src/app/core/models/classifika-models';

@Component({
  selector: 'app-categorias-list',
  templateUrl: './categorias-list.component.html',
  styleUrls: ['./categorias-list.component.scss']
})
export class CategoriasListComponent implements OnInit {
  
  categorias: Categoria[] = [];

  @Input()
  categoriaSelecionada: Categoria = {};

  @Output()
  select = new EventEmitter();

  @Output()
  excluir = new EventEmitter();

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.categoriaService.listarCategorias().subscribe((categorias: any[]) => {
      this.categorias = categorias;
    });
  }

  aoClicarCategoria(categoria: any) {
    this.select.emit(categoria);
  }

  excluirSelecao() {
    this.excluir.emit(this.categoriaSelecionada);
  }

}
