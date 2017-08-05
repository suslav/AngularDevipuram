import {Component, Input, OnInit} from '@angular/core';
import { ProductColor } from './product';

@Component({
  selector: 'spa-color-list',
  templateUrl: './app/shoppingcart/color-list.component.html',
  styleUrls: ['./app/shoppingcart/color-list.component.css']
})
export class ColorListComponent implements OnInit {

  @Input() colors: ProductColor[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
