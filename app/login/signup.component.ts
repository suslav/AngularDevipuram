import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    Message: string;    
    emailMessage: string;

    private validationMessages = {
        required: 'Please enter your email address.',
        pattern: 'Please enter a valid email address.'
    };

    constructor(
        private router: Router,
        private fb: FormBuilder, private _postService: SignupService
    ) { }

    ngOnInit() {
        this.signForm = this.fb.group({      

            email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]],
            name: ['', Validators.required],
            password: ['', Validators.required],
            UserTypeID:['2']


            //UserName: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]],
            //FirstName: ['', Validators.required],
            //Password: ['', Validators.required],
        });

        const emailControl = this.signForm.get('email');
        emailControl.valueChanges.debounceTime(1000).subscribe(value =>
            this.setMessage(emailControl));

    }

    signup() {        
        let body = this.signForm.value;

        this._postService.signupUser(body).subscribe(
            data => {

                console.log(data);

                return this.Message = "User Registered Successfully, Please Login to Continue";
            },
            error => {

                if (error.json().errors[0] == "The email has already been taken.")
                {
                    return this.Message = "UserName already exists";
                }

               else {
                    return this.Message = "An Error Occured: Try Again";
                }    


               // if (error.json().status == "Duplicate")
               // {
               //     return this.Message = "UserName already exists";
               // }

               //else {
               //     return this.Message = "An Error Occured: Try Again";
               // }              

               // return console.log(error.json().errors[0]);
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
