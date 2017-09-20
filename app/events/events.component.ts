import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from './events.service';

@Component({
    templateUrl: './app/events/events.component.html'
})
export class EventsComponent implements OnInit {

    public events: any;
    errorMessage: string;

    constructor(private route: ActivatedRoute, private router: Router,
        private eveService: EventsService) {

    }

    ngOnInit(): void {

        this.eveService.EventsList().subscribe(
            data => {
                if (data.length > 0) {
                    this.errorMessage = " ";
                    return this.events = data;
                }
                else {
                    this.events = null;
                    return this.errorMessage = "There are no Events";
                }

            },
            error => {
                return this.errorMessage = <any>error;
            }
        );         
    }
}