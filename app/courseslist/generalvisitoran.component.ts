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

   // gvanswers: any;

     answer: any;

    constructor(
      
        private route: ActivatedRoute, private fb: FormBuilder,
        private clService: CoursesListService,
        private router: Router
    ) { }

    ngOnInit(): void {


        this.route.params.subscribe((params: Params) => {
            let userId = params['id'];
            //let userId = params;
            //console.log(userId);

            this.clService.getGeneralVisitorAn(userId, 1).subscribe(
                answer => {

                    if (answer.length > 0) {
                       // this.answer = answer[0].Answer;
                        let gv = answer[0].Answer;    
                        let name = "";
                        let age, gender, sonof, place, nationality, maritalstatus, eMailid, address, passport, intending = " ";                       
                        let visited, education, profession, health, deeksha, meru, volunteering, exten, areasoi, date1 = "";                        

                        if (gv.indexOf('|') > -1) {                                                   
                           if (gv.split("|")[0].indexOf('~') > -1)
                            {
                               name = gv.split("|")[0].split("~")[0];                              
                            }
                           if (gv.split("|")[1].indexOf('~') > -1) {
                               age = gv.split("|")[1].split("~")[0];
                           }
                           if (gv.split("|")[2].indexOf('~') > -1)
                           { gender = gv.split("|")[2].split("~")[0]; }
                           if (gv.split("|")[3].indexOf('~') > -1)
                           { sonof = gv.split("|")[3].split("~")[0]; }
                           if (gv.split("|")[4].indexOf('~') > -1)
                           { place = gv.split("|")[4].split("~")[0]; }
                           if (gv.split("|")[5].indexOf('~') > -1)
                           { nationality = gv.split("|")[5].split("~")[0]; }
                           if (gv.split("|")[6].indexOf('~') > -1)
                           { maritalstatus = gv.split("|")[6].split("~")[0]; }
                           if (gv.split("|")[7].indexOf('~') > -1)
                           { eMailid = gv.split("|")[7].split("~")[0]; }
                           if (gv.split("|")[8].indexOf('~') > -1)
                           { address = gv.split("|")[8].split("~")[0]; }
                           if (gv.split("|")[9].indexOf('~') > -1)
                           { passport = gv.split("|")[9].split("~")[0]; }
                           if (gv.split("|")[10].indexOf('~') > -1)
                           { intending = gv.split("|")[10].split("~")[0]; }
                           if (gv.split("|")[11].indexOf('~') > -1)
                           { visited = gv.split("|")[11].split("~")[0]; }
                           if (gv.split("|")[12].indexOf('~') > -1)
                           { education = gv.split("|")[12].split("~")[0]; }
                           if (gv.split("|")[13].indexOf('~') > -1)
                           { profession = gv.split("|")[13].split("~")[0]; }
                           if (gv.split("|")[14].indexOf('~') > -1)
                           { health = gv.split("|")[14].split("~")[0]; }
                           if (gv.split("|")[15].indexOf('~') > -1)
                           { deeksha = gv.split("|")[15].split("~")[0]; }
                           if (gv.split("|")[16].indexOf('~') > -1)
                           { meru = gv.split("|")[16].split("~")[0]; }
                           if (gv.split("|")[17].indexOf('~') > -1)
                           { volunteering = gv.split("|")[17].split("~")[0]; }
                           if (gv.split("|")[18].indexOf('~') > -1)
                           { exten = gv.split("|")[18].split("~")[0]; }
                           if (gv.split("|")[19].indexOf('~') > -1)
                           { areasoi = gv.split("|")[19].split("~")[0]; }
                           if (gv.split("|")[20].indexOf('~') > -1)
                           { date1 = gv.split("|")[20].split("~")[0]; }                    

                             
                            this.genvForm = this.fb.group({
                                Name: [name],
                                Age: [age],
                                Gender: [gender],
                                Sonof: [sonof],
                                Place: [place],
                                Nationality: [nationality],
                                MaritalStatus: [maritalstatus],
                                EMailID: [eMailid],
                                Address: [address],
                                Passport: [passport],
                                Intending: [intending],
                                Visited: [visited],
                                Education: [education],
                                Profession: [profession],
                                Health: [health],
                                Deeksha: [deeksha],
                                Meru: [meru],
                                Volunteering: [volunteering],
                                Extends: [exten],
                                AreasOI: [areasoi],
                                Date: [date1]
                            });       

                         //   console.log(this.answer);
                        }                      
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


  //  save() {       

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
         
   // }
}
