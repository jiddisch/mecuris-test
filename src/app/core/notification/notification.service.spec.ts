import { TestBed } from '@angular/core/testing';

import { NotificationService } from './notification.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Overlay } from '@angular/cdk/overlay';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationService, MatSnackBar, Overlay]
    });
    service = TestBed.inject(NotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('default method should be executable', () => {
    spyOn(service, 'default');
    service.default('default message');
    expect(service.default).toHaveBeenCalled();
  });

  it('info method should be executable', () => {
    spyOn(service, 'info');
    service.info('info message');
    expect(service.info).toHaveBeenCalled();
  });

  it('success method should be executable', () => {
    spyOn(service, 'success');
    service.success('success message');
    expect(service.success).toHaveBeenCalled();
  });
});
