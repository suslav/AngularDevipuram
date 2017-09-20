import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { EventsService } from './events.service';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
    templateUrl: './app/events/eventsdisplay.component.html' 
})
export class EventsDisplayComponent implements OnInit {

    public event: any;

    public safeURL: any;

    errorMessage: string;

    constructor(private route: ActivatedRoute, private router: Router
        , private evService: EventsService, private _sanitizer: DomSanitizer) {
    }

    ngOnInit(): void {

        this.route.params.subscribe((params: Params) => {
            let eventId = params['id'];

            this.evService.EventDetailbyId(eventId).subscribe(
                data => {
                    if (data.length > 0) {
                        this.errorMessage = " ";
                       // return this.photo = data[0];
                        this.event = data[0];

                       // this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(data[0].ArticleDescription);
                    }
                    else {
                        this.event = null;
                        return this.errorMessage = "There are no Event";
                    }

                },
                error => {
                    return this.errorMessage = <any>error;
                }
            );

        });  
    }
}