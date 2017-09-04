import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

//import { MessageService } from '../messages/message.service';

import { ISample } from './sample';
import { SampleService } from './sample.service';

@Component({
    templateUrl: './app/courses/sample_edit.component.html',
    styleUrls: ['./app/courses/sample_edit.component.css']
})
export class SampleEditComponent implements OnInit {
    pageTitle: string = 'Sample Edit';
    errorMessage: string;

    product: ISample;

    private dataIsValid: { [key: string]: boolean } = {};

    constructor(private productService: SampleService,
       // private messageService: MessageService,
        private route: ActivatedRoute,
        private router:Router) { }

    ngOnInit(): void {
       
        this.route.data.subscribe(data => {
            this.onProductRetrieved(data['product']);
        })


    }

    

    onProductRetrieved(product: ISample): void {
        this.product = product;

        //if (this.product.id === 0) {
            this.pageTitle = 'Add Product';
        //} else {
        //    this.pageTitle = `Edit Product: ${this.product.productName}`;
        //}
    }

    deleteProduct(): void {


       // if (this.product.id === 0) {
       //     this.onSaveComplete();
       //} else {
       //     if (confirm(`Really delete the product: ${this.product.productName}?`)) {
       //         this.productService.deleteProduct(this.product.id)
       //             .subscribe(
       //                 () => this.onSaveComplete(`${this.product.productName} was deleted`),
       //                 (error: any) => this.errorMessage = <any>error
       //             );
       //     }
       // }


    }

    isValid(path: string): boolean {
        this.validate();
        if (path) {
            return this.dataIsValid[path];
        }
        return (this.dataIsValid &&
            Object.keys(this.dataIsValid).every(d => this.dataIsValid[d] === true));
    }

    saveProduct(): void {


        //if (this.isValid(null)) {
        //    this.productService.saveProduct(this.product)
        //        .subscribe(
        //            () => this.onSaveComplete(`${this.product.productName} was saved`),
        //            (error: any) => this.errorMessage = <any>error
        //        );
        //} else {
        //    this.errorMessage = 'Please correct the validation errors.';
        //}


    }

    //onSaveComplete(message?: string): void {
    //    if (message) {
           
    //    }

       
    //    this.router.navigate(['/courses']);
    //}

    validate(): void {
       
        this.dataIsValid = {};

        // 'info' tab
        if (this.product.productName &&
            this.product.productName.length >= 3 &&
            this.product.productCode) {
            this.dataIsValid['info'] = true;
        } else {
            this.dataIsValid['info'] = false;
        }

        // 'tags' tab
        if (this.product.category &&
            this.product.category.length >= 3) {
            this.dataIsValid['tags'] = true;
        } else {
            this.dataIsValid['tags'] = false;
        }
    }
}