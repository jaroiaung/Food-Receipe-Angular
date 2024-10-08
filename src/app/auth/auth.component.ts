import { Component, ComponentFactoryResolver, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthResponseData, AuthService } from "./auth.service";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { AlertComponent } from "../shared/alert/alert.component";
import { PlaceholderDirective } from "../shared/placeholder/placeholder.directive";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrl: './auth.component.css'
})
export class AuthComponent{
    isLoginMode = true;
    isLoading = false;
    error: string = null;
    @ViewChild(PlaceholderDirective) alertHost: PlaceholderDirective;

    
    constructor(private authService : AuthService, private router: Router, private componentFactoryResolver: ComponentFactoryResolver){

    }

    onSwitchMode(){
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form : NgForm){
        if(!form.valid){
            return;
        }
        this.isLoading = true;
        const email = form.value.email;
        const password = form.value.password;
        let authObs: Observable<AuthResponseData>;

        if(this.isLoginMode){
            authObs = this.authService.login(email,password);
        }
        else
        {
            authObs = this.authService.signup(email,password);
            
        }

        authObs.subscribe({next: (resData) => {
            console.log(resData);
            this.isLoading = false;
            this.router.navigate(['/recipes']);
        }, error : (errorMessage) => {
            this.error = errorMessage;
            
            this.isLoading = false;
        }});

        form.reset();

        
    }


    onHandleError(){
        this.error = null;
    }

   
}