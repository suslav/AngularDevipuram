import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { SrividyaCourseService } from './srividyacourse.service';

@Component({
    templateUrl: './app/srividyacourses/srividyacourseinsert.component.html'
})
export class SrividyaCourseInsertComponent implements OnInit {
    pageTitle: string = 'Publish SrividyaCourse';
    svcForm: FormGroup;
    Message: string;

    public pvisible = false;  
    constructor(

        private route: ActivatedRoute, private fb: FormBuilder,
        private svcService: SrividyaCourseService, private router: Router
    ) { }

    ngOnInit(): void {        

        this.svcForm = this.fb.group({
            CouresTitle: ['', [Validators.required, Validators.minLength(3)]],
            CourseFromDate: ['', [Validators.required, Validators.pattern('(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))')]],
            CourseToDate: ['', [Validators.required, Validators.pattern('(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))')]],
            CourseImageUrl: ['', Validators.required],
            CourseDescription: ['', Validators.required] 
            
        });

    }


    save() {
         
        let body = this.svcForm.value;
        this.svcService.insertSrividyaCourse(body).subscribe(
            data => {
                this.svcForm.reset();

                return this.Message = "SrividyaCourse Published Successfully";
               
            },
            error => {
                return this.Message = "Error While Inserting Data";
            }
        );

    }  
}
