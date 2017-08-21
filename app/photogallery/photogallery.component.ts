import { Component, OnInit } from '@angular/core';
import { IPhoto } from './photoalbum';
import { PhotoGalleryService } from './photogallery.service';

@Component({
    templateUrl: './app/photogallery/photogallery.component.html'
})
export class PhotogalleryComponent implements OnInit {

    photos: IPhoto[];
    errorMessage: string;

    constructor(private _photoService: PhotoGalleryService) {
    }

    ngOnInit(): void {
        this._photoService.getPhotos().subscribe(photos => this.photos = photos,
            error => this.errorMessage = <any>error);

    }
}