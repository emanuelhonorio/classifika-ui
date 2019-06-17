import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuncioDetalhesPageComponent } from './anuncio-detalhes-page.component';

describe('AnuncioDetalhesPageComponent', () => {
  let component: AnuncioDetalhesPageComponent;
  let fixture: ComponentFixture<AnuncioDetalhesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnuncioDetalhesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnuncioDetalhesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
