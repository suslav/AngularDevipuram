import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { SrividyaCourseService } from './srividyacourse.service';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
    templateUrl: './app/srividyacourses/srividyacoursedisplay.component.html' 
})
export class SrividyaCourseDisplayComponent implements OnInit {

    public srividyacourse: any;

    public safeURL: any;

    errorMessage: string;

    constructor(private route: ActivatedRoute, private router: Router
        , private svcService: SrividyaCourseService, private _sanitizer: DomSanitizer) {
    }

    ngOnInit(): void {

        this.route.params.subscribe((params: Params) => {
            let CourseID = params['id'];

            this.svcService.SrividyaCourseDetailbyId(CourseID).subscribe(
                data => {
                    if (data.length > 0) {
                        this.errorMessage = " ";
                        this.srividyacourse = data[0];
                    }
                    else {
                        this.srividyacourse = null;
                        return this.errorMessage = "There are no SrividyaCourse";
                    }

                },
                error => {
                    return this.errorMessage = <any>error;
                }
            );

        });  
    }
}