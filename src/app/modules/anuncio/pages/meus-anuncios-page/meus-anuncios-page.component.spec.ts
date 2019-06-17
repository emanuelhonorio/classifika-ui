import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusAnunciosPageComponent } from './meus-anuncios-page.component';

describe('MeusAnunciosPageComponent', () => {
  let component: MeusAnunciosPageComponent;
  let fixture: ComponentFixture<MeusAnunciosPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeusAnunciosPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusAnunciosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
