import { TestBed } from '@angular/core/testing';

import { AppBookService } from './app-book.service';

describe('AppBookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppBookService = TestBed.get(AppBookService);
    expect(service).toBeTruthy();
  });
});
