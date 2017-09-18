import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PhotogalleryComponent } from './photogallery.component'; 
import { PhotoInsertComponent } from './photoinsert.component'; 
import { PhotoDisplayComponent } from './photodisplay.component'; 
import { PhotoGalleryService } from './photogallery.service'; 
import { AuthGuard } from '../_guards/index';

  
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
          {
              path: 'photos',             
              children: [
               //   { path: '', component: VideoGalleryComponent, canActivate: [AuthGuard] },                                 
                  {
                      path: 'insert', component: PhotoInsertComponent, canActivate: [AuthGuard]
                  },

                  {
                      path: 'list', component: PhotogalleryComponent
                  },
                  {
                      path: 'display/:id', component: PhotoDisplayComponent
                  }  
              ]
          },
         
      ])
    ], 
  declarations: [
      PhotogalleryComponent,
      PhotoInsertComponent,
      PhotoDisplayComponent
  ],
  providers: [
      PhotoGalleryService
  ]
})
export class PhotoModule {}
