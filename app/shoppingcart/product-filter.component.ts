import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductColor, ProductFilter} from './product';

@Component({
  selector: 'spa-product-filters',
  templateUrl: './app/shoppingcart/product-filter.component.html',
  styleUrls: ['./app/shoppingcart/product-filter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFilterComponent implements OnInit {

  @Input() availableFilters: ProductFilter[] = [];
  @Input() activatedFilters: ProductFilter[] = [];
  @Output() activeFilters: EventEmitter<ProductFilter[]> = new EventEmitter<ProductFilter[]>();

  constructor() {
  }

  ngOnInit() {
  }

  public filterActive(filter: ProductFilter): boolean {
    return this.activatedFilters.find(_ => _.color === filter.color) != null;
  }

  public changeFilterStatus(filter: ProductFilter) {
    this.activeFilters.emit([filter]);
  }
}
