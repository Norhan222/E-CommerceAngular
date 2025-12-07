import { Component } from '@angular/core';
import { Auth } from '../../Services/auth';
import { FormsModule } from '@angular/forms';
import { Iuser } from '../../Models/iuser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  imports: [FormsModule,CommonModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp {
  user:Iuser={} as Iuser;
constructor(private authService: Auth) {

}
AddUser() {
  this.authService.register(this.user).subscribe((res) => {
    alert('User Registered Successfully');
  });
}
addMobile() {
  if (!this.user.phoneNumber) {
    this.user.phoneNumber = [''];
  }
  this.user.phoneNumber.push('');
}
removeMobile(index: number) {
  this.user.phoneNumber?.splice(index, 1);
}
}
