import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { SvcAnswer } from './svcanswer';

@Component({
    templateUrl: './app/courses/srividyatwo.component.html'
})
export class SrividyatwoComponent implements OnInit {
    svtForm: FormGroup;
    //errorMessage: string;
    //newTags = '';  
    //product: SvcAnswer;

    constructor(private route: ActivatedRoute, private fb: FormBuilder) { }

    ngOnInit(): void {

        this.svtForm = this.fb.group({
            Health: ['', [Validators.required]],
            Hdyu: ['', Validators.required],
            HytDee: ['', Validators.required],
            Planguage: ['', Validators.required],
            Yesno: ['', Validators.required],
            Wtbcs: ['', Validators.required],
            Apyps: ['', Validators.required],
            AimObj: ['', Validators.required],
            Wtmsw: ['', Validators.required]           
        });       
        //this.route.parent.data.subscribe(data => {
        //    this.product = data['product']; 
        //});

    }
   
    //addTags(): void {
    //    let tagArray = this.newTags.split(',');     
    //    this.newTags = '';
    //}


    //removeTag(idx: number): void {
    //}
}
