import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { CoursesComponent } from './courses.component';
import { SriVidyaCourseComponent } from './srividyacourse.component';
import { SrividyaOneComponent } from './srividyaone.component';
import { SrividyatwoComponent } from './srividyatwo.component';
import { SrividyaThreeComponent } from './srividyathree.component';
import { GeneralVisitorComponent } from './generalvisitor.component';
import { GeneralVisitorInComponent } from './generalvisitorin.component';
import { SrimahameruComponent } from './srimahameru.component';
import { CourseRegistredComponent } from './courseregistred.component';

import { SriVidyaService } from './srividya.service';
import { SriVidyaResolver } from './srividya-resolver.service';
import { AuthGuard } from '../_guards/index';

@NgModule({
    imports: [
        CommonModule,
        //FormsModule,
        ReactiveFormsModule,
      RouterModule.forChild([
          {
              path: 'courses',             
              children: [
                 { path: '', component: CoursesComponent, canActivate: [AuthGuard] },
                //  { path: '', component: CoursesComponent },

                  //{
                  //    path: ':id', component: ProductDetailComponent
                  //    //,resolve: { product: SriVidyaResolver }
                  //},
                  {
                      path: 'srividyac', component: SriVidyaCourseComponent,
                    //  resolve: { product: SriVidyaResolver },
                      children: [
                          { path: '', redirectTo: 'part1', pathMatch: 'full' },
                          { path: 'part1', component: SrividyaOneComponent },
                          { path: 'part2', component: SrividyatwoComponent },
                          { path: 'part3', component: SrividyaThreeComponent }
                      ]
                  },
                  {
                      path: 'generalvisitor', component: GeneralVisitorComponent
                  },
                  {
                      path: 'generalvisitorin', component: GeneralVisitorInComponent
                  },
                  {
                      path: 'srimeru', component: SrimahameruComponent
                  },
                  {
                      path: 'courseregistred', component: CourseRegistredComponent
                  }
              ]
          },
         
      ])
    ],
    //exports: [
    //    CommonModule,
    //    FormsModule
    //],
  declarations: [
      CoursesComponent,
      SriVidyaCourseComponent,
      //,    
      SrividyaOneComponent,
      SrividyatwoComponent,
      SrividyaThreeComponent,
      GeneralVisitorComponent,
      GeneralVisitorInComponent,
      SrimahameruComponent,
      CourseRegistredComponent
  ],
  providers: [
      SriVidyaService
     ,SriVidyaResolver
  ]
})
export class CoursesModule {}
