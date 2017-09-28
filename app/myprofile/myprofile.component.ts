import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators,AbstractControl } from '@angular/forms';
import { MyProfileService } from './myprofile.service';
import { Observable } from 'rxjs/Observable';

@Component({   
     templateUrl: './app/myprofile/myprofile.component.html'
})

export class MyProfileComponent implements OnInit {
   
    errorMessage: string;

    user: any;

    email: string; name: string; city: string; country: string; address: string; mobile: string;

    constructor(private _mypService: MyProfileService) {

    }

    ngOnInit(): void {

        this._mypService.UserDetailsbyId().subscribe(
            users => {
                if (users.length > 0) {
                   // this.errorMessage = "";
                   // return this.user = visitors;
                    this.email = users[0].email;
                    this.name = users[0].name;
                    this.city = users[0].City;
                    this.country = users[0].Country;
                    this.address = users[0].Address;
                    this.mobile = users[0].Mobile;

                }
                else {
                  //  this.user = null;
                    return this.errorMessage = "Error Try again";
                }

            },
            error => {
                //return this.errorMessage = <any>error;
            }
        );

    }
     
}
