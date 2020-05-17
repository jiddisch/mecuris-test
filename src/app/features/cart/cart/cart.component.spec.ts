import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Cart } from 'src/app/core/cart/cart.model';
import { NotificationService } from 'src/app/core/notification/notification.service';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let notificationService: NotificationService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, NoopAnimationsModule],
      declarations: [CartComponent],
      providers: [NotificationService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    notificationService = TestBed.inject(NotificationService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('calculateTotalPrice should calculate the total price', () => {
    const e = { target: { value: 2 } };
    const element: Cart = {
      id: 1,
      name: 'name',
      date: new Date().getTime(),
      price: 500,
      amount: 2,
    };
    component.calculateTotalPrice(e, element);
    expect(element.totalPrice).toBe(1000);
  });

  it('buyNow should call notificationService', () => {
    spyOn(notificationService, 'info');
    component.buyNow();
    expect(notificationService.info).toHaveBeenCalled();
  });
});
