import {Actions, ofType} from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { catchError, of, switchMap, map } from 'rxjs';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { AuthResponseData } from '../auth.service';
import { environment } from '../../../environments/environment';
import { User } from '../user.model';


export class AuthEffects {
  

    authLogin = this.actions$.pipe(
        ofType(AuthActions.LOGIN_START),
        switchMap((authData: AuthActions.LoginStart) => {
            return this.http.post<AuthResponseData>('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key='+ environment.firebaseAPIKey,{
            email: authData.payload.email,
            password: authData.payload.password,
            returnSecureToken: true
        }).pipe(catchError(error => {
            return of();
        }),map(resData => {
            const expirationDate = new Date(new Date().getTime() + +resData.expiresIn * 1000);
            const user: User=null;
            user.email = resData.email;
            user.id = resData.localId;
            
            
            return of(new AuthActions.Login(
                user
            ));
        }));
        })
    );
    constructor(private actions$: Actions,private http: HttpClient){

    }
}