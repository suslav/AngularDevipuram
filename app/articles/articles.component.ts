import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from './articles.service';

@Component({
    templateUrl: './app/articles/articles.component.html'
})
export class ArticlesComponent implements OnInit {

    public articles: any;
    errorMessage: string;

    constructor(private route: ActivatedRoute, private router: Router,
        private arService: ArticlesService) {

    }

    ngOnInit(): void {

        this.arService.ArticlesList().subscribe(
            data => {
                if (data.length > 0) {
                    this.errorMessage = " ";
                    return this.articles = data;
                }
                else {
                    this.articles = null;
                    return this.errorMessage = "There are no Articles";
                }

            },
            error => {
                return this.errorMessage = <any>error;
            }
        );         
    }
}