import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '../core/core.module';
import { AuthService } from '../core/auth/auth.service';
import { NotificationService } from '../core/notification/notification.service';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let service: AuthService;
  let notificationService: NotificationService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        RouterTestingModule,
        NoopAnimationsModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [AuthService, NotificationService]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(AuthService);
    notificationService = TestBed.inject(NotificationService);
  }));

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('the navigation collection should be defined', () => {
    expect(component.navigation).toBeDefined();
  });

  it('logout() should call authService.logout', () => {
    spyOn(service, 'logout');
    spyOn(notificationService, 'success');

    component.logout();

    expect(service.logout).toHaveBeenCalled();
  });

  it('logout should call notificationService', () => {
    spyOn(service, 'logout');
    spyOn(notificationService, 'success');

    component.logout();

    expect(notificationService.success).toHaveBeenCalled();
  });

});
