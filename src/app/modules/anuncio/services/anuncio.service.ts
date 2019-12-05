import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Anuncio, AnuncioFilter } from 'src/app/core/models/classifika-models';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService {

  private anunciosUrl = `${environment.classifikaUrl}/anuncios`;
  private meusAnunciosUrl = `${environment.classifikaUrl}/me/anuncios`;

  constructor(private http: HttpClient) { }

  listarAnuncios(anuncioFilter: AnuncioFilter, page: number, size: number) {
    let params = new HttpParams();

    if (anuncioFilter.titulo) {
      params = params.append('titulo', anuncioFilter.titulo);
    }

    if (anuncioFilter.categoria) {
      params = params.append('categoria', anuncioFilter.categoria.toString());
    }

    if (anuncioFilter.uf) {
      params = params.append('uf', anuncioFilter.uf);
    }

    if (page) {
      params = params.append('page', page.toString());
    }

    if (size) {
      params = params.append('size', size.toString());
    }

    return this.http.get(this.anunciosUrl, { params });
  }

  listarMeusAnuncios() {
    return this.http.get(this.meusAnunciosUrl);
  }

  buscarPorId(id: Number) {
    let buscarAnuncioPorIdUrl = `${environment.classifikaUrl}/anuncios/${id}`;
    return this.http.get(buscarAnuncioPorIdUrl);
  }

  anunciar(anuncio: Anuncio) {
    return this.http.post(this.anunciosUrl, anuncio);
  }

  atualizar(anuncio: Anuncio) {
    return this.http.put(`${this.anunciosUrl}/${anuncio.id}`, anuncio);
  }

  uparFotos(fotos: File[], anuncioId: number) {
    let formdata: FormData = new FormData();
    for(let i =0; i < fotos.length; i++){
      formdata.append("fotos", fotos[i]);
    }
    return this.http.post(`${this.anunciosUrl}/${anuncioId}/fotos`, formdata);
  }

  toogleAtivoAnuncio(anuncioId: number) {
    return this.http.patch(`${this.anunciosUrl}/${anuncioId}/ativo`, null);
  }

  excluirAnuncio(anuncioId: number) {
    return this.http.delete(`${this.anunciosUrl}/${anuncioId}`);
  }
}
