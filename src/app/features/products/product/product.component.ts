import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/core/product/product.model';
import { ProductService } from 'src/app/core/product/product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CartService } from 'src/app/core/cart/cart.service';
import { Cart } from 'src/app/core/cart/cart.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  product$: Observable<Product>;
  productFormGroup: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService
  ) {
    const navigation = this.router.getCurrentNavigation();

    if (navigation && navigation.extras && navigation.extras.state) {
      const state = navigation.extras.state as Product;
      this.product$ = of(state as Product);
    } else {
      this.activatedRoute.paramMap.subscribe((res) => {
        const paramId = res.get('id');
        this.product$ = this.productService.product$(paramId);
      });
    }
  }

  ngOnInit() {
    this.productFormGroup = new FormGroup({
      size: new FormControl('', [Validators.required]),
      color: new FormControl('', [Validators.required]),
      amount: new FormControl('1', [Validators.required])
    });
  }

  addToCart(product: Product) {
    if (this.productFormGroup.status === 'VALID') {
      const cartItem: Cart = {
        id: product.id,
        name: product.name,
        amount: this.productFormGroup.value.amount,
        size: this.productFormGroup.value.size || undefined,
        color: this.productFormGroup.value.color || undefined,
        price: product.price,
        totalPrice: product.price * this.productFormGroup.value.amount,
        date: new Date().getTime()
      };
      this.cartService.addToCart(cartItem);
      this.router.navigate(['cart']);
    }
  }
}
