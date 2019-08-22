import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AccountGuard implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    const id = route.paramMap.get('id');
    const int = parseInt(id, 10);

    if (id && !isNaN(int) && int > 0) {
      return true;
    } else {
      return false;
    }
  }
}
