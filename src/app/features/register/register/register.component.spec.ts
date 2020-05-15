import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { AuthService } from 'src/app/core/auth/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let service: AuthService;
  let router: Router;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [RouterTestingModule, SharedModule, BrowserAnimationsModule],
      providers: [AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('registerFormGroup should be instance of FormGroup', () => {
    expect(component.registerFormGroup).toBeInstanceOf(FormGroup);
  });

  it('register() should not call authService.login if not valid', () => {
    spyOn(service, 'login');
    component.register();
    expect(service.login).not.toHaveBeenCalled();
  });

  it('register() should not call router.navigate if not valid', () => {
    spyOn(router, 'navigate');
    component.register();
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('register() should not call authService.login if valid', () => {
    const button = debugElement.query(By.css('.register-btn')).nativeElement;
    spyOn(service, 'login');
    spyOn(router, 'navigate');

    button.click();

    component.registerFormGroup.controls['email'].setErrors(null);
    component.registerFormGroup.controls['password'].setErrors(null);

    component.register();
    expect(service.login).toHaveBeenCalled();
  });

  it('register() should not call authService.login if valid', () => {
    const button = debugElement.query(By.css('.register-btn')).nativeElement;
    spyOn(service, 'login');
    spyOn(router, 'navigate');

    button.click();

    component.registerFormGroup.controls['email'].setErrors(null);
    component.registerFormGroup.controls['password'].setErrors(null);

    component.register();
    expect(router.navigate).toHaveBeenCalled();
  });

});
