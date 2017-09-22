import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CoursesListService } from './courseslist.service';

@Component({
    templateUrl: './app/courseslist/srividyaregisteran.component.html'
})
export class SriVidyaRegisterAnComponent implements OnInit {
    pageTitle: string = 'Sri Vidya';
    srividyaForm: FormGroup;
    errorMessage: string;

    public pvisible = false;
    answer: any;

    constructor(

        private route: ActivatedRoute, private fb: FormBuilder,
        private clService: CoursesListService, private router: Router
    ) { }




    ngOnInit(): void {


        this.route.params.subscribe((params: Params) => {
            let userId = params['id'];
            
            this.clService.getCourseAnswers(userId, 3).subscribe(
                answer => {
                    console.log(answer);

                    if (answer.length > 0) {
                       // let gv = answer[0].Answer;
                        let gv = answer[0].SVCAnswer;
                        let name,age, gender, sonof, place, nationality, maritalstatus, eMailid, mobileph, education, expertise, profession, health = " ";
                        let hydu, hytdee, planguage, wtbcs, apyps, aimobj, wtmsw = "";

                        if (gv.indexOf('|') > -1) {
                            if (gv.split("|")[0].indexOf('~') > -1) {
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
                            { mobileph = gv.split("|")[8].split("~")[0]; }
                            if (gv.split("|")[9].indexOf('~') > -1)
                            { education = gv.split("|")[9].split("~")[0]; }
                            if (gv.split("|")[10].indexOf('~') > -1)
                            { expertise = gv.split("|")[10].split("~")[0]; }
                            if (gv.split("|")[11].indexOf('~') > -1)
                            { profession = gv.split("|")[11].split("~")[0]; }
                            if (gv.split("|")[12].indexOf('~') > -1)
                            { health = gv.split("|")[12].split("~")[0]; }                            
                            if (gv.split("|")[13].indexOf('~') > -1)
                            { hydu = gv.split("|")[13].split("~")[0]; }                                                  
                            if (gv.split("|")[14].indexOf('~') > -1)
                            { hytdee = gv.split("|")[14].split("~")[0]; }
                            if (gv.split("|")[15].indexOf('~') > -1)
                            { planguage = gv.split("|")[15].split("~")[0]; }
                            if (gv.split("|")[16].indexOf('~') > -1)
                            { wtbcs = gv.split("|")[16].split("~")[0]; }
                            if (gv.split("|")[17].indexOf('~') > -1) {
                                apyps = gv.split("|")[17].split("~")[0];                                
                            }
                            if (gv.split("|")[18].indexOf('~') > -1)
                            { aimobj = gv.split("|")[18].split("~")[0]; }
                            if (gv.split("|")[19].indexOf('~') > -1)
                            { wtmsw = gv.split("|")[19].split("~")[0]; }
                            


                            this.srividyaForm = this.fb.group({
                                Name: [name],
                                Age: [age],
                                Gender: [gender],
                                Sonof: [sonof],
                                Place: [place],
                                Nationality: [nationality],
                                MaritalStatus: [maritalstatus],
                                EMailID: [eMailid],
                                MobilePh: [mobileph],
                                Education: [education],
                                Expertise: [expertise],
                                Profession: [profession],
                                Health: [health],
                                Hdyu: [hydu],
                                HytDee: [hytdee],
                                Planguage: [planguage],
                                Wtbcs: [wtbcs],
                                Apyps: [apyps],
                                AimObj: [aimobj],
                                Wtmsw: [wtmsw]                                
                            });
                        }
                    }

                },
                error => this.errorMessage = <any>error);
        });


         
    }

     
}
