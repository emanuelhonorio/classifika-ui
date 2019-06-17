import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuncioGridComponent } from './anuncio-grid.component';

describe('AnuncioGridComponent', () => {
  let component: AnuncioGridComponent;
  let fixture: ComponentFixture<AnuncioGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnuncioGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnuncioGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
