import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuAnuncioComponent } from './meu-anuncio.component';

describe('MeuAnuncioComponent', () => {
  let component: MeuAnuncioComponent;
  let fixture: ComponentFixture<MeuAnuncioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuAnuncioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuAnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
