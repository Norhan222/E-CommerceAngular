import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../Services/category-service';
import { ICategory } from '../../Models/icategory';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductService } from '../../Services/product-service';
import { IProduct } from '../../Models/iproduct';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct implements OnInit {
  productForm:FormGroup
  categories!:ICategory[];
  product: any = {
    name: '',
    price: 0,
    categoryId:'',
    description: ''
  };
  constructor(private categoryServive:CategoryService,private productService:ProductService,private router:Router)
   {
    this.productForm=new FormGroup({
      name:new FormControl('',[Validators.required]),
      price:new FormControl('',[Validators.required]),
      categoryId:new FormControl('',[Validators.required]),
      description:new FormControl(''),
    });
   }

  ngOnInit(): void {
    this.categoryServive.getCategories().subscribe((res)=>{
      this.categories=res;
    });
  }

submitForm(){
  if(this.productForm.valid){
   let productData = this.productForm.value;

      Object.assign(this.product, productData);

      this.productService.addProduct(this.product).subscribe({
        next: () => {
          alert('Product added!');
          this.router.navigate(['/products']);
        }
      });
}
}

}
