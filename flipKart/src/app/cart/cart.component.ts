import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cart = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.cartUpdated.subscribe((cart) => {
      this.cart = cart;
    });
  }

}
