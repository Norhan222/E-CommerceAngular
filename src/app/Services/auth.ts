import { Iuser } from './../Models/iuser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
baseUrl:string=environment.apiUrl;
isLogged:BehaviorSubject<boolean>
  constructor(private http:HttpClient){
  this.isLogged=new BehaviorSubject<boolean>(false)
}
 register(user:Iuser):Observable<Iuser>
 {
  return this.http.post<Iuser>(`${this.baseUrl}/users`,user);
 }

 login(email:string,password:string){
  let token="tokenforuser"
  localStorage.setItem("Token", token);
  this.isLogged.next(true)

 }
 logout(){
  localStorage.removeItem("Token");
  this.isLogged.next(false)
 }
 checkLogin(): boolean {
    return localStorage.getItem('Token') ? true : false;
  }
}
