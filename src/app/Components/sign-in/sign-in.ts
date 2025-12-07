import { routes } from './../../app.routes';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../Services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  imports: [FormsModule],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css',
})
export class SignIn {
  email:string='';
  password:string='';
  constructor(private authService:Auth,private routes:Router) {}


 Login() {
  this.authService.login(this.email,this.password);
  this.routes.navigateByUrl('/home');

  }
}
