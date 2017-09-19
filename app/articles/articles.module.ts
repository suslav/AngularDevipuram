import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticlesComponent } from './articles.component'; 
import { ArticlesInsertComponent } from './articlesinsert.component'; 
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
                  }
              ]
          },
         
      ])
    ], 
  declarations: [
      ArticlesComponent,
      ArticlesInsertComponent
  ],
  providers: [
      ArticlesService
  ]
})
export class ArticlesModule {}
