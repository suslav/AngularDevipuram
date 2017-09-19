import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ArticlesService } from './articles.service';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
    templateUrl: './app/articles/articlesdisplay.component.html'
})
export class ArticlesDisplayComponent implements OnInit {

    public article: any;

    public safeURL: any;

    errorMessage: string;

    constructor(private route: ActivatedRoute, private router: Router
        , private arService: ArticlesService, private _sanitizer: DomSanitizer) {
    }

    ngOnInit(): void {

        this.route.params.subscribe((params: Params) => {
            let articleId = params['id'];

            this.arService.ArticleDetailbyId(articleId).subscribe(
                data => {
                    if (data.length > 0) {
                        this.errorMessage = " ";
                       // return this.photo = data[0];
                        this.article = data[0];

                        this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(data[0].AlbumUrl);
                    }
                    else {
                        this.article = null;
                        return this.errorMessage = "There are no Article";
                    }

                },
                error => {
                    return this.errorMessage = <any>error;
                }
            );

        });  
    }
}