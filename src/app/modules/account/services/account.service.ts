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
  private isAdminStorageName = environment.isAdminStorageName;
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
        console.log(usuario.permissoes);
        let isAdmin = usuario.permissoes.find(p => p.nome == 'ROLE_ADMIN') ? true : false;
        localStorage.setItem(this.isAdminStorageName, JSON.stringify(isAdmin));
        return usuario;
      }),
      catchError((error) => {
        return Observable.throw(error);
      })
    );
  }

  deslogar() {
    localStorage.removeItem(this.tokenStorageName);
    localStorage.removeItem(this.isAdminStorageName);
  }

  getMe() {
    return this.http.get(this.meUrl);
  }

  isLogado() {
    return !!localStorage.getItem(this.tokenStorageName);
  }

  isAdmin() {
    return localStorage.getItem(this.isAdminStorageName) == 'true';
  }

  getToken() {
    return localStorage.getItem(this.tokenStorageName);
  }

  getContatos() {
    return this.http.get(this.contatoUrl);
  }

  addContato(contato: Contato) {
    return this.http.post(this.contatoUrl, contato);
  }

}
