import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginPageComponent } from "./login-page/login-page.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { RegisterPageComponent } from "./register-page/register-page.component";
import { MinhaContaPageComponent } from "./minha-conta-page/minha-conta-page.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    MinhaContaPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,

    InputTextModule,
    ButtonModule,
  ],
})
export class AccountModule {}
