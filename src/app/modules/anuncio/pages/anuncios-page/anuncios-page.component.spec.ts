import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnunciosPageComponent } from './anuncios-page.component';

describe('AnunciosPageComponent', () => {
  let component: AnunciosPageComponent;
  let fixture: ComponentFixture<AnunciosPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnunciosPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnunciosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
