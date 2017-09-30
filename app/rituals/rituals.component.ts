import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RitualsService } from './rituals.service';

@Component({
    templateUrl: './app/rituals/rituals.component.html'
})
export class RitualComponent implements OnInit {

    public ritualsdata: any;
    errorMessage: string;

    constructor(private route: ActivatedRoute, private router: Router,
        private svcService: RitualsService) {

    }

    ngOnInit(): void {

        this.svcService.ritualsList().subscribe(
            data => {
                if (data.length > 0) {
                    this.errorMessage = " ";
                    return this.ritualsdata = data;
                }
                else {
                    this.ritualsdata = null;
                    return this.errorMessage = "There are no Rituals";
                }

            },
            error => {
                return this.errorMessage = <any>error;
            }
        );
    }
}