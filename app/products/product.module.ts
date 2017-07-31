import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit.component';
import { ProductEditInfoComponent } from './product-edit-info.component';
import { ProductEditTagsComponent } from './product-edit-tags.component';

import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';
import { ProductResolver } from './product-resolver.service';

//import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
  //   SharedModule,
      CommonModule,
      FormsModule,
      RouterModule.forChild([
          {
              path: 'products',
              //component: ProductListComponent,
              children: [
                  { path: '', component: ProductListComponent },
                  { path: ':id', component: ProductDetailComponent, resolve: { product: ProductResolver } },
                  {
                      path: ':id/edit', component: ProductEditComponent,
                      resolve: { product: ProductResolver },
                      children: [
                          { path: '', redirectTo: 'info', pathMatch: 'full' },
                          { path: 'info', component: ProductEditInfoComponent },
                          { path: 'tags', component: ProductEditTagsComponent }
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
    ProductListComponent,
    ProductDetailComponent,
      ProductEditComponent,
      ProductEditInfoComponent,
      ProductEditTagsComponent,
    ProductFilterPipe
  ],
  providers: [
      ProductService,
      ProductResolver
  ]
})
export class ProductModule {}
