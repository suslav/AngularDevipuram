import { Routes } from '@angular/router';
import { ShoppingCart1Component } from './shoppingcart1.component';
import {ProductsComponent} from './products.component';
import {ProductDetailsComponent} from './product-details.component';
import { ShoppingCartComponent } from './shopping-cart.component';

export const routes: Routes = [
 // {
 //   path: 'products',
 //   component: ShoppingCart1Component
 //},
 // {
 //     path: 'products2',
 //     component: ProductsComponent
 // },
 // {
 //   path: 'details/:id',
 //   component: ProductDetailsComponent
 // },
 // {
 //   path: 'cart',
 //   component: ShoppingCartComponent
 // }
 
    {
        path: 'products',      
        children: [             
            {
                path: '', component: ShoppingCart1Component,
                children: [
                    { path: '', redirectTo: 'list', pathMatch: 'full' },
                    { path: 'list', component: ProductsComponent },
                    { path: 'details', component: ProductsComponent },
                    { path: 'details/:id', component: ProductDetailsComponent },
                    { path: 'cart', component: ShoppingCartComponent }
                ]
            }
        ]
    }
];
