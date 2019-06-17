import { Injectable } from '@angular/core';
import { Usuario, Credencial, Contato } from 'src/app/core/models/classifika-models';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private registerUrl: string = environment.classifikaUrl + '/register';
  private meUrl: string = environment.classifikaUrl + '/me';
  private tokenStorageName = environment.tokenStorageName;
  private contatoUrl = this.meUrl + "/contatos";

  constructor(private http: HttpClient) { }


  registrar(usuario: Usuario) {
    return this.http.post(this.registerUrl, usuario);
  }

  logar(credencial: Credencial) {
    const authToken = btoa(`${credencial.email}:${credencial.senha}`);
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + authToken
    });

    return this.http.get(this.meUrl, {headers}).pipe(
      map((usuario: Usuario) => {
        localStorage.setItem(this.tokenStorageName, authToken);
        return usuario;
      }),
      catchError((error) => {
        return Observable.throw(error);
      })
    );
  }

  deslogar() {
    localStorage.removeItem(this.tokenStorageName);
  }

  getMe() {
    const authToken = localStorage.getItem(this.tokenStorageName);
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + authToken
    });
    return this.http.get(this.meUrl, { headers });
  }

  isLogado() {
    return !!localStorage.getItem(this.tokenStorageName);
  }

  getContatos() {
    const authToken = localStorage.getItem(this.tokenStorageName);
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + authToken
    });
    return this.http.get(this.contatoUrl, { headers });
  }

  addContato(contato: Contato) {
    const authToken = localStorage.getItem(this.tokenStorageName);
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + authToken
    });
    return this.http.post(this.contatoUrl, contato, { headers });
  }

}
