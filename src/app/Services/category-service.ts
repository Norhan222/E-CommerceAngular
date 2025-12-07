import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../Models/icategory';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  baseUrl: string = environment.apiUrl;
  constructor(private http:HttpClient) {}


  getCategories():Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${this.baseUrl}/categories`);
  }
}
