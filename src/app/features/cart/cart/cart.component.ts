import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/cart/cart.service';
import { MatTableDataSource } from '@angular/material/table';
import { Cart } from 'src/app/core/cart/cart.model';
import { NotificationService } from 'src/app/core/notification/notification.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  displayedColumns = ['name', 'price', 'size', 'color', 'amount', 'totalPrice'];
  dataSource: MatTableDataSource<Cart>;
  isData: boolean;

  constructor(private cartService: CartService, private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.cartService.cart$().subscribe((res) => {
      this.isData = res.length > 0 ? true : false;
      this.dataSource = new MatTableDataSource(res);
    });
  }

  calculateTotalPrice(e: any, element: Cart) {
    console.log(e);
    element.totalPrice = element.price * e.target.value;
  }

  buyNow() {
    this.notificationService.info('Thank You!');
    console.log(this.dataSource.data);
  }

}
