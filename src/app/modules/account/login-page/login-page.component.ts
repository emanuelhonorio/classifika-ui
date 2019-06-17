import { Component, OnInit } from '@angular/core';
import { Credencial, Usuario } from 'src/app/core/models/classifika-models';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  credencial: Credencial = {};

  constructor(private accountService: AccountService, private router: Router, private toastService: ToastrService) { }

  ngOnInit() {
  }

  entrar() {
    this.accountService.logar(this.credencial).subscribe((usuario: Usuario) => {
      this.toastService.success('Logado com sucesso');
      this.router.navigate(['']);
    }, (err) => {
      this.toastService.error('Email ou senha inválidos');
    });
  }

}
