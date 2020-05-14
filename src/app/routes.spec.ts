import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from './app-routing.module';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

describe('Router', () => {
  let router: Router;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)]
    });

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    router.initialNavigation();
  });

  it('navigate to "" redirects you to /login', async( () => {
    router.navigate(['']).then(() => {
      expect(location.path()).toBe('/login');
    });
  }) );

  it('navigate to "login" redirects you to /login', async( () => {
    router.navigate(['login']).then(() => {
      expect(location.path()).toBe('/login');
    });
  }) );

  it('navigate to "register" redirects you to /register', async( () => {
    router.navigate(['register']).then(() => {
      expect(location.path()).toBe('/register');
    });
  }) );

  it('navigate to "products" redirects you to /products', async( () => {
    router.navigate(['products']).then(() => {
      expect(location.path()).toBe('/products');
    });
  }) );

  it('navigate to "cart" redirects you to /cart', async( () => {
    router.navigate(['cart']).then(() => {
      expect(location.path()).toBe('/cart');
    });
  }) );

  it('navigate to "history" redirects you to /history', async( () => {
    router.navigate(['history']).then(() => {
      expect(location.path()).toBe('/history');
    });
  }) );
});
