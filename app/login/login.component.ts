import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import { AuthenticationService } from '../_services/index';

import { Http, Response, Headers, RequestOptions} from '@angular/http';

import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
 import { LoginService } from './login.service';


import { Observable } from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
   model: any = {};
   loading = false;
  
  data = '';
   error = '';

   
    loginForm: FormGroup;
    errorMessage: string;

    emailMessage: string;


    private validationMessages = {
        required: 'Please enter your email address.',
        pattern: 'Please enter a valid email address.'
    };


    constructor(
        private router: Router,
        private fb: FormBuilder
           , private http: Http
       , private _postService: LoginService
        // private authenticationService: AuthenticationService
    ) {       
      }

    ngOnInit() {       

        // this.authenticationService.logout();

        this.loginForm = this.fb.group({                    
           // UserName: ['', Validators.required],

            UserName: ['', [Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]],
            Password: ['', Validators.required],
        });   


        const emailControl = this.loginForm.get('UserName');
        emailControl.valueChanges.debounceTime(1000).subscribe(value =>
            this.setMessage(emailControl));
    }

    login() {

       // this.http.get("http://localhost:8080/DevipuramPhalcon/api/api/users").subscribe(

        //this.http.get("http://localhost:8080/laravel-example/public/api/v1/meeting").subscribe(
        //    (res: Response) =>
        //    {
        //        const weatherCity = res._body;

        //        console.log(weatherCity);
        //    }
        //)


        
        let body = this.loginForm.value;

        this._postService.loginUser(body).subscribe(
            data => {                
               console.log(data);
                return   this.router.navigate(['/']);
            },
            error => {
                console.error("Username or Password incorrect");
                //return Observable.throw(error);
                return this.errorMessage = "Invalid Username or Password";
            }
        );
      


        // let headers = new Headers({ 'Content-Type': 'application/json' });
        //let options = new RequestOptions({ headers: headers });
        //let body = JSON.stringify(this.loginForm.value);
        //return this.http.post('http://localhost:8080/DevipuramPhalcon/api/api/userlogin', body, options).map((res: Response) => res.json())
        //    .subscribe(
        //    data => {
        //        // refresh the list
        //      //  this.getFoods();

        //        console.log(data);
        //        return true;
        //    },
        //    error => {
        //        console.error("Error saving food!");
        //        return Observable.throw(error);
        //    }
        //    );


        

       
        //this.loading = true;

        // let url = 'http://localhost:8080/DevipuramPhalcon/api/api/userlogin';

        //let body = JSON.stringify(this.loginForm.value);      

        //   this._postService.loginService(url, body).subscribe(
        //    result => console.log("5. createService: " + result),
        //     error => this.errorMessage = <any>error
        //);      


         //this._postService.getDataObservable('http://localhost:8080/DevipuramPhalcon/api/api/users').subscribe(
         //   result => console.log("5. createService: " + result),
         //    error => this.errorMessage = <any>error
         //); 


        //this._postService.getDataObservable('http://localhost:8080/laravel-example/public/api/v1/meeting').subscribe(
        //    result => console.log("5. createService: " + result),
        //    error => this.errorMessage = <any>error
        //); 



           //this._postService.loginService(url, body).subscribe(
           //    result => {
           //     if (result === true) {
           //         this.router.navigate(['/']);
           //     } else {
           //         this.errorMessage = 'Username or password is incorrect';
           //         this.loading = false;
           //     }
           // });      


        //this.loading = true;
        //this.authenticationService.login(this.model.username, this.model.password)
        //    .subscribe(result => {
        //        if (result === true) {
        //            this.router.navigate(['/']);
        //        } else {
        //            this.error = 'Username or password is incorrect';
        //            this.loading = false;
        //        }
        //    });


    }


    setMessage(c: AbstractControl): void {
        this.emailMessage = '';
        if ((c.touched || c.dirty) && c.errors) {
            this.emailMessage = Object.keys(c.errors).map(key =>
                this.validationMessages[key]).join(' ');
        }
    }


}
