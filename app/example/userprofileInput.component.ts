//import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
//import { FormBuilder, FormGroup, Validator } from '@angular/forms';

////import { UserProfile, BlankUserProfile } from '../models';

//@Component({
//    selector: 'user-profile-input',
//    templateUrl: '/userProfileInput/userProfileInput.html'
//})

//export class UserProfileInputComponent implements OnChanges {
  //  @Input() userProfile: UserProfile;
//    @Output() isValid = new EventEmitter();
//    private userProfileForm: FormGroup;

//    constructor(private formBuilder: FormBuilder) {
//        // construct our form and tell formbuilder what validators we need.
//        //this.userProfileForm = formBuilder.group({
//        //    'address' = [undefinded],
//        //    'city' = [undefined],
//        //    'zipcode' = [undefined],
//        //    'state' = [undefined]
//        //});

//        // here we are subscribing to changes to the form. This will fire anytime there is a change in our form.
//        //this.userForm.changes.subscribe(() => {
//        //    this.isValid.emit(this.userForm.valide);
//        //});
//    }

//    onChanges() {
//        /* 
//         * ngModel will throw when trying to access properties of our
//         * model when the model itself is undefined. This will happen
//         * often as our application handles async data.
//         */

//        //if (!this.userProfile) {
//        //    this.userProfile = BlankUserProfile;
//        //}
//    }
//}