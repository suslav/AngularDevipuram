import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CoursesListService } from './courseslist.service';
import { GeneralVisitorsAnswers } from './generalvisitorsanswers';

@Component({
    templateUrl: './app/courseslist/generalvisitoran.component.html'
})
export class GeneralVisitorAnComponent implements OnInit {
    pageTitle: string = 'General Visitor';
    genvForm: FormGroup;
    errorMessage: string;    
   // gvanswers: GeneralVisitorsAnswers[];

    gvanswers: any;

    constructor(
      
        private route: ActivatedRoute, private fb: FormBuilder,
        private clService: CoursesListService,
        private router: Router
    ) { }

    ngOnInit(): void {


        this.route.params.subscribe((params: Params) => {
            let userId = params['id'];
            //let userId = params;
            console.log(userId);

            this.clService.getGeneralVisitorAn(userId, 1).subscribe(
                gvanswers => {

                    if (gvanswers.length > 0)
                    {
                        this.gvanswers = gvanswers;

                        console.log(gvanswers);
                    }

                },
                error => this.errorMessage = <any>error);
        });

        //this.clService.getGeneralVisitorAn(userId,1).subscribe(gvanswers => this.gvanswers = gvanswers,
        //    error => this.errorMessage = <any>error);
     


        //this.genvForm = this.fb.group({
        //    Name: ['', [Validators.required, Validators.minLength(3)]],
        //    Age: ['', Validators.required],
        //    Gender: ['', Validators.required],
        //    Sonof: ['', Validators.required],
        //    Place: ['', Validators.required],
        //    Nationality: ['', Validators.required],
        //    MaritalStatus: ['', Validators.required],
        //    EMailID: ['', Validators.required],
        //    Address: ['', Validators.required],
        //    Passport: ['', Validators.required],
        //    Intending: ['', Validators.required],
        //    Visited: ['', Validators.required],
        //    Education: ['', Validators.required],
        //    Profession: ['', Validators.required],
        //    Health: ['', Validators.required],
        //    Deeksha: ['', Validators.required],
        //    Meru: ['', Validators.required],
        //    Volunteering: ['', Validators.required],
        //    Extends: ['', Validators.required],
        //    AreasOI: ['', Validators.required],
        //    Date: ['', Validators.required]
        //});       

    }


    save() {       

        //let Form = this.genvForm.value;
        //let body = Form.Name + '~' + 1 + '|' + Form.Age + '~' + 2 + Form.Gender + '~' + 3 + '|' + Form.Sonof + '~' + 4 + '|' + Form.Place + '~' + 5 + '|' +
        //           Form.Nationality + '~' + 6 + '|' + Form.MaritalStatus + '~' + 7 + '|' + Form.EMailID + '~' + 8 + '|' + Form.Address + '~' + 9 + '|' +
        //           Form.Passport + '~' + 10 + '|' + Form.Intending + '~' + 11 + '|' + Form.Visited + '~' + 12 + '|' + Form.Education + '~' + 13 + '|' +
        //           Form.Profession + '~' + 14 + '|' + Form.Health + '~' + 15 + '|' + Form.Deeksha + '~' + 16 + '|' + Form.Meru + '~' + 17 + '|' +
        //           Form.Volunteering + '~' + 18 + '|' + Form.Extends + '~' + 19 + '|' + Form.AreasOI + '~' + 20 + '|' + Form.Date + '~' + 21;
         

        //this.gvService.insertGeneralvisitors(body).subscribe(
        //    data => {
        //        return this.router.navigate(['/']);
        //    },
        //    error => {
        //        return this.errorMessage = "Error While Inserting Data";
        //    }
        //);
         
    }
}
