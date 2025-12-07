import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Notfound } from './Components/notfound/notfound';
import { Home } from './Components/home/home';
import { Products } from './Components/products/products';
import { ProductDetails } from './Components/product-details/product-details';
import { SignUp } from './Components/sign-up/sign-up';
import { SignIn } from './Components/sign-in/sign-in';
import { authGuard } from './Gaurds/auth-guard';
import { AddProduct } from './Components/add-product/add-product';

export const routes: Routes = [
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'home',component:Home},
{path:'products',component:Products,canActivate:[authGuard]},
{path:'products/:id',component:ProductDetails},
{path:'addproduct',component:AddProduct,canActivate:[authGuard]},
{path:'sign-in',component:SignIn},
{path:'sign-up',component:SignUp},
{path:'**',component:Notfound},
];
