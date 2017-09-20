import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SrividyaCourseListComponent } from './srividyacourselist.component'; 
import { SrividyaCourseInsertComponent } from './srividyacourseinsert.component'; 
import { SrividyaCourseDisplayComponent } from './srividyacoursedisplay.component'; 
import { SrividyaCourseService } from './srividyacourse.service'; 
import { AuthGuard } from '../_guards/index';

  
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
          {
              path: 'srividyacourse',             
              children: [                                
                  {
                      path: 'insert', component: SrividyaCourseInsertComponent, canActivate: [AuthGuard]
                  }
                  ,
                  {
                      path: 'list', component: SrividyaCourseListComponent
                  },
                  {
                      path: 'display/:id', component: SrividyaCourseDisplayComponent
                  }  
              ]
          },
         
      ])
    ], 
  declarations: [
      SrividyaCourseListComponent,
      SrividyaCourseInsertComponent
     ,SrividyaCourseDisplayComponent
  ],
  providers: [
      SrividyaCourseService
  ]
})
export class SrividyaCourseModule {}
