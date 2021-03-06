import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { VideoGalleryComponent } from './videogallery.component'; 
import { VideoInsertComponent } from './videoinsert.component'; 
import { VideoDisplayComponent } from './videodisplay.component'; 
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
                      path: 'insert', component: VideoInsertComponent, canActivate: [AuthGuard]
                  },

                  {
                      path: 'list', component: VideoGalleryComponent
                  },
                  {
                      path: 'display/:id', component: VideoDisplayComponent
                  }  
              ]
          },
         
      ])
    ], 
  declarations: [
      VideoGalleryComponent,
      VideoInsertComponent,
      VideoDisplayComponent
  ],
  providers: [
      VideoService
  ]
})
export class VideosModule {}
