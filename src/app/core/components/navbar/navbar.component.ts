import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/modules/account/services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit() {
  }

  isLogado() {
    return this.accountService.isLogado();
  }

  deslogar() {
    this.accountService.deslogar();
    this.router.navigate(['']);
  }
}
