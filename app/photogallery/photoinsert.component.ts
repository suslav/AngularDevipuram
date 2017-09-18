import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { PhotoGalleryService } from './photogallery.service';

@Component({
    templateUrl: './app/photogallery/photoinsert.component.html'
})
export class PhotoInsertComponent implements OnInit {
    pageTitle: string = 'Publish Photo';
    phoForm: FormGroup;
    Message: string;

    errorMessage: string;

  //  public videocate:any;

    public pvisible = false;  
    constructor(

        private route: ActivatedRoute, private fb: FormBuilder,
        private phService: PhotoGalleryService, private router: Router
    ) { }

    ngOnInit(): void {

        //this.phService.videocategoriesList().subscribe(
        //    answer => {
        //        if (answer.length > 0) {
        //            this.videocate = answer;
        //            console.log(answer);
        //        }
        //    },
        //    error => this.errorMessage = <any>error
        //);

        this.phoForm = this.fb.group({
            Title: ['', [Validators.required, Validators.minLength(3)]],
            Description: ['', Validators.required],
            AlbumUrl: ['', Validators.required],
            AlbumThumbUrl: ['', Validators.required]           
        });
    }


    save() {
        
        let body = this.phoForm.value;

        console.log(body);

        this.phService.insertPhotos(body).subscribe(
            data => {            
                this.phoForm.reset();

                return this.Message = "Photo Published Successfully";
               
            },
            error => {
                return this.Message = "Error While Inserting Data";
            }
        );

    }  
}
