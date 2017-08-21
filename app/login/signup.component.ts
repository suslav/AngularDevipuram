import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import { AuthenticationService } from '../_services/index';

import { FormGroup, FormBuilder, Validators,AbstractControl } from '@angular/forms';
import { SignupService } from './signup.service';
import { Observable } from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    templateUrl: 'signup.component.html'
})

export class SignupComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';

    signForm: FormGroup;
    //errorMessage: string;
    //successMessage: string;


    Message: string;

     

    emailMessage: string;

    private validationMessages = {
        required: 'Please enter your email address.',
        pattern: 'Please enter a valid email address.'
    };

    constructor(
        private router: Router,
        private fb: FormBuilder, private _postService: SignupService
        // private authenticationService: AuthenticationService
    ) { }

    ngOnInit() {

        // this.authenticationService.logout();

        this.signForm = this.fb.group({            
           // UserName: ['', Validators.required],

            UserName: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]],
            FirstName: ['', Validators.required],
            Password: ['', Validators.required],
        });

        const emailControl = this.signForm.get('UserName');
        emailControl.valueChanges.debounceTime(1000).subscribe(value =>
            this.setMessage(emailControl));

    }

    signup() {

      
      //  let url = 'http://localhost:8080/DevipuramPhalcon/api/api/usersignup';

        //let body = this.signForm.value;

        //this._postService.signupUser(body).subscribe(
        //    data => {
                
        //        console.log(data);
               
        //         return this.router.navigate(['/']);
        //    },
        //    error => {
        //        console.error("Username or Password incorrect");
        //        return Observable.throw(error);
        //    }
        //);       



        let body = this.signForm.value;

        //this._postService.signupUser(body).subscribe(
        //    result => this.successMessage = "User Registered Successfully",
        //    error => this.errorMessage = <any>error
        //);    

        this._postService.signupUser(body).subscribe(
            data => {

                console.log(data);

                return this.Message = "User Registered Successfully";
            },
            error => {
              //  console.log(error.json().status);
                if (error.json().status == "Duplicate")
                {
                    return this.Message = "UserName already exists";
                }

               else {
                    return this.Message = "An Error Occured: Try Again";
                }              
              //  return Observable.throw(error);
            }
        ); 
        
    }

    setMessage(c: AbstractControl): void {
        this.emailMessage = '';
        if ((c.touched || c.dirty) && c.errors) {
            this.emailMessage = Object.keys(c.errors).map(key =>
                this.validationMessages[key]).join(' ');
        }
    }

}
