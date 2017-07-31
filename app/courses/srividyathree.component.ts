import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { SvcAnswer } from './svcanswer';

@Component({
    templateUrl: './app/courses/srividyathree.component.html'
})
export class SrividyaThreeComponent implements OnInit {
    @ViewChild(NgForm) productForm: NgForm;

    errorMessage: string;
    product: SvcAnswer;

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {

        this.route.parent.data.subscribe(data => {
            this.product = data['product'];

            if (this.productForm) {
                this.productForm.reset();
            }
        });

    }
}
