import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { ArticlesService } from './articles.service';

@Component({
    templateUrl: './app/articles/articlesinsert.component.html'
})
export class ArticlesInsertComponent implements OnInit {
    pageTitle: string = 'Publish Article';
    artForm: FormGroup;
    Message: string;

    public pvisible = false;  
    constructor(

        private route: ActivatedRoute, private fb: FormBuilder,
        private artService: ArticlesService, private router: Router
    ) { }

    ngOnInit(): void {        

        this.artForm = this.fb.group({
            ArticleTitle: ['', [Validators.required, Validators.minLength(3)]],
            ArticleDescription: ['', Validators.required]                      
        });

    }


    save() {
         
        let body = this.artForm.value;
        this.artService.insertArticles(body).subscribe(
            data => {
                this.artForm.reset();

                return this.Message = "Article Published Successfully";
               
            },
            error => {
                return this.Message = "Error While Inserting Data";
            }
        );

    }  
}
