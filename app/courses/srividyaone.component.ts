import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';

import { SvcAnswer } from './svcanswer';
import { GeneralVisitorService } from './generalvisitor.service';
@Component({
    templateUrl: './app/courses/srividyaone.component.html'
})
export class SrividyaOneComponent implements OnInit {
  
    svoForm: FormGroup;
    errorMessage: string;
    
    constructor(
        private route: ActivatedRoute, private fb: FormBuilder,
        private gvService: GeneralVisitorService, private router: Router
    ) { }

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
    }

    save() {        
        let Form = this.svoForm.value;

        let body = Form.Name + '~' + 1 + '|' + Form.Age + '~' + 2 + '|' + Form.Gender + '~' + 3 + '|' + Form.Sonof + '~' + 4 + '|' + Form.Place + '~' + 5 + '|' +
            Form.Nationality + '~' + 6 + '|' + Form.MaritalStatus + '~' + 7 + '|' + Form.EMailID + '~' + 8 + '|' + Form.MobilePh + '~' + 9 + '|' +
            Form.Education + '~' + 10 + '|' + Form.Expertise + '~' + 11 + '|' + Form.Profession + '~' + 12 ;


        this.gvService.insertSvcAnswer(body).subscribe(
            data => {
                console.log(data);
                return this.router.navigate(['/']);
            },
            error => {
                console.error("Error While Inserting Data");
                return this.errorMessage = "Error While Inserting Data";
            }
        );

    }
}
