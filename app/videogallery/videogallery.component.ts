import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoService } from './video.service';


@Component({
    templateUrl: './app/videogallery/videogallery.component.html'
})
export class VideoGalleryComponent implements OnInit {

    public videocate: any;

    public videos: any;

    errorMessage: string;

    constructor(private route: ActivatedRoute, private router: Router
        , private vdService: VideoService) { }

    ngOnInit(): void {

        this.vdService.videocategoriesList().subscribe(
            data => {
                if (data.length > 0) {
                    this.errorMessage = " ";
                    return this.videocate = data;
                }
                else {
                    this.videocate = null;
                    return this.errorMessage = "There are no Categories";
                }

            },
            error => {
                 return this.errorMessage = <any>error;
            }
        );


         
    }


    volchange(event: any) {
        console.log(event);

        this.vdService.videosListbyCatId(event.VideoCategoryId).subscribe(
            data => {
                if (data.length > 0) {
                    this.errorMessage = " ";
                    return this.videos = data;
                }
                else {
                    this.videos = null;
                    return this.errorMessage = "There are no Videos";
                }

            },
            error => {
                return this.errorMessage = <any>error;
            }
        );
    }
     
}