import { Injectable } from '@angular/core';
import { Router,CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private router: Router
) {}
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  if (localStorage.getItem('role')==='admin') {
    return true;
  }

  this.router.navigate(['profile']);
  return false;
}
}
