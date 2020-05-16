import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product$(id: string): Observable<Product> {
    return this.http.get<Product>(`${environment.mocksPath}${id}.json`);
  }

  constructor(private http: HttpClient) { }
}
