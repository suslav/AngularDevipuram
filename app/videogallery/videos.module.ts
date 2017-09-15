import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { VideoGalleryComponent } from './videogallery.component'; 
import { VideoInsertComponent } from './videoinsert.component'; 
import { VideoService } from './video.service'; 
import { AuthGuard } from '../_guards/index';

  
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
          {
              path: 'videos',             
              children: [
               //   { path: '', component: VideoGalleryComponent, canActivate: [AuthGuard] },                                 
                  {
                      path: 'insert', component: VideoInsertComponent
                  },

                  {
                      path: 'list', component: VideoGalleryComponent
                  }                  
              ]
          },
         
      ])
    ], 
  declarations: [
      VideoGalleryComponent,
      VideoInsertComponent            
  ],
  providers: [
      VideoService
  ]
})
export class VideosModule {}
