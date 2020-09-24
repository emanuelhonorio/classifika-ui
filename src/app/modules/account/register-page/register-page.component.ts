import { Component, OnDestroy, OnInit } from "@angular/core";
import { Usuario } from "src/app/core/models/classifika-models";
import { AccountService } from "../services/account.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { take } from "rxjs/operators";

@Component({
  selector: "app-register-page",
  templateUrl: "./register-page.component.html",
  styleUrls: ["./register-page.component.scss"],
})
export class RegisterPageComponent implements OnInit {
  usuario: Usuario = {};

  constructor(
    private accountService: AccountService,
    private toastService: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {}

  registrar() {
    this.accountService
      .registrar(this.usuario)
      .pipe(take(1))
      .subscribe(
        () => {
          this.toastService.success(
            "Registrado com sucesso, você so precisa entrar agora"
          );
          this.router.navigate(["/entrar"]);
        },
        (err) => {
          let mensagem = "Algo deu errado, tente novamente mais tarde";
          if (err.error) {
            mensagem = err.error;
          }
          this.toastService.error(mensagem);
        }
      );
  }
}
