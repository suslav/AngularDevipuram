import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { RitualsService } from './rituals.service';

@Component({
    templateUrl: './app/rituals/ritualsinsert.component.html'
})
export class RitualsInsertComponent implements OnInit {
    pageTitle: string = 'Publish Ritual';
    ritualForm: FormGroup;
    Message: string;

    errorMessage: string;

    public ricate:any;

    public pvisible = false;  
    constructor(

        private route: ActivatedRoute, private fb: FormBuilder,
        private vdService: RitualsService, private router: Router
    ) { }

    ngOnInit(): void {

        
        this.vdService.ritualcategoriesList().subscribe(
            answer => {
                if (answer.length > 0) {
                    this.ricate = answer;                  
                }
            },
            error => this.errorMessage = <any>error
        );

        this.ritualForm = this.fb.group({
            RitualName: ['', Validators.required],
            When: ['', Validators.required],          
            RitualCategoryID: ['', Validators.required]           
        });
    }


    save() {

       
        let body = this.ritualForm.value;      

        this.vdService.insertRituals(body).subscribe(
            data => {
              
                this.ritualForm.reset();

                return this.Message = "Ritual Published Successfully";
               
            },
            error => {
                return this.Message = "Error While Inserting Data";
            }
        );

    }  
}
