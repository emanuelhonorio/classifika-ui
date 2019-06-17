import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicarAnuncioPageComponent } from './publicar-anuncio-page.component';

describe('PublicarAnuncioPageComponent', () => {
  let component: PublicarAnuncioPageComponent;
  let fixture: ComponentFixture<PublicarAnuncioPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicarAnuncioPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicarAnuncioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
