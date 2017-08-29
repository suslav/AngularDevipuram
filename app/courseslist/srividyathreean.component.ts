import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    templateUrl: './app/courseslist/srividyathreean.component.html'
})
export class SrividyaThreeAnComponent implements OnInit {
    
    svthForm: FormGroup;

   
    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {

       

    }
}
