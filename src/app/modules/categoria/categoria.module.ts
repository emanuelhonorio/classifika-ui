import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasListComponent } from './components/categorias-list/categorias-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CategoriasListComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    CategoriasListComponent
  ]
})
export class CategoriaModule { }
