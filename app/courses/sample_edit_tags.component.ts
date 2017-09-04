import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ISample } from './sample';

@Component({
    templateUrl: './app/courses/sample_edit_tags.component.html'
})
export class SampleEditTagsComponent implements OnInit {
    //@ViewChild(NgForm) productForm: NgForm;
    errorMessage: string;
    newTags = '';
    //product = { id: 1, category: 'test', tags: ['test']};
    product: ISample;

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {


        //this.route.parent.data.subscribe(data => {
        //    this.product = data['product'];             
        //});

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
