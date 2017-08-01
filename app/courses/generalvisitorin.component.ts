import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { SvcAnswer } from './svcanswer';
//import { SriVidyaService } from './srividya.service';

@Component({
    templateUrl: './app/courses/generalvisitorin.component.html'
})
export class GeneralVisitorInComponent implements OnInit {
    pageTitle: string = 'General Visitor International';
    genvinForm: FormGroup;

    private dataIsValid: { [key: string]: boolean } = {};

    constructor(
        //  private srividyaService: SriVidyaService,
        private route: ActivatedRoute, private fb: FormBuilder
        // private router: Router
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
            Extends: ['', Validators.required],
            AreasOI: ['', Validators.required]            
        });
    }

    isValid(path: string): boolean {
        this.validate();
        if (path) {
            return this.dataIsValid[path];
        }
        return (this.dataIsValid &&
            Object.keys(this.dataIsValid).every(d => this.dataIsValid[d] === true));
    }

    validate(): void {
        this.dataIsValid = {};
    }
}
