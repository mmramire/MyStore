import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product = {
    id: '',
    price: 0,
    image: '',
    title: '',
    description: '',
    category: '',
  };

  @Output() addedProduct = new EventEmitter<Product>();

  constructor() {}

  ngOnInit(): void {
     console.log('ngOnInit de product-component');
  }

  onAddToCart() {
    console.log('onAddToCart');
    this.addedProduct.emit(this.product);
  }
}
