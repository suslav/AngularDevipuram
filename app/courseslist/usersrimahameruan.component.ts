import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CoursesListService } from './courseslist.service';

@Component({
    templateUrl: './app/courseslist/usersrimahameruan.component.html'
})
export class UserSrimahameruAnComponent implements OnInit {
    pageTitle: string = 'Sri Maha Meru';
    //srimaForm: FormGroup;
    errorMessage: string;

    public visitorformId: number;
    //public userId: number;

    name: string; age: string; gender: string; nameofSp: string; sonof: string; nationality: string; eMailid: string; mobileph: string; address: string;
    education: string; profession: string; hdyctk: string; dytet: string; hytdg: string; inwsy: string; boyp: string; yawtp: string; sombs: string; wtmsv: string; date1: string;

    constructor(
        private route: ActivatedRoute, private fb: FormBuilder,
        private clService: CoursesListService,
        private router: Router
    ) { }

    ngOnInit(): void {


        this.route.params.subscribe((params: Params) => {

            this.visitorformId = params['id'];
           // this.userId = params['uid'];

            this.clService.getCourseAnswers(this.visitorformId, 4).subscribe(
                answer => {

                    if (answer.length > 0) {
                        let gv = answer[0].SMMAnswer;
                        //let name, age, gender, nameofSp, sonof, nationality, eMailid, mobileph, address = "";
                        //let education, profession, hdyctk, dytet, hytdg, inwsy, boyp, yawtp, sombs, wtmsv, date1 = "";

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
                            { this.nameofSp = gv.split("|")[3].split("~")[0]; }
                            if (gv.split("|")[4].indexOf('~') > -1)
                            { this.sonof = gv.split("|")[4].split("~")[0]; }                            
                            if (gv.split("|")[5].indexOf('~') > -1)
                            { this.nationality = gv.split("|")[5].split("~")[0]; }                           
                            if (gv.split("|")[6].indexOf('~') > -1)
                            { this.eMailid = gv.split("|")[6].split("~")[0]; }
                            if (gv.split("|")[7].indexOf('~') > -1)
                            { this.mobileph = gv.split("|")[7].split("~")[0]; }
                            if (gv.split("|")[8].indexOf('~') > -1)
                            { this.address = gv.split("|")[8].split("~")[0]; }                                                                              
                            if (gv.split("|")[9].indexOf('~') > -1)
                            { this.education = gv.split("|")[9].split("~")[0]; }
                            if (gv.split("|")[10].indexOf('~') > -1)
                            { this.profession = gv.split("|")[10].split("~")[0]; }
                            if (gv.split("|")[11].indexOf('~') > -1)
                            { this.hdyctk = gv.split("|")[11].split("~")[0]; }
                            if (gv.split("|")[12].indexOf('~') > -1)
                            { this.dytet = gv.split("|")[12].split("~")[0]; }
                            if (gv.split("|")[13].indexOf('~') > -1)
                            { this.hytdg = gv.split("|")[13].split("~")[0]; }
                            if (gv.split("|")[14].indexOf('~') > -1)
                            { this.inwsy = gv.split("|")[14].split("~")[0]; }
                            if (gv.split("|")[15].indexOf('~') > -1)
                            { this.boyp = gv.split("|")[15].split("~")[0]; }
                            if (gv.split("|")[16].indexOf('~') > -1)
                            { this.yawtp = gv.split("|")[16].split("~")[0]; }
                            if (gv.split("|")[17].indexOf('~') > -1)
                            { this.sombs = gv.split("|")[17].split("~")[0]; }
                            if (gv.split("|")[18].indexOf('~') > -1)
                            { this.wtmsv = gv.split("|")[18].split("~")[0]; }
                            if (gv.split("|")[19].indexOf('~') > -1)
                            { this.date1 = gv.split("|")[19].split("~")[0]; }


                            //this.srimaForm = this.fb.group({
                            //    Name: [name],
                            //    Age: [age],
                            //    Gender: [gender],
                            //    NameofSp: [nameofSp],
                            //    Sonof: [sonof],
                            //    Nationality: [nationality],
                            //    EmailID: [eMailid],
                            //    MobilePh: [mobileph],
                            //    Address: [address],
                            //    Education: [education],
                            //    Profession: [profession],
                            //    Hdyctk: [hdyctk],
                            //    Dytet: [dytet],
                            //    HytDG: [hytdg],
                            //    INwsy: [inwsy],
                            //    Boyp: [boyp],
                            //    Yawtp: [yawtp],
                            //    Sombs: [sombs],
                            //    Wtmsv: [wtmsv],
                            //    Date: [date1]
                            //});
                        }
                    }

                },
                error => this.errorMessage = <any>error);
        });         
    }
    
}
