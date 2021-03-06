import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticlesComponent } from './articles.component'; 
import { ArticlesInsertComponent } from './articlesinsert.component'; 
import { ArticlesDisplayComponent } from './articlesdisplay.component'; 
import { ArticlesService } from './articles.service'; 
import { AuthGuard } from '../_guards/index';

  
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
          {
              path: 'articles',             
              children: [                                
                  {
                      path: 'insert', component: ArticlesInsertComponent, canActivate: [AuthGuard]
                  }
                  ,
                  {
                      path: 'list', component: ArticlesComponent
                  },
                  {
                      path: 'display/:id', component: ArticlesDisplayComponent
                  }  
              ]
          },
         
      ])
    ], 
  declarations: [
      ArticlesComponent,
      ArticlesInsertComponent
     ,ArticlesDisplayComponent
  ],
  providers: [
      ArticlesService
  ]
})
export class ArticlesModule {}
