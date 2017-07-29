import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CoursesComponent } from './courses.component';
import { SriVidyaComponent } from './srividya.component';
import { SrividyaOneComponent } from './srividyaone.component';
import { SrividyatwoComponent } from './srividyatwo.component';

//import { ProductFilterPipe } from './product-filter.pipe';
import { SriVidyaService } from './srividya.service';
import { SriVidyaResolver } from './srividya-resolver.service';
//import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
     // SharedModule,
      RouterModule.forChild([
          {
              path: 'courses',             
              children: [
                  { path: ' ', component: CoursesComponent }
                  ,

                  //{
                  //    path: ':id', component: ProductDetailComponent
                  //    //,resolve: { product: SriVidyaResolver }
                  //},
                  {
                      path: '/', component: SriVidyaComponent,
                      resolve: { product: SriVidyaResolver },
                      children: [
                          { path: '', redirectTo: 'info', pathMatch: 'full' },
                          { path: 'info', component: SrividyaOneComponent },
                          { path: 'tags', component: SrividyatwoComponent }
                      ]
                  }
              ]
          },
         
      ])
    ],
    exports: [
        CommonModule,
        FormsModule
    ],
  declarations: [
      CoursesComponent,
      SriVidyaComponent,    
      SrividyaOneComponent,
      SrividyatwoComponent
      //,ProductFilterPipe
  ],
  providers: [
      SriVidyaService
     ,SriVidyaResolver
  ]
})
export class CoursesModule {}
