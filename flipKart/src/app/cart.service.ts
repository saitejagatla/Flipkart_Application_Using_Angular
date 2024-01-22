import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = [];
  cartUpdated = new EventEmitter();

  product : any;
  constructor() { }

  addToCart(product: { name: string; price: number; image: string; }) {
    this.cart.push();
    this.cartUpdated.emit(this.cart);
  }
  
}
