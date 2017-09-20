import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SrividyaCourseService } from './srividyacourse.service';

@Component({
    templateUrl: './app/srividyacourses/srividyacourselist.component.html'
})
export class SrividyaCourseListComponent implements OnInit {

    public srividyacourse: any;
    errorMessage: string;

    constructor(private route: ActivatedRoute, private router: Router,
        private svcService: SrividyaCourseService) {

    }

    ngOnInit(): void {

        this.svcService.SrividyaCourseList().subscribe(
            data => {
                if (data.length > 0) {
                    this.errorMessage = " ";
                    return this.srividyacourse = data;
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
    }
}