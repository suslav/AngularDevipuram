import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductsService} from './products.service';
import {Product} from './product';
import {CartService} from './cart.service';

@Component({
  selector: 'spa-product-details',
  templateUrl: './app/shoppingcart/product-details.component.html',
  styleUrls: ['./app/shoppingcart/product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public product: Product = {};

  constructor(private route: ActivatedRoute
    , private router: Router
    , private productsService: ProductsService
    , private cartService: CartService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.productsService
        .getProduct(id)
        .subscribe(_ => this.product = _)
    });
  }

  public addToCart(product: Product) {
    this.cartService.addToCart(product);
    //this.router.navigateByUrl('/');
    this.router.navigateByUrl('/products');
  }
}
