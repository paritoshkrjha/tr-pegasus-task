import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
export const authGuard: CanActivateFn = (route, state) => {
  const user=inject(UserService);
  const router=inject(Router);
  if (user.user) {
    return true;
  } 
  router.navigate(['/login'], {
    replaceUrl: true,
  });
  return false;
};
