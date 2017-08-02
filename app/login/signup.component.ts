import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import { AuthenticationService } from '../_services/index';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignupService } from './signup.service';

@Component({
    moduleId: module.id,
    templateUrl: 'signup.component.html'
})

export class SignupComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';

    signForm: FormGroup;
    errorMessage: string;

    constructor(
        private router: Router,
        private fb: FormBuilder, private _postService: SignupService
        // private authenticationService: AuthenticationService
    ) { }

    ngOnInit() {

        // this.authenticationService.logout();

        this.signForm = this.fb.group({            
            UserName: ['', Validators.required],
            FirstName: ['', Validators.required],
            Password: ['', Validators.required],
        });
    }

    signup() {

      //  this.loading = true;

        // console.log(this.loginForm);

        let url = 'http://localhost:8080/DevipuramPhalcon/api/api/usersignup';

        let body = JSON.stringify(this.signForm.value);

        // console.log(body);

        this._postService.regService(url, body).subscribe(
            result => console.log("5. createService: " + result),
            error => this.errorMessage = <any>error
        );

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
}
