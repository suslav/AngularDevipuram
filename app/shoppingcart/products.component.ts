import {Component, OnInit} from '@angular/core';
import {Product} from './product';
import {ProductsService} from './products.service';
import {CartService} from './cart.service';

@Component({
  selector: 'spa-products',
  templateUrl: './app/shoppingcart/products.component.html',
  styleUrls: ['./app/shoppingcart/products.component.css']
})
export class ProductsComponent implements OnInit {

  public items: Product[] = [];

  constructor(private productsServices: ProductsService
    , private cartService: CartService) {
    productsServices.getProducts()
      .subscribe(_ => this.items = _);

    this.cartService
      .getItems()
      .subscribe((items: Product[]) => {
      // remove items that are in our cart
        const allItems = this.items;
        this.items = allItems.filter(_ => {
          return !this.itemIsInCart(_, items);
        });
      });
  }

  ngOnInit() {
  }

  private itemIsInCart(item: Product, cart: Product[]): boolean {
    return cart.find(_ => _.id === item.id) != null;
  }
}
