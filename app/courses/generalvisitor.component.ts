import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { SvcAnswer } from './svcanswer';
import { GeneralVisitorService } from './generalvisitor.service';

@Component({
    templateUrl: './app/courses/generalvisitor.component.html'
})
export class GeneralVisitorComponent implements OnInit {
    pageTitle: string = 'General Visitor';
    genvForm: FormGroup;
    Message: string;
    public pvisible = false;
     
//    private dataIsValid: { [key: string]: boolean } = {};

    constructor(
      
        private route: ActivatedRoute, private fb: FormBuilder,
        private gvService: GeneralVisitorService, private router: Router
    ) { }

    ngOnInit(): void {

        this.genvForm = this.fb.group({
            Name: ['', [Validators.required, Validators.minLength(3)]],
            Age: ['', Validators.required],
            Gender: ['', Validators.required],
            Sonof: ['', Validators.required],
            Place: ['', Validators.required],
            Nationality: ['', Validators.required],
            MaritalStatus: ['', Validators.required],
            EMailID: ['', Validators.required],
            Address: ['', Validators.required],
            Passport: ['', Validators.required],
            Intending: ['', Validators.required],
            Visited: ['', Validators.required],
            Education: ['', Validators.required],
            Profession: ['', Validators.required],
            Health: ['', Validators.required],
            Deeksha: ['', Validators.required],
            Meru: ['', Validators.required],
            Volunteering: ['', Validators.required],
            //Extends: ['', Validators.required],
            //AreasOI: ['', Validators.required],
            Extends: [''],
            AreasOI: [''],
            Date: ['', Validators.required]
        });       
    }


    save() {       

        let Form = this.genvForm.value;
        let body = Form.Name + '~' + 1 + '|' + Form.Age + '~' + 2 +'|'+ Form.Gender + '~' + 3 + '|' + Form.Sonof + '~' + 4 + '|' + Form.Place + '~' + 5 + '|' +
                   Form.Nationality + '~' + 6 + '|' + Form.MaritalStatus + '~' + 7 + '|' + Form.EMailID + '~' + 8 + '|' + Form.Address + '~' + 9 + '|' +
                   Form.Passport + '~' + 10 + '|' + Form.Intending + '~' + 11 + '|' + Form.Visited + '~' + 12 + '|' + Form.Education + '~' + 13 + '|' +
                   Form.Profession + '~' + 14 + '|' + Form.Health + '~' + 15 + '|' + Form.Deeksha + '~' + 16 + '|' + Form.Meru + '~' + 17 + '|' +
                   Form.Volunteering + '~' + 18 + '|' + Form.Extends + '~' + 19 + '|' + Form.AreasOI + '~' + 20 + '|' + Form.Date + '~' + 21;
         

        this.gvService.insertGeneralvisitors(body).subscribe(
            data => {
                return this.router.navigate(['/courses', 'courseregistred']);
                //console.log(data);
                //return this.Message = "Course Registerd Successfully";
            },
            error => {
                return this.Message = "Error While Inserting Data";
            }
        );
         
    }

    volchange(event:any) {       
        console.log(event);

        if (event == "YES")
        {
            this.pvisible = true;
        }
        else {
            this.pvisible = false;
        }
}






    //isValid(path: string): boolean {
    //    this.validate();
    //    if (path) {
    //        return this.dataIsValid[path];
    //    }
    //    return (this.dataIsValid &&
    //        Object.keys(this.dataIsValid).every(d => this.dataIsValid[d] === true));
    //} 

    //validate(): void {
    //    this.dataIsValid = {}; 
    //}
}
