import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { VideoService } from './video.service';

@Component({
    templateUrl: './app/videogallery/videodisplay.component.html'
})
export class VideoDisplayComponent implements OnInit {

    public video: any;

    errorMessage: string;

    constructor(private route: ActivatedRoute, private router: Router
        , private vdService: VideoService) { }

    ngOnInit(): void {

        this.route.params.subscribe((params: Params) => {
            let videoId = params['id'];

            this.vdService.videosDetailbyId(videoId).subscribe(
                data => {
                    if (data.length > 0) {
                        this.errorMessage = " ";
                        return this.video = data[0];
                    }
                    else {
                        this.video = null;
                        return this.errorMessage = "There are no Categories";
                    }

                },
                error => {
                    return this.errorMessage = <any>error;
                }
            );

        });  
    }
}