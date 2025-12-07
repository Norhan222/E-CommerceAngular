import { Component } from '@angular/core';
import { ICategory } from '../../Models/icategory';
import { RouterLink } from '@angular/router';
import { Auth } from '../../Services/auth';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  categories:ICategory[];
  isUserLogged:boolean=false

  constructor(private authService:Auth)
  {
    this.categories=[
      {id:1,name:'Electronics'},
      {id:2,name:'Accessories'},
      {id:3,name:'Clothing'},
      {id:4,name:'Home Appliances'}
    ];
    this.authService.isLogged.subscribe((res)=>{
      this.isUserLogged=res
    })
  }
  logout(){
    this.authService.logout();
    
  }
}
