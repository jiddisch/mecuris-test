import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$ = this.productsService.products$();

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }

}
