import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoGalleryService } from './photogallery.service';

@Component({
    templateUrl: './app/photogallery/photogallery.component.html'
})
export class PhotogalleryComponent implements OnInit {

    public photos: any;
    errorMessage: string;

    constructor(private route: ActivatedRoute, private router: Router
        ,private photoService: PhotoGalleryService) {
    }

    ngOnInit(): void {
        this.photoService.photosList().subscribe(
            data => {
                if (data.length > 0) {
                    this.errorMessage = " ";
                    return this.photos = data;
                }
                else {
                    this.photos = null;
                    return this.errorMessage = "There are no Photoalbums";
                }

            },
            error => {
                return this.errorMessage = <any>error;
            }
        );
    }
}