import { TestBed } from '@angular/core/testing';

import { AnuncioService } from './anuncio.service';

describe('AnuncioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnuncioService = TestBed.get(AnuncioService);
    expect(service).toBeTruthy();
  });
});
