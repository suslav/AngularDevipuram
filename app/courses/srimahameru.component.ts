import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { SvcAnswer } from './svcanswer';
//import { SriVidyaService } from './srividya.service';

@Component({
    templateUrl: './app/courses/srimahameru.component.html'
})
export class SrimahameruComponent implements OnInit {
    pageTitle: string = 'Sri Maha Meru';
    srimaForm: FormGroup;

    private dataIsValid: { [key: string]: boolean } = {};

    constructor(
        //  private srividyaService: SriVidyaService,
        private route: ActivatedRoute, private fb: FormBuilder
        // private router: Router
    ) { }

    ngOnInit(): void {

        this.srimaForm = this.fb.group({
            Name: ['', [Validators.required, Validators.minLength(3)]],
            Age: ['', Validators.required],
            Gender: ['', Validators.required],
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
            Wtmsv: ['', Validators.required]
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
