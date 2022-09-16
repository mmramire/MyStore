import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  myShoppingCart: Product[] = [];
  total = 0;
  products: Product[] = [];
  today = new Date();
  // date = new Date(2022, 09, 15);

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    console.log('ngOnInit de productSSSS-component');
    this.productsService
      .getAllProducts()
      .subscribe((data) => (this.products = data));
  }

  onAddToShoppingCart(product: Product) {
    console.log(product);
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }
}
