import { Component, Pipe } from '@angular/core';
import { Store } from '../../Models/store';
import { IProduct } from '../../Models/iproduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductCard } from '../../directives/product-card';
import { pipe } from 'rxjs';
import { CreditPipe } from '../../Pipes/credit-pipe';
import { Products } from '../products/products';

@Component({
  selector: 'app-home',
  imports: [CommonModule,FormsModule,CreditPipe,Products],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

 cartitem:number=0;
 date:Date=new Date();
 products:IProduct[]=[];
 FilterByName:string='';
 constructor()
  {

  }

AddProdutToCart(product:IProduct){
  let existingProduct=this.products.find(p=>p.id===product.id);
  if(existingProduct){
    existingProduct.quantity++;
    product.quantity--;
  }else{
  this.products.push({...product,quantity:1});
  product.quantity--;
  }
}
deleteProductFromCart(product:IProduct){
  let existingProduct=this.products.find(p=>p.id==product.id);
  if(existingProduct){
    existingProduct.quantity--;
    if(existingProduct.quantity===0){
      this.products=this.products.filter(p=>p.id!==product.id);

    }
    console.log(this.products);
  }

}
}
