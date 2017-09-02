import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { SvcAnswer } from './svcanswer';
import { GeneralVisitorService } from './generalvisitor.service';

@Component({
    templateUrl: './app/courses/generalvisitorin.component.html'
})
export class GeneralVisitorInComponent implements OnInit {
    pageTitle: string = 'General Visitor International';
    genvinForm: FormGroup;
    Message: string;

    private dataIsValid: { [key: string]: boolean } = {};

    constructor(
        private route: ActivatedRoute, private fb: FormBuilder,
        private gvService: GeneralVisitorService, private router: Router
    ) { }

    ngOnInit(): void {

        this.genvinForm = this.fb.group({
            Name: ['', [Validators.required, Validators.minLength(3)]],
            Age: ['', Validators.required],
            Gender: ['', Validators.required],
            Sonof: ['', Validators.required],
            Place: ['', Validators.required],
            Nationality: ['', Validators.required],
            MaritalStatus: ['', Validators.required],
            DateofBirth: ['', Validators.required],
            ContactDin: ['', Validators.required],
            EMailID: ['', Validators.required],
            PerLand: ['', Validators.required],
            PerMob: ['', Validators.required],
            MobileIn: ['', Validators.required],
            Address: ['', Validators.required],
            Passport: ['', Validators.required],
            VisaNo: ['', Validators.required],
            Intending: ['', Validators.required],
            Departure: ['', Validators.required],
            ArrivalDev: ['', Validators.required],
            DepartureDev: ['', Validators.required],
            NDestination: ['', Validators.required],
            Visited: ['', Validators.required],
            Education: ['', Validators.required],
            Profession: ['', Validators.required],
            Health: ['', Validators.required],
            Deeksha: ['', Validators.required],
            Meru: ['', Validators.required],
            Volunteering: ['', Validators.required],
            Extends: ['', Validators.required],
            AreasOI: ['', Validators.required],
            Date: ['', Validators.required]
        });
    }

    save() {
       
        let Form = this.genvinForm.value;

        let body = Form.Name + '~' + 1 + '|' + Form.Age + '~' + 2 +'|' + Form.Gender + '~' + 3 + '|' + Form.Sonof + '~' + 4 + '|' + Form.Place + '~' + 5 + '|' +
            Form.Nationality + '~' + 6 + '|' + Form.MaritalStatus + '~' + 7 + '|' + Form.DateofBirth + '~' + 8 + '|' + Form.ContactDin + '~' + 9 + '|' +
            Form.EMailID + '~' + 10 + '|' + Form.PerLand + '~' + 11 + '|' + Form.PerMob + '~' + 12 + '|' + Form.MobileIn + '~' + 13 + '|' +
            Form.Address + '~' + 14 + '|' + Form.Passport + '~' + 15 + '|' + Form.VisaNo + '~' + 16 + '|' + Form.Intending + '~' + 17 + '|' + Form.Departure + '~' + 18 + '|' +
            Form.ArrivalDev + '~' + 19 + '|' + Form.DepartureDev + '~' + 20 + '|' + Form.NDestination + '~' + 21 + '|' + Form.Visited + '~' + 22 + '|' +
            Form.Education + '~' + 23 + '|' + Form.Profession + '~' + 24 + '|' + Form.Health + '~' + 25 + '|' + Form.Deeksha + '~' + 26 + '|' +
            Form.Meru + '~' + 27 + '|' + Form.Volunteering + '~' + 28 + '|' + Form.Extends + '~' + 29 + '|' + Form.AreasOI + '~' + 30 + '|' +
            Form.Date + '~' + 31;


        this.gvService.insertGeneralvisitorInterna(body).subscribe(
            data => {
                return this.router.navigate(['/courses', 'courseregistred']);
               // return this.Message = "Course Registerd Successfully";
            },
            error => {
                console.error("Error While Inserting Data");
                return this.Message = "Error While Inserting Data";
            }
        );

    }
}
