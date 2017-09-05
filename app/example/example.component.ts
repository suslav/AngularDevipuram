import { Component, OnInit } from '@angular/core';

//import { User, UserProfile } from './models';
// import the user service. This isn't important for our demo, just think of it as an async data source.
//import { UserService } from './services';

@Component({
   // selector: 'app',
    template: `
    <user-input [user]="user" (isValid)="userValid = $event">
    </user-input>
    <user-profile-input [userProfile]="userProfile" (isValid)="userProfileValid = $event">
    <user-profile-input>
    <button [disabled]="isFormValid()" (click)="handleSubmit()">Submit</button>
  `
})

export class AppComponent implements OnInit {
    // here we instantiate our form variables for our models.
    //user: Observable<User>;
    //userProfile: Observable<UserProfile>;

    user: any;
    userProfile: any;


    // here we instantiate our variables to hide the 
    private userValid: boolean = false;
    private userProfileValid: boolean = false;
    private errors: any[] = [];

    constructor(
    //    private userService: UserService
    ) { }

    ngOnInit() {
        // here we are getting our data from a service.
        //this.userService.getUser(
        //    data => {
        //        this.user = data.user;
        //        this.userProfile = data.userProfile;
        //    },
        //    error => this.errors.push(error)
        //);
    }

    isFormValid() {
        if (this.userValid && this.userProfileValid) {
            return true;
        } else {
            return false;
        }
    }

    handleSubmit() {
        // here we are posting data from the forms to our form.
       // this.userService.postUser(this.user, this.userProfile);
    }
}