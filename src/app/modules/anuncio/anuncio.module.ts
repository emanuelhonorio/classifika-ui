import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { CurrencyMaskModule } from "ng2-currency-mask";
import { NgxMaskModule, IConfig } from "ngx-mask";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { DialogModule } from "primeng/dialog";
import { FileUploadModule } from "primeng/fileupload";
import { NgxGalleryModule } from "ngx-gallery-9";
import { InputTextareaModule } from "primeng/inputtextarea";
import { TabViewModule } from "primeng/tabview";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { NgxPaginationModule } from "ngx-pagination";

import { AnuncioGridComponent } from "./components/anuncio-grid/anuncio-grid.component";
import { AnunciosPageComponent } from "./pages/anuncios-page/anuncios-page.component";
import { CategoriaModule } from "../categoria/categoria.module";
import { LocalizacaoModule } from "../localizacao/localizacao.module";
import { PublicarAnuncioPageComponent } from "./pages/publicar-anuncio-page/publicar-anuncio-page.component";
import { AnuncioDetalhesPageComponent } from "./pages/anuncio-detalhes-page/anuncio-detalhes-page.component";
import { MeusAnunciosPageComponent } from "./pages/meus-anuncios-page/meus-anuncios-page.component";
import { MeuAnuncioComponent } from "./components/meu-anuncio/meu-anuncio.component";
import { AnuncioFormComponent } from "./components/anuncio-form/anuncio-form.component";
import { AtualizarAnuncioPageComponent } from "./pages/atualizar-anuncio-page/atualizar-anuncio-page.component";

export let options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    AnuncioGridComponent,
    AnunciosPageComponent,
    PublicarAnuncioPageComponent,
    AnuncioDetalhesPageComponent,
    MeusAnunciosPageComponent,
    MeuAnuncioComponent,
    AnuncioFormComponent,
    AtualizarAnuncioPageComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule,

    NgxPaginationModule,
    CurrencyMaskModule,
    NgxMaskModule.forRoot(options),
    FileUploadModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    NgxGalleryModule,
    InputTextareaModule,
    TabViewModule,
    ConfirmDialogModule,

    CategoriaModule,
    LocalizacaoModule,
  ],
  exports: [AnunciosPageComponent, AnuncioGridComponent],
})
export class AnuncioModule {}
