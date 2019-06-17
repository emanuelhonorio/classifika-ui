import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Anuncio, AnuncioFilter } from 'src/app/core/models/classifika-models';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService {

  private listarAnunciosUrl = `${environment.classifikaUrl}/anuncios`;
  private meusAnunciosUrl = `${environment.classifikaUrl}/me/anuncios`;
  private tokenStorageName = environment.tokenStorageName;

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

    return this.http.get(this.listarAnunciosUrl, { params });
  }

  listarMeusAnuncios() {
    const authToken = localStorage.getItem(this.tokenStorageName);
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + authToken
    });
    return this.http.get(this.meusAnunciosUrl, {headers});
  }

  buscarPorId(id: Number) {
    let buscarAnuncioPorIdUrl = `${environment.classifikaUrl}/anuncios/${id}`;
    return this.http.get(buscarAnuncioPorIdUrl);
  }

  anunciar(anuncio: Anuncio) {
    const authToken = localStorage.getItem(this.tokenStorageName);
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + authToken
    });
    return this.http.post(this.meusAnunciosUrl, anuncio, { headers });
  }

  uparFotos(fotos: File[], anuncioId: number) {
    const authToken = localStorage.getItem(this.tokenStorageName);
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + authToken
    });
    let formdata: FormData = new FormData();
    for(let i =0; i < fotos.length; i++){
      formdata.append("fotos", fotos[i]);
    }    
    return this.http.post(`${this.meusAnunciosUrl}/${anuncioId}/fotos`, formdata, { headers });
  }

  toogleAtivoAnuncio(anuncioId: number) {
    const authToken = localStorage.getItem(this.tokenStorageName);
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + authToken
    });
    return this.http.patch(`${this.meusAnunciosUrl}/${anuncioId}/ativo`, null, { headers });
  }

  excluirAnuncio(anuncioId: number) {
    const authToken = localStorage.getItem(this.tokenStorageName);
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + authToken
    });
    return this.http.delete(`${this.meusAnunciosUrl}/${anuncioId}`, { headers });
  }
}
