import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { map, tap, take } from 'rxjs/operators';
import { Store } from "@ngrx/store";
import * as fromApp from '../store/app.reducer';

const isAuthenticated = (): | boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> => {
  const authService = inject(AuthService);
  const store = inject(Store<fromApp.AppState>);

  const router = inject(Router);
  return store.select('auth').pipe(
    take(1),
    map(authState => { return authState.user}),
    map(user => {
      const isAuth = !!user;
      if (isAuth) {
        console.log('router' + true);
        return true;
      }
      else
      {
        
        router.navigate(['/']); 
        return false;
                  
      }
      
    })
    
  );
}

export const canActivate:CanActivateFn = isAuthenticated;
export const canMatch:CanMatchFn = isAuthenticated;




