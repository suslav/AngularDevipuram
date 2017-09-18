import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PhotoGalleryService } from './photogallery.service';

@Component({
    templateUrl: './app/photogallery/photodisplay.component.html'
})
export class PhotoDisplayComponent implements OnInit {

    public photo: any;

    errorMessage: string;

    constructor(private route: ActivatedRoute, private router: Router
        , private phService: PhotoGalleryService) { }

    ngOnInit(): void {

        this.route.params.subscribe((params: Params) => {
            let photoId = params['id'];

            this.phService.photoDetailbyId(photoId).subscribe(
                data => {
                    if (data.length > 0) {
                        this.errorMessage = " ";
                        return this.photo = data[0];
                    }
                    else {
                        this.photo = null;
                        return this.errorMessage = "There are no Photo";
                    }

                },
                error => {
                    return this.errorMessage = <any>error;
                }
            );

        });  
    }
}