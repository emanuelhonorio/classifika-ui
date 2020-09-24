import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { AccountService } from "src/app/modules/account/services/account.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private accountService: AccountService, private router: Router) {}

  canActivate(): boolean {
    if (!this.accountService.isLogado()) {
      this.router.navigateByUrl("/entrar");
      return false;
    }
    return true;
  }
}
