import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaContaPageComponent } from './minha-conta-page.component';

describe('MinhaContaPageComponent', () => {
  let component: MinhaContaPageComponent;
  let fixture: ComponentFixture<MinhaContaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhaContaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhaContaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
