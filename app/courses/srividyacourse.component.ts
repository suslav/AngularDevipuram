import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { SvcAnswer } from './svcanswer';
import { SriVidyaService } from './srividya.service';

@Component({
    templateUrl: './app/courses/srividyacourse.component.html'
   ,styleUrls: ['./app/courses/srividyacourse.component.css']
})
export class SriVidyaCourseComponent implements OnInit {
    //pageTitle: string = 'SriVidya Course';
     
    //errorMessage: string;

  //  product: SvcAnswer;

    svparentForm: FormGroup;

  //  private dataIsValid: { [key: string]: boolean } = {};

    constructor(
        private srividyaService: SriVidyaService,
        private route: ActivatedRoute,
        private router: Router    
        , private fb: FormBuilder
        ) {       

    }

    ngOnInit(): void {    

        this.svparentForm = this.fb.group({

            svoForm: this.fb.group({

                Name: ['', [Validators.required, Validators.minLength(3)]],
                Age: ['', Validators.required],
                Gender: ['', Validators.required],
                Sonof: ['', Validators.required],
                Place: ['', Validators.required],
                Nationality: ['', Validators.required],
                MaritalStatus: ['', Validators.required],
                EMailID: ['', Validators.required],
                MobilePh: ['', Validators.required],
                Education: ['', Validators.required],
                Expertise: ['', Validators.required],
                Profession: ['', Validators.required]

            })
        });

       
        //this.route.data.subscribe(data => {
        //    this.onProductRetrieved(data['product']);
        //})

    }   


    save() {

        console.log("save");
    }

    //onProductRetrieved(product: SvcAnswer): void {
    //    this.product = product;

    //    if (this.product.SVCAnswerID === 0) {
    //        this.pageTitle = 'Add Product';
    //    } else {
    //        this.pageTitle = `Edit Product: ${this.product.SVCAnswer}`;
    //    }
    //}

    //deleteProduct(): void {
    //    if (this.product.SVCAnswerID === 0) {
    //        // Don't delete, it was never saved.
    //        this.onSaveComplete();
    //    } else {
    //        if (confirm(`Really delete the product: ${this.product.SVCAnswer}?`)) {
    //            this.srividyaService.deleteProduct(this.product.SVCAnswerID)
    //                .subscribe(
    //                () => this.onSaveComplete(`${this.product.SVCAnswer} was deleted`),
    //                (error: any) => this.errorMessage = <any>error
    //                );
    //        }
    //    }
    //}

    //isValid(path: string): boolean {
    //    this.validate();
    //    if (path) {
    //        return this.dataIsValid[path];
    //    }
    //    return (this.dataIsValid &&
    //        Object.keys(this.dataIsValid).every(d => this.dataIsValid[d] === true));
    //}

    //saveProduct(): void {

    //    console.log("save");
        //if (this.isValid(null)) {
        //    this.srividyaService.saveProduct(this.product)
        //        .subscribe(
        //        () => this.onSaveComplete(`${this.product.SVCAnswer} was saved`),
        //        (error: any) => this.errorMessage = <any>error
        //        );
        //} else {
        //    this.errorMessage = 'Please correct the validation errors.';
        //}
   // }

    //onSaveComplete(message?: string): void {
    //    if (message) {
    //       // this.messageService.addMessage(message);
    //    }

    //    // Navigate back to the product list

    //   // this.router.navigate(['/products']);
    //}

    //validate(): void {
    //    // Clear the validation object
    //    this.dataIsValid = {};

    //    // 'info' tab
    //    //if (this.product.SVCAnswer &&
    //    //    this.product.SVCAnswer.length >= 3 &&
    //    //    this.product.SVCQuestionID) {
    //    //    this.dataIsValid['info'] = true;
    //    //} else {
    //    //    this.dataIsValid['info'] = false;
    //    //}

    //    //// 'tags' tab
    //    //if (this.product.VisitorFormID) {
    //    //    this.dataIsValid['tags'] = true;
    //    //} else {
    //    //    this.dataIsValid['tags'] = false;
    //    //}
    //}
}
