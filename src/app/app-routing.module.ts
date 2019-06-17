import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnunciosPageComponent } from './modules/anuncio/pages/anuncios-page/anuncios-page.component';
import { PublicarAnuncioPageComponent } from './modules/anuncio/pages/publicar-anuncio-page/publicar-anuncio-page.component';
import { LoginPageComponent } from './modules/account/login-page/login-page.component';
import { RegisterPageComponent } from './modules/account/register-page/register-page.component';
import { AnuncioDetalhesPageComponent } from './modules/anuncio/pages/anuncio-detalhes-page/anuncio-detalhes-page.component';
import { MeusAnunciosPageComponent } from './modules/anuncio/pages/meus-anuncios-page/meus-anuncios-page.component';
import { AuthGuard } from './core/guards/auth.guard';
import { MinhaContaPageComponent } from './modules/account/minha-conta-page/minha-conta-page.component';

const routes: Routes = [
  { path: '', component: AnunciosPageComponent, pathMatch: 'full'},
  { path: 'meus-anuncios', component: MeusAnunciosPageComponent, canActivate: [AuthGuard] },
  { path: 'minha-conta', component: MinhaContaPageComponent, canActivate: [AuthGuard] },
  { path: 'anunciar', component: PublicarAnuncioPageComponent, canActivate: [AuthGuard] },
  { path: 'anuncios/:id', component: AnuncioDetalhesPageComponent },
  { path: 'entrar', component: LoginPageComponent },
  { path: 'cadastrar', component: RegisterPageComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
