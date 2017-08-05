import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from './product-details.component';
import { ShoppingCartComponent } from './shopping-cart.component';
import { ShoppingCart1Component } from './shoppingcart1.component';

 
import { AuthGuard } from '../_guards/index';

@NgModule({
    imports: [
        CommonModule,
        //FormsModule,
        ReactiveFormsModule,
      RouterModule.forChild([
          {
              path: 'shoppingcart',             
              children: [              
                  { path: '', component: ShoppingCart1Component },              
                  {
                      path: 'products', component: ProductsComponent                     
                  },
                  {
                      path: 'productdeta', component: ProductDetailsComponent
                  },
                   {
                       path: 'cart', component: ShoppingCartComponent
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
      ShoppingCart1Component,
      ProductsComponent,
      ProductDetailsComponent,
      ShoppingCartComponent      
  ],
  providers: [
     // SriVidyaService
     //,SriVidyaResolver
  ]
})
export class ShoppingcartModule {}
