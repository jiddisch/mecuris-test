import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product/product.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products$(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.mocksPath}products.json`);
  }

  constructor(private http: HttpClient) { }
}
