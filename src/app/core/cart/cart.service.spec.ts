import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { Observable } from 'rxjs';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('cart$ should be observable', () => {
    expect(service.cart$()).toBeInstanceOf(Observable);
  });

  it('addToCart should be a function', () => {
    expect(service.addToCart).toBeInstanceOf(Function);
  });

  it('removeFromCart should be function', () => {
    expect(service.removeFromCart).toBeInstanceOf(Function);
  });
});
