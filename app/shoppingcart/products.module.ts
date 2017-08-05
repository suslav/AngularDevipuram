import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsComponent} from './products.component';
import { ProductListComponent } from './product-list.component';
import { ProductComponent } from './product.component';
import { ProductFilterComponent } from './product-filter.component';
import { ProductDetailsComponent } from './product-details.component';
import {RouterModule} from '@angular/router';
import {routes} from './products.routes';
import { ShoppingCartComponent } from './shopping-cart.component';
import { ColorListComponent } from './color-list.component';

import { ProductsService } from './products.service';
import { CartService } from './cart.service';

import { ShoppingCart1Component } from './shoppingcart1.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ShoppingCart1Component,
    ProductsComponent,
    ProductListComponent,
    ProductComponent,
    ProductFilterComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    ColorListComponent      
  ],
  exports: [
      ShoppingCart1Component,
      ProductsComponent      
  ]
  ,providers: [
      ProductsService
     ,CartService
  ]
})
export class ProductsModule {
}
