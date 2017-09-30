import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { RitualsService } from './rituals.service';

@Component({
    templateUrl: './app/rituals/ritualsdisplay.component.html'
})
export class RitualsDisplayComponent implements OnInit {
    pageTitle: string = 'Booked Ritual Details';
   
    Message: string;

    errorMessage: string;
    
    public bookrituals: any;

    public bookritualid: number;
  
    constructor(
        private route: ActivatedRoute, private fb: FormBuilder,
        private risService: RitualsService, private router: Router
    ) { }

    ngOnInit(): void {


        this.route.params.subscribe((params: Params) => {

            this.bookritualid = params['rid'];
            
            this.risService.ritualsListbyBookritualID(this.bookritualid).subscribe(
                answer => {

                    if (answer.length > 0) {
                        this.bookrituals = answer[0];
                    }

                
             },
            error => this.errorMessage = <any>error);
                });
        
        
    }


    
}
