import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { ISample } from './sample';

@Component({
    templateUrl: './app/courses/product-edit-info.component.html'
})
export class ProductEditInfoComponent implements OnInit {
    @ViewChild(NgForm) productForm: NgForm;

    errorMessage: string;
    //product = { id: 1, productName: 'test', productCode: 'test' };
    product: ISample;

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
