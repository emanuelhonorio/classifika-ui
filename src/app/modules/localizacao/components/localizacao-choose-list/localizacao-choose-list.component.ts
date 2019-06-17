import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-localizacao-choose-list',
  templateUrl: './localizacao-choose-list.component.html',
  styleUrls: ['./localizacao-choose-list.component.scss']
})
export class LocalizacaoChooseListComponent implements OnInit {

  localizacoes: string[] = [];

  @Output()
  select = new EventEmitter();

  @Output()
  excluir = new EventEmitter();

  @Input()
  localizacaoSelecionada: string;

  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.localizacoes = [
      'AC',
      'AL',
      'AP',
      'AM',
      'BA',
      'CE',
      'DF',
      'ES',
      'GO',
      'MA',
      'MT',
      'MS',
      'MG',
      'PA',
      'PB',
      'PR',
      'PE',
      'PI',
      'RJ',
      'RN',
      'RS',
      'RO',
      'RR',
      'SC',
      'SP',
      'SE',
      'TO'
    ];
  }

  onLocalizacaoSelect(localizacao) {
    if (localizacao === this.localizacaoSelecionada) {
      this.excluir.emit(this.localizacaoSelecionada);
    } else {
      this.select.emit(localizacao);
    }
  }

}
