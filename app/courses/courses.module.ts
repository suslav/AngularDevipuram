import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CoursesComponent } from './courses.component';
import { SriVidyaCourseComponent } from './srividyacourse.component';
import { SrividyaOneComponent } from './srividyaone.component';
import { SrividyatwoComponent } from './srividyatwo.component';
import { SrividyaThreeComponent } from './srividyathree.component';

//import { ProductFilterPipe } from './product-filter.pipe';
import { SriVidyaService } from './srividya.service';
import { SriVidyaResolver } from './srividya-resolver.service';
//import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
      RouterModule.forChild([
          {
              path: 'courses',             
              children: [
                 { path: '', component: CoursesComponent },

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
      SrividyaThreeComponent
      //,ProductFilterPipe
  ],
  providers: [
      SriVidyaService
     ,SriVidyaResolver
  ]
})
export class CoursesModule {}
