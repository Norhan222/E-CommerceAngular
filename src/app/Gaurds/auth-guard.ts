import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../Services/auth';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  let userService=inject(Auth)
  let router=inject(Router)
  if(userService.checkLogin()==true){
  return true;
} else{
    router.navigate(['/sign-in'])
    return false
  }
};
