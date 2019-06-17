import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizacaoChooseListComponent } from './localizacao-choose-list.component';

describe('LocalizacaoChooseListComponent', () => {
  let component: LocalizacaoChooseListComponent;
  let fixture: ComponentFixture<LocalizacaoChooseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalizacaoChooseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalizacaoChooseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
