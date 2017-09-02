import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    templateUrl: './app/courses/courseregistred.component.html'
})
export class CourseRegistredComponent implements OnInit {   
    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
         
    }

     
}
