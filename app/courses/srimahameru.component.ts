import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { SvcAnswer } from './svcanswer';
import { GeneralVisitorService } from './generalvisitor.service';

@Component({
    templateUrl: './app/courses/srimahameru.component.html'
})
export class SrimahameruComponent implements OnInit {
    pageTitle: string = 'Sri Maha Meru';
    srimaForm: FormGroup;
    Message: string;

    //private dataIsValid: { [key: string]: boolean } = {};

    constructor(
        private route: ActivatedRoute, private fb: FormBuilder,
        private gvService: GeneralVisitorService, private router: Router
    ) { }

    ngOnInit(): void {

        this.srimaForm = this.fb.group({
            Name: ['', [Validators.required, Validators.minLength(3)]],
            Age: ['', Validators.required],
            Gender: ['', Validators.required],
            NameofSp: ['', Validators.required],
            Sonof: ['', Validators.required],
            Nationality: ['', Validators.required],
            EmailID: ['', Validators.required],
            MobilePh: ['', Validators.required],    
            Address: ['', Validators.required],
            Education: ['', Validators.required],
            Profession: ['', Validators.required],
            Hdyctk: ['', Validators.required],
            Dytet: ['', Validators.required],
            HytDG: ['', Validators.required],
            INwsy: ['', Validators.required],
            Boyp: ['', Validators.required],
            Yawtp: ['', Validators.required],
            Sombs: ['', Validators.required],
            //Wtmsv: ['', Validators.required],
            Wtmsv: [''],
            Date: ['', Validators.required]
        });
    }

    save() {

      
        let Form = this.srimaForm.value;

        let body = Form.Name + '~' + 1 + '|' + Form.Age + '~' + 2 + '|' + Form.Gender + '~' + 3 + '|' + Form.NameofSp + '~' + 4 + '|' + Form.Sonof + '~' + 5 + '|' +
            Form.Nationality + '~' + 6 + '|' + Form.EmailID + '~' + 7 + '|' + Form.MobilePh + '~' + 8 + '|' + Form.Address + '~' + 9 + '|' +
            Form.Education + '~' + 10 + '|' + Form.Profession + '~' + 11 + '|' + Form.Hdyctk + '~' + 12 + '|' + Form.Dytet + '~' + 13 + '|' +
            Form.HytDG + '~' + 14 + '|' + Form.INwsy + '~' + 15 + '|' + Form.Boyp + '~' + 16 + '|' + Form.Yawtp + '~' + 17 + '|' +
            Form.Sombs + '~' + 18 + '|' + Form.Wtmsv + '~' + 19 + '|' + Form.Date + '~' + 20;


        this.gvService.insertSriMahameru(body).subscribe(
            data => {
              //  console.log(data);
               // return this.router.navigate(['/']);
                return this.Message = "Course Registerd Successfully";
            },
            error => {
               // console.error("Error While Inserting Data");
                return this.Message = "Error While Inserting Data";
            }
        );

    }
}
