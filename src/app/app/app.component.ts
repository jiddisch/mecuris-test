import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../core/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth$ = this.authService.isAuth$();
  navigation = [
    {
      link: '/products',
      label: 'Products'
    },
    {
      link: '/cart',
      label: 'Cart'
    },
    {
      link: '/history',
      label: 'History'
    }
  ];

  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService) {}

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  logout() {
    this.authService.logout();
  }

}
