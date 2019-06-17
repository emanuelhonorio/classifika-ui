import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private categoriaUrl = `${environment.classifikaUrl}/categorias`;

  constructor(private http: HttpClient) { }

  listarCategorias() {
    return this.http.get(this.categoriaUrl);
  }
}
