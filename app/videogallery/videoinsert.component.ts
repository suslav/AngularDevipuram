import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { VideoService } from './video.service';

@Component({
    templateUrl: './app/videogallery/videoinsert.component.html'
})
export class VideoInsertComponent implements OnInit {
    pageTitle: string = 'Publish Video';
    vidForm: FormGroup;
    Message: string;

    errorMessage: string;

    public videocate:any;

    public pvisible = false;  
    constructor(

        private route: ActivatedRoute, private fb: FormBuilder,
        private vdService: VideoService, private router: Router
    ) { }

    ngOnInit(): void {

        console.log('answer');

        this.vdService.videocategoriesList().subscribe(
            answer => {
                if (answer.length > 0) {
                    this.videocate = answer;
                    console.log(answer);
                }
            },
            error => this.errorMessage = <any>error
        );

        this.vidForm = this.fb.group({
            VideoTitle: ['', [Validators.required, Validators.minLength(3)]],
            VideoDescription: ['', Validators.required],
            VideoEmbedcode: ['', Validators.required],
            VideoCategoryId: ['', Validators.required]           
        });
    }


    save() {

        //let Form = this.vidForm.value;
        //let body = Form.Name + '~' + 1 + '|' + Form.Age + '~' + 2 + '|' + Form.Gender + '~' + 3 + '|' + Form.Sonof + '~' + 4;

        let body = this.vidForm.value;
        this.vdService.insertVideos(body).subscribe(
            data => {
                return this.router.navigate(['/courses', 'courseregistred']);               
            },
            error => {
                return this.Message = "Error While Inserting Data";
            }
        );

    }  
}
