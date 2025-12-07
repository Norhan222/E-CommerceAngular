import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl: string = environment.apiUrl;
  constructor(private http:HttpClient) {}


  getProducts():Observable<IProduct[]>
  {
    return this.http.get<IProduct[]>(`${this.baseUrl}/Products`);
  }

  getProductById(id:string):Observable<IProduct>
  {
    return this.http.get<IProduct>(`${this.baseUrl}/Products/${id}`);
  }
  addProduct(product:IProduct):Observable<IProduct>
  {
    return this.http.post<IProduct>(`${this.baseUrl}/Products`,product);
  }
}

