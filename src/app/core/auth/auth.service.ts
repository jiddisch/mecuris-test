import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuth = new BehaviorSubject(false);

  isAuth$(): Observable<boolean> {
    return this.isAuth.asObservable();
  }

  login() {
    this.isAuth.next(true);
  }

  logout() {
    this.isAuth.next(false);
  }

  constructor() { }
}
