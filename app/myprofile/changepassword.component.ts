import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators,AbstractControl } from '@angular/forms';
import { MyProfileService } from './myprofile.service';
import { Observable } from 'rxjs/Observable';

@Component({
    templateUrl: './app/myprofile/changepassword.component.html'
})

export class ChangePasswordComponent implements OnInit {
    
    chanpassForm: FormGroup;    
    Message: string;
    errorMessage: string;
    
    constructor(
        private router: Router,
        private fb: FormBuilder, private _postService: MyProfileService
    ) { }

    ngOnInit() {

        //this._postService.UserDetailsbyId().subscribe(
        //    answer => {
        //        if (answer.length > 0) {
                    
        //            let name1, city1, country1, address1, mobile1 = "";
        //            name1 = answer[0].name;
        //            city1 = answer[0].City;
        //            country1 = answer[0].Country;
        //            address1 = answer[0].Address;
        //            mobile1 = answer[0].Mobile;


        //            this.chanpassForm = this.fb.group({
        //                name: [name1, Validators.required],
        //                City: [city1, Validators.required],
        //                Country: [country1, Validators.required],
        //                Address: [address1, Validators.required],
        //                Mobile: [mobile1, Validators.required]
        //            });

                    
                                                             
        //        }

        //    },
        //    error =>{
               
        //        return this.Message = "An Error Occured: Try Again";

        //    }
        //);

        this.chanpassForm = this.fb.group({
            //   passwords: this.fb.group({
            password: ['', Validators.required],
            cpassword: ['', Validators.required]
            // })

            //  });
        },{validator: this.checkIfMatchingPasswords('password', 'cpassword') });
     //   this.subscribeToFormChangesAndSetValidity();
    }

    checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
        return (group: FormGroup) => {
            let passwordInput = group.controls[passwordKey],
                passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                return passwordConfirmationInput.setErrors({ notEquivalent: true })
            }
            else {
                return passwordConfirmationInput.setErrors(null);
            }
        }
    }

     

    //subscribeToFormChangesAndSetValidity() {
    //    const myFormValueChanges$ = this.chanpassForm.controls["passwords"].valueChanges;

    //    myFormValueChanges$.subscribe(x => {
    //        if (x.password === x.cpassword) {
    //            this.chanpassForm.controls["passwords"].setErrors(null);
    //        } else {
    //            this.chanpassForm.controls["passwords"].setErrors({ "notValid": true });
    //        }
    //    });
    //}

    updatePass() {        
      let Form = this.chanpassForm.value;

        let body = Form.password;

        this._postService.Updatepassword(body).subscribe(
            data => {
                return this.Message = "Password Changed Successfully";
            },
            error => {               
                    return this.Message = "An Error Occured: Try Again";  
                 
            }
        ); 
        
    }
     
}
