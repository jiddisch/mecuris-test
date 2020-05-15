import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AuthService } from 'src/app/core/auth/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: AuthService;
  let router: Router;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [RouterTestingModule, SharedModule, BrowserAnimationsModule],
      providers: [AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('loginFormGroup should be instance of FormGroup', () => {
    expect(component.loginFormGroup).toBeInstanceOf(FormGroup);
  });

  it('login() should not call authService.login if not valid', () => {
    spyOn(service, 'login');
    component.login();
    expect(service.login).not.toHaveBeenCalled();
  });

  it('login() should not call router.navigate if not valid', () => {
    spyOn(router, 'navigate');
    component.login();
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('login() should not call authService.login if valid', () => {
    const button = debugElement.query(By.css('.login-btn')).nativeElement;
    spyOn(service, 'login');
    spyOn(router, 'navigate');

    button.click();

    component.loginFormGroup.controls['email'].setErrors(null);
    component.loginFormGroup.controls['password'].setErrors(null);

    component.login();
    expect(service.login).toHaveBeenCalled();
  });

  it('login() should not call authService.login if valid', () => {
    const button = debugElement.query(By.css('.login-btn')).nativeElement;
    spyOn(service, 'login');
    spyOn(router, 'navigate');

    button.click();

    component.loginFormGroup.controls['email'].setErrors(null);
    component.loginFormGroup.controls['password'].setErrors(null);

    component.login();
    expect(router.navigate).toHaveBeenCalled();
  });

});
