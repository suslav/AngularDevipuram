import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { CoursesListService } from './courseslist.service';

@Component({
    templateUrl: './app/courseslist/generalvisitorinan.component.html'
})
export class GeneralVisitorInAnComponent implements OnInit {
    pageTitle: string = 'General Visitor International';
    //genvinForm: FormGroup;
    errorMessage: string;
    public pvisible = false;   

    public visitorformId: number;
    public userId: number; 

    name: string; age: string; gender: string; sonof: string; place: string; nationality: string; maritalstatus: string; dateofbirth: string; contactdin: string; eMailid: string; perland: string; permob: string; mobilein: string; address: string; passport: string; visano: string; intending: string;
    departure: string; arrivaldev: string; departuredev: string; ndestination: string; visited: string; education: string; profession: string; health: string; deeksha: string; meru: string; volunteering: string; exten: string; areasoi: string; date1: string;


    constructor(
        private route: ActivatedRoute, private fb: FormBuilder,
        private clService: CoursesListService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {

            this.visitorformId = params['id'];
            this.userId = params['uid'];       

            this.clService.getCourseAnswers(this.visitorformId, 2).subscribe(
                answer => {
                    if (answer.length > 0) {                      
                        let gv = answer[0].GVIAnswer;
                        //let name,age, gender, sonof, place, nationality, maritalstatus, dateofbirth, contactdin, eMailid, perland, permob, mobilein, address, passport, visano, intending = " ";
                        //let departure, arrivaldev, departuredev, ndestination, visited, education, profession, health, deeksha, meru, volunteering, exten, areasoi, date1 = "";

                        if (gv.indexOf('|') > -1) {
                            if (gv.split("|")[0].indexOf('~') > -1) {
                                this.name = gv.split("|")[0].split("~")[0];
                            }
                            if (gv.split("|")[1].indexOf('~') > -1) {
                                this.age = gv.split("|")[1].split("~")[0];
                            }
                            if (gv.split("|")[2].indexOf('~') > -1)
                            { this.gender = gv.split("|")[2].split("~")[0]; }
                            if (gv.split("|")[3].indexOf('~') > -1)
                            { this.sonof = gv.split("|")[3].split("~")[0]; }
                            if (gv.split("|")[4].indexOf('~') > -1)
                            { this.place = gv.split("|")[4].split("~")[0]; }
                            if (gv.split("|")[5].indexOf('~') > -1)
                            { this.nationality = gv.split("|")[5].split("~")[0]; }
                            if (gv.split("|")[6].indexOf('~') > -1)
                            { this.maritalstatus = gv.split("|")[6].split("~")[0]; }
                            if (gv.split("|")[7].indexOf('~') > -1)
                            { this.dateofbirth = gv.split("|")[7].split("~")[0]; }
                            if (gv.split("|")[8].indexOf('~') > -1)
                            { this.contactdin = gv.split("|")[8].split("~")[0]; }
                            if (gv.split("|")[9].indexOf('~') > -1)
                            { this.eMailid = gv.split("|")[9].split("~")[0]; }
                            if (gv.split("|")[10].indexOf('~') > -1)
                            { this.perland = gv.split("|")[10].split("~")[0]; }
                            if (gv.split("|")[11].indexOf('~') > -1)
                            { this.permob = gv.split("|")[11].split("~")[0]; }
                            if (gv.split("|")[12].indexOf('~') > -1)
                            { this.mobilein = gv.split("|")[12].split("~")[0]; }
                            if (gv.split("|")[13].indexOf('~') > -1)
                            { this.address = gv.split("|")[13].split("~")[0]; }
                            if (gv.split("|")[14].indexOf('~') > -1)
                            { this.passport = gv.split("|")[14].split("~")[0]; }
                            if (gv.split("|")[15].indexOf('~') > -1)
                            { this.visano = gv.split("|")[15].split("~")[0]; }
                            if (gv.split("|")[16].indexOf('~') > -1)
                            { this.intending = gv.split("|")[16].split("~")[0]; }
                            if (gv.split("|")[17].indexOf('~') > -1)
                            { this.departure = gv.split("|")[17].split("~")[0]; }
                            if (gv.split("|")[18].indexOf('~') > -1)
                            { this.arrivaldev = gv.split("|")[18].split("~")[0]; }
                            if (gv.split("|")[19].indexOf('~') > -1)
                            { this.departuredev = gv.split("|")[19].split("~")[0]; }
                            if (gv.split("|")[20].indexOf('~') > -1)
                            { this.ndestination = gv.split("|")[20].split("~")[0]; }
                            if (gv.split("|")[21].indexOf('~') > -1)
                            { this.visited = gv.split("|")[21].split("~")[0]; }
                            if (gv.split("|")[22].indexOf('~') > -1)
                            { this.education = gv.split("|")[22].split("~")[0]; }
                            if (gv.split("|")[23].indexOf('~') > -1)
                            { this.profession = gv.split("|")[23].split("~")[0]; }
                            if (gv.split("|")[24].indexOf('~') > -1)
                            { this.health = gv.split("|")[24].split("~")[0]; }
                            if (gv.split("|")[25].indexOf('~') > -1)
                            { this.deeksha = gv.split("|")[25].split("~")[0]; }
                            if (gv.split("|")[26].indexOf('~') > -1)
                            { this.meru = gv.split("|")[26].split("~")[0]; }
                            if (gv.split("|")[27].indexOf('~') > -1)
                            {
                                this.volunteering = gv.split("|")[27].split("~")[0];

                                if (this.volunteering == "YES") {
                                    this.pvisible = true;
                                }
                                else {
                                    this.pvisible = false;
                                }
                            }
                            if (gv.split("|")[28].indexOf('~') > -1)
                            { this.exten = gv.split("|")[28].split("~")[0]; }
                            if (gv.split("|")[29].indexOf('~') > -1)
                            { this.areasoi = gv.split("|")[29].split("~")[0]; }
                            if (gv.split("|")[30].indexOf('~') > -1)
                            { this.date1 = gv.split("|")[30].split("~")[0]; }


                            //this.genvinForm = this.fb.group({
                            //    Name: [name],
                            //    Age: [age],
                            //    Gender: [gender],
                            //    Sonof: [sonof],
                            //    Place: [place],
                            //    Nationality: [nationality],
                            //    MaritalStatus: [maritalstatus],
                            //    DateofBirth: [dateofbirth],
                            //    ContactDin: [contactdin],
                            //    EMailID: [eMailid],
                            //    PerLand: [perland],
                            //    PerMob: [permob],
                            //    MobileIn: [mobilein],
                            //    Address: [address],
                            //    Passport: [passport],
                            //    VisaNo: [visano],
                            //    Intending: [intending],
                            //    Departure: [departure],
                            //    ArrivalDev: [arrivaldev],
                            //    DepartureDev: [departuredev],
                            //    NDestination: [ndestination],
                            //    Visited: [visited],
                            //    Education: [education],
                            //    Profession: [profession],
                            //    Health: [health],
                            //    Deeksha: [deeksha],
                            //    Meru: [meru],
                            //    Volunteering: [volunteering],
                            //    Extends: [exten],
                            //    AreasOI: [areasoi],
                            //    Date: [date1]
                            //});
                        }
                    }

                },
                error => this.errorMessage = <any>error);
        });        
    }         
}
