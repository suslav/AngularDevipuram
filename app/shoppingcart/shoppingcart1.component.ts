//import { Component } from '@angular/core';

//@Component({
//    templateUrl: './app/shoppingcart/shoppingcart1.component.html'
//})
//export class ShoppingCart1Component {
//}



import { Component, ViewEncapsulation} from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { CartService } from './cart.service';
import { Observable } from 'rxjs/Observable';
import { Product } from './product';

@Component({
    //selector: 'spa-root',
    templateUrl: './app/shoppingcart/shoppingcart1.component.html',
    styleUrls: ['./app/shoppingcart/shoppingcart1.component.html'],
    encapsulation: ViewEncapsulation.None
})
export class ShoppingCart1Component {

    public shoppingCartItems$: Observable<Product[]>;

    constructor(public location: Location
        , private cartService: CartService) {

        this.shoppingCartItems$ = this
            .cartService
            .getItems();

        this.shoppingCartItems$.subscribe(_ => _);
    }

}