import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';

import { SvcAnswer } from './svcanswer';

@Component({
    templateUrl: './app/courses/srividyaone.component.html'
})
export class SrividyaOneComponent implements OnInit {
    //@ViewChild(NgForm) productForm: NgForm;

    svoForm: FormGroup;

    //errorMessage: string;   
    //product: SvcAnswer;

    constructor(private route: ActivatedRoute, private fb: FormBuilder) { }

    ngOnInit(): void {
 

        this.svoForm = this.fb.group({
            Name: ['', [Validators.required, Validators.minLength(3)]],            
            Age: ['', Validators.required],
            Gender: ['', Validators.required],
            Sonof: ['', Validators.required],
            Place: ['', Validators.required],
            Nationality: ['', Validators.required],
            MaritalStatus: ['', Validators.required],
            EMailID: ['', Validators.required],
            MobilePh: ['', Validators.required],
            Education: ['', Validators.required],
            Expertise: ['', Validators.required],
            Profession: ['', Validators.required] 
        });       



        //this.route.parent.data.subscribe(data => {
        //    this.product = data['product'];

        //    if (this.productForm) {
        //        this.productForm.reset();
        //    }
        //});

    }
}
