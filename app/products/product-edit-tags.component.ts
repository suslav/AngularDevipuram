import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IProduct } from './product';

@Component({
    templateUrl: './app/products/product-edit-tags.component.html'
})
export class ProductEditTagsComponent implements OnInit {
    //@ViewChild(NgForm) productForm: NgForm;
    errorMessage: string;
    newTags = '';
    //product = { id: 1, category: 'test', tags: ['test']};
    product: IProduct;

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {


        this.route.parent.data.subscribe(data => {
            this.product = data['product'];

            //if (this.productForm) {
            //    this.productForm.reset();
            //}
        });

    }

    // Add the defined tags
    addTags(): void {
        let tagArray = this.newTags.split(',');
        this.product.tags = this.product.tags ? this.product.tags.concat(tagArray) : tagArray;
        this.newTags = '';
    }

    // Remove the tag from the array of tags.
    removeTag(idx: number): void {
        this.product.tags.splice(idx, 1);
    }
}
