import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { SvcAnswer } from './svcanswer';
import { GeneralVisitorService } from './generalvisitor.service';
@Component({
    templateUrl: './app/courses/srividyatwo.component.html'
})
export class SrividyatwoComponent implements OnInit {
    svtForm: FormGroup; 
  errorMessage: string;   
  constructor(
      private route: ActivatedRoute, private fb: FormBuilder,
      private gvService: GeneralVisitorService, private router: Router
  ) { }

    ngOnInit(): void {

        this.svtForm = this.fb.group({
            Health: ['', [Validators.required]],
            Hdyu: ['', Validators.required],
            HytDee: ['', Validators.required],
            Planguage: ['', Validators.required],
            //Yesno: ['', Validators.required],
            Wtbcs: ['', Validators.required],
            Apyps: ['', Validators.required],
            AimObj: ['', Validators.required],
            Wtmsw: ['', Validators.required]           
        });       
       
    }
    save() {

        
        let Form = this.svtForm.value;

        let body = Form.Health + '~' + 13 + '|' +
            Form.Hdyu + '~' + 14 + '|' + Form.HytDee + '~' + 15 + '|' + Form.Planguage + '~' + 16 + '|' + Form.Wtbcs + '~' + 17 + '|' +
            Form.Apyps + '~' + 18 + '|' + Form.AimObj + '~' + 19 + '|' + Form.Wtmsw + '~' + 20 ;


        this.gvService.insertSvcAnswer(body).subscribe(
            data => {
                return this.router.navigate(['/courses', 'courseregistred']);
            },
            error => {
                console.error("Error While Inserting Data");
                return this.errorMessage = "Error While Inserting Data";
            }
        );

    }
   
}
