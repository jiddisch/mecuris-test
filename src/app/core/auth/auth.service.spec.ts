import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have an observable isAuth$', () => {
    expect(service.isAuth$()).toBeInstanceOf(Observable);
  });

});
