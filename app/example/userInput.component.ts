//import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
//import { FormBuilder, FormGroup, Validator } from '@angular/forms';

////import { User, BlankUser } from '../models';

//@Component({
//    selector: 'user-input',
//    templateUrl: '/userInput/userInput.html'
//})

//export class UserInputComponent implements OnChanges {
//  //  @Input() user: User;
//    @Output() isValid = new EventEmitter();
//    userForm: FormGroup

//    constructor(private formBuilder: FormBuilder) {
//        // construct our form and tell formbuilder what validators we need.
//        //this.userForm = this.formBuilder.group({
//        //    'name' = [undefined],
//        //    'email' = [undefined],
//        //    'password' = [undefined]
//        //});

//        // here we are subscribing to changes to the form. This will fire anytime there is a change in our form.
//        this.userForm.valueChanges.subscribe(() => {
//            this.isValid.emit(this.userForm.valid)
//        });
//    }

//    onChanges() {
//        /* 
//         * ngModel will throw when trying to access properties of our
//         * model when the model itself is undefined. This will happen
//         * often as our application handles async data.
//         */

//        //if (!this.user) {
//        //    this.user = BlankUser
//        //}
//    }
//}