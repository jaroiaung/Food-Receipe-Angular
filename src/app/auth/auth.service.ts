import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, tap} from "rxjs";
import { Subject, throwError } from "rxjs";
import { User } from "./user.model";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";
import { Store } from "@ngrx/store";
import * as fromApp from "../store/app.reducer";
import * as AuthActions from "./store/auth.actions";

export interface AuthResponseData{
    kind: string;
    idToken : string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}
@Injectable({providedIn: 'root'})
export class AuthService {
    //user = new BehaviorSubject<User>(null);
    token : string= null;
    private tokenExpirationTimer: any;
    constructor(private http: HttpClient, private router: Router,private store : Store<fromApp.AppState> ) {

    }
    signup(email: string,password: string){
        return this.http.post<AuthResponseData>('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key='+ environment.firebaseAPIKey,{
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(catchError(this.handleError), tap(resData => {
            this.handleAuthentication(resData.email,resData.localId,resData.idToken, +resData.expiresIn);
        }));
    }


    login(email: string,password: string){
        return this.http.post<AuthResponseData>('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key='+ environment.firebaseAPIKey,{
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(catchError(this.handleError),tap(resData => {
            this.handleAuthentication(resData.email,resData.localId,resData.idToken, +resData.expiresIn);
        }));
        
    }

    logout(){
        //this.user.next(null);
        this.store.dispatch(new AuthActions.Logout());
        this.router.navigate(['/auth']);
        localStorage.removeItem('userData');
        if(this.tokenExpirationTimer){
            clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
    }

    autoLogout(expirationDuration: number){
        this.tokenExpirationTimer = setTimeout(() => {
            this.logout();
        },expirationDuration);
    }

    autoLogin(){
        const userData: {email: string; id: string;_token: string;_tokenExpirationDate: string} = JSON.parse(localStorage.getItem('userData'));

        if(!userData){
            return;
        }

        const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));

        if(loadedUser.token){
            //this.user.next(loadedUser);
            this.store.dispatch(new AuthActions.Login(loadedUser));

            const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
            this.autoLogout(expirationDuration);
        }
    }

    private handleAuthentication(email: string, userId: string, token : string, expiresIn : number){
        const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
        const user = new User(email,userId, token,expirationDate);
        this.store.dispatch(new AuthActions.Login(user));

        //this.user.next(user);
        this.autoLogout(expiresIn * 1000);
        localStorage.setItem('userData', JSON.stringify(user));
    }

    private handleError(errorRes: HttpErrorResponse){

        let errorMessage = 'Unknown error has occurred.';

            if(!errorRes.error || !errorRes.error.error){
                return throwError(errorMessage);
            }
            
            switch(errorRes.error.error.message){
                case 'EMAIL_EXISTS':
                    errorMessage = 'The email already exists in the system.';
                    break;
                case 'EMAIL_NOT_FOUND':
                    errorMessage = 'The email not found in the system.';
                    break;
                case 'INVALID_PASSWORD':
                    errorMessage = 'The password is not valid.';
                    break;
                case 'INVALID_LOGIN_CREDENTIALS':
                    errorMessage = 'Login credentail is not valid.';
                    break;         
            }
            return throwError(errorMessage);
    }
}