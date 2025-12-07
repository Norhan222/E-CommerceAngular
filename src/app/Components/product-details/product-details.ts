import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../Models/iproduct';
import { ProductService } from './../../Services/product-service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  product!:IProduct;
  id!:string;
  constructor(private productService:ProductService ,private route:ActivatedRoute)
  {
    this.route.params.subscribe((param)=>
    {
       this.id= param['id'];}
    );
    console.log(this.id);
  this.productService.getProductById(this.id).subscribe((data)=>{
      this.product=data;
    },
  )}
}
