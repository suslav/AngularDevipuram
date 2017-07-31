import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SvcAnswer } from './svcanswer';

@Component({
    templateUrl: './app/courses/srividyatwo.component.html'
})
export class SrividyatwoComponent implements OnInit {
    errorMessage: string;
    newTags = '';  
    product: SvcAnswer;

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {


        this.route.parent.data.subscribe(data => {
            this.product = data['product']; 
        });

    }
   
    addTags(): void {
        let tagArray = this.newTags.split(',');     
        this.newTags = '';
    }


    removeTag(idx: number): void {
    }
}
