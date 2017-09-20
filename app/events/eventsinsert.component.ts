import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { EventsService } from './events.service';
//import { IMyDpOptions, IMyDateModel } from 'mydatepicker';

@Component({
    templateUrl: './app/events/eventsinsert.component.html'
})
export class EventsInsertComponent implements OnInit {
    pageTitle: string = 'Publish Event';
    evnForm: FormGroup;
    Message: string;

    //private myDatePickerOptions: IMyDpOptions = {
    //    dateFormat: 'yyyy-mm-dd',
    //};

    public pvisible = false;  
    constructor(

        private route: ActivatedRoute, private fb: FormBuilder,
        private evnService: EventsService, private router: Router
    ) { }

    ngOnInit(): void {        

        this.evnForm = this.fb.group({
            EventTitle: ['', [Validators.required, Validators.minLength(3)]],
            EventDescription: ['', Validators.required],
            //EventFromDate: ['', Validators.required],
            //EventToDate: ['', Validators.required],

            EventFromDate: ['', [Validators.required, Validators.pattern('(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))')]],
            EventToDate: ['', [Validators.required, Validators.pattern('(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))')]],

            EventImageUrl: ['', Validators.required]   
        });

    }


    save() {
         
        let body = this.evnForm.value;
        this.evnService.insertEvents(body).subscribe(
            data => {
                this.evnForm.reset();

                return this.Message = "Event Published Successfully";
               
            },
            error => {
                return this.Message = "Error While Inserting Data";
            }
        );

    }  
}
