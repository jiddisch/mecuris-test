import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Cart } from './cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart = new BehaviorSubject<Cart[]>([
    // {
    //   amount: 1,
    //   color: 'black',
    //   date: 1589714015991,
    //   id: 1,
    //   name: 'Mecuris FirStep',
    //   price: 500,
    //   totalPrice: 500,
    //   size: 32,
    // }
  ]);

  constructor() {}

  cart$(): Observable<Cart[]> {
    return this.cart.asObservable();
  }

  addToCart(item: Cart) {
    const cart = this.cart.value;
    this.cart.next([...cart, item]);
  }

  removeFromCart(item: Cart) {
    const cart = this.cart.value;
    const filteredCart = cart.filter((cartItem) => cartItem !== item);
    this.cart.next(filteredCart);
  }
}
