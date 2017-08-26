import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SvcAnswer } from './svcanswer';

@Component({
    templateUrl: './app/courses/srividyathree.component.html'
})
export class SrividyaThreeComponent implements OnInit {
    
    svthForm: FormGroup;

   
    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {

       

    }
}
