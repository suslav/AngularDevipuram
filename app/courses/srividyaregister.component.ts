import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GeneralVisitorService } from './generalvisitor.service';

@Component({
    templateUrl: './app/courses/srividyaregister.component.html'
})
export class SriVidyaRegisterComponent implements OnInit {
    pageTitle: string = 'Sri Vidya';
    srividyaForm: FormGroup;
    Message: string;
    public pvisible = false;

    constructor(

        private route: ActivatedRoute, private fb: FormBuilder,
        private gvService: GeneralVisitorService, private router: Router
    ) { }

    ngOnInit(): void {

        this.srividyaForm = this.fb.group({

            Name: ['', [Validators.required, Validators.minLength(3)]],
            Age: ['', Validators.required],
            Gender: ['', Validators.required],
            Sonof: ['', Validators.required],
            Place: ['', Validators.required],
            Nationality: ['', Validators.required],
            MaritalStatus: ['', Validators.required],
            EMailID: ['', Validators.required],
            MobilePh: ['', Validators.required],
            Education: ['', Validators.required],
            Expertise: ['', Validators.required],
            Profession: ['', Validators.required]
            ,
             Health: ['', [Validators.required]],
            Hdyu: ['', Validators.required],
            HytDee: ['', Validators.required],
            Planguage: ['', Validators.required],
            Wtbcs: ['', Validators.required],
            Apyps: ['', Validators.required],
            AimObj: ['', Validators.required],
            Wtmsw: ['', Validators.required]  

        });
    }


    save() {

        let Form = this.srividyaForm.value;

        let body = Form.Name + '~' + 1 + '|' + Form.Age + '~' + 2 + '|' + Form.Gender + '~' + 3 + '|' + Form.Sonof + '~' + 4 + '|' + Form.Place + '~' + 5 + '|' +
                   Form.Nationality + '~' + 6 + '|' + Form.MaritalStatus + '~' + 7 + '|' + Form.EMailID + '~' + 8 + '|' + Form.MobilePh + '~' + 9 + '|' +
            Form.Education + '~' + 10 + '|' + Form.Expertise + '~' + 11 + '|' + Form.Profession + '~' + 12
        +'|'+ Form.Health + '~' + 13 + '|' +
            Form.Hdyu + '~' + 14 + '|' + Form.HytDee + '~' + 15 + '|' + Form.Planguage + '~' + 16 + '|' + Form.Wtbcs + '~' + 17 + '|' +
            Form.Apyps + '~' + 18 + '|' + Form.AimObj + '~' + 19 + '|' + Form.Wtmsw + '~' + 20;;


        this.gvService.insertSvcAnswer(body).subscribe(
            data => {
                return this.router.navigate(['/courses', 'courseregistred']);               
            },
            error => {
                return this.Message = "Error While Inserting Data";
            }
        );

    }

    volchange(event: any) {
        console.log(event);

        if (event == "YES") {
            this.pvisible = true;
        }
        else {
            this.pvisible = false;
        }
    }
     
}
