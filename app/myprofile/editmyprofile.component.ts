import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators,AbstractControl } from '@angular/forms';
import { MyProfileService } from './myprofile.service';
import { Observable } from 'rxjs/Observable';

@Component({
    templateUrl: './app/myprofile/editmyprofile.component.html'
})

export class EditMyProfileComponent implements OnInit {
    
    editForm: FormGroup;    
    Message: string;
    errorMessage: string;
    
    constructor(
        private router: Router,
        private fb: FormBuilder, private _postService: MyProfileService
    ) { }

    ngOnInit() {

        this._postService.UserDetailsbyId().subscribe(
            answer => {
                if (answer.length > 0) {
                    
                    let name1, city1, country1, address1, mobile1 = "";
                    name1 = answer[0].name;
                    city1 = answer[0].City;
                    country1 = answer[0].Country;
                    address1 = answer[0].Address;
                    mobile1 = answer[0].Mobile;


                    this.editForm = this.fb.group({
                        name: [name1, Validators.required],
                        City: [city1, Validators.required],
                        Country: [country1, Validators.required],
                        Address: [address1, Validators.required],
                        Mobile: [mobile1, Validators.required]
                    });

                    //this.editForm = this.fb.group({
                    //    name: ['', Validators.required],
                    //    city: ['', Validators.required],
                    //    country: ['', Validators.required],
                    //    address: ['', Validators.required],
                    //    mobile: ['', Validators.required]
                    //});
                                                             
                }

            },
            error =>{
                //this.errorMessage = <any>error

                return this.Message = "An Error Occured: Try Again";

            }
        );


      
         
    }

    update() {        
        let body = this.editForm.value;

        console.log(body);
        this._postService.UpdateUser(body).subscribe(
            data => {

                console.log(data);

                return this.Message = "Your Profile Updated Successfully";
            },
            error => {

               // if (error.json().errors[0] == "The email has already been taken.")
               // {
               //     return this.Message = "UserName already exists";
               // }

               //else {
                    return this.Message = "An Error Occured: Try Again";
              //  }    
                 
            }
        ); 
        
    }
     
}
