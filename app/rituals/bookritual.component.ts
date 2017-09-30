import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { RitualsService } from './rituals.service';
import { Observable } from 'rxjs/Observable';

@Component({   
    templateUrl: './app/rituals/bookritual.component.html'
})

export class BookRitualComponent implements OnInit {   
    bookritualForm: FormGroup;
    Message: string;
    emailMessage: string;

    public ritualid: number;

    public userid: number;
     
    constructor(
        private router: Router,
        private fb: FormBuilder, private _postService: RitualsService
        , private route: ActivatedRoute
    ) { 

       var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        //this.token = currentUser && currentUser.token;
        this.userid = currentUser && currentUser.userid;

    }

    ngOnInit() {

        this.route.params.subscribe((params: Params) => {

            this.ritualid = params['id'];          


        this.bookritualForm = this.fb.group({
            Name: ['', Validators.required],
            Gotram: ['', Validators.required],
            Gender: ['', Validators.required],
            Address: ['', Validators.required],
            Mobile: ['', Validators.required],
            Date: ['', [Validators.required, Validators.pattern('(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))')]],
            RitualID: [this.ritualid],
            UserID: [this.userid]
        });

        }); 
         
    }

    signup() {
        let body = this.bookritualForm.value;

        this._postService.BookRitual(body).subscribe(
            data => {
                 
                return this.Message = "Ritual Booked Successfully";
            },
            error => {
                 
                    return this.Message = "An Error Occured: Try Again";
                
            }
        );

    }
     
}
