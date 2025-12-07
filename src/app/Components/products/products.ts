import { ProductService } from './../../Services/product-service';
import { Component, EventEmitter, Input, OnInit, Output, Pipe } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule,RouterModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit{

productList:IProduct[] = [];
productFilter:IProduct[]=this.productList;
cartitem:number=0;

constructor(private productService:ProductService){

  this.productService.getProducts().subscribe({
    next:(data:IProduct[])=>{
      this.productList=data;
      this.productFilter=this.productList;
    },
    error:(err:any)=>{
      console.log(err);
    }
  });
}

  ngOnInit(): void {
//      this.productList=[
//   {
//     id: 1,
//     name: 'Laptop',
//     price: 999.99,
//     quantity: 1,
//     description: 'High performance laptop',
//     imageUrl: './download.jpeg',
//     categoryId: 1
//   },
//   {
//     id: 2,
//     name: 'Smartphone',
//     price: 699.99,
//     quantity: 25,
//     description: 'Latest model smartphone',
//     imageUrl: './download (8).jpeg',
//     categoryId: 1
//   },
//   {
//     id: 3,
//     name: 'Headphones',
//     price: 199.99,
//     quantity: 1,
//     description: 'Noise-cancelling headphones',
//     imageUrl: './download (1).jpeg',
//     categoryId: 2
//   },
//   {
//     id: 4,
//     name: 'Smartwatch',
//     price: 299.99,
//     quantity: 0,
//     description: 'Feature-rich smartwatch',
//     imageUrl: './download (2).jpeg',
//     categoryId: 1
//   }
// ];
    this.productFilter=this.productList;
    this.productFilter=this.searchForProducts(this.Filtervalue);
  }
@Output() addtocart =new EventEmitter<IProduct>();

  addToCart(product: IProduct) {
    this.addtocart.emit(product);
  }

@Input() set Filtervalue(value:string){
  this.productService.getProducts().subscribe((data:IProduct[])=>{
    this.productList=data;
    this.productFilter=this.searchForProducts(value);
  });
}

searchForProducts(value:string): IProduct[]  {
  return this.productList.filter(p => p.name.toLowerCase().includes(value.toLowerCase()));
}

}
