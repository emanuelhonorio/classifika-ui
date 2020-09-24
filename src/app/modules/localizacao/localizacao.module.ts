import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LocalizacaoChooseListComponent } from "./components/localizacao-choose-list/localizacao-choose-list.component";

@NgModule({
  declarations: [LocalizacaoChooseListComponent],
  imports: [CommonModule],
  exports: [LocalizacaoChooseListComponent],
})
export class LocalizacaoModule {}
