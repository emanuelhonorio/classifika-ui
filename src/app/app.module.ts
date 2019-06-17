import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CategoriaModule } from './modules/categoria/categoria.module';
import { AnuncioModule } from './modules/anuncio/anuncio.module';
import { LocalizacaoModule } from './modules/localizacao/localizacao.module';
import { AccountModule } from './modules/account/account.module';

import { ToastrModule } from 'ngx-toastr';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    
    ToastrModule.forRoot(),
    
    CoreModule,
    CategoriaModule,
    AnuncioModule,
    LocalizacaoModule,
    AccountModule,
    AppRoutingModule
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
