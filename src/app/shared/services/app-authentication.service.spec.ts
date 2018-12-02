import { TestBed } from '@angular/core/testing';

import { AppAuthenticationService } from './app-authentication.service';

describe('AppAuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppAuthenticationService = TestBed.get(AppAuthenticationService);
    expect(service).toBeTruthy();
  });
});
