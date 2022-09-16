import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private myShoppingCart: Product[] = [];

  //Estado compartido y comunicar de forma reactiva
  private myCart = new BehaviorSubject<Product[]>([]);
  myCart$ = this.myCart.asObservable();

  constructor() {
    console.log('constructor de StoreService');
  }

  addProduct(product: Product) {
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart); //Transmito el estado del array de productos a los interesados en recibir
  }

  getShoppingCart() {
    return this.myShoppingCart;
  }
  getTotal() {
    return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }
}
