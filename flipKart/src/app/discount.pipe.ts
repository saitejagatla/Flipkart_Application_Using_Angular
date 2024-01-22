import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  s : any;
  amount : any;
  dis : any;


  transform(price: number, discount : number) {
    this.s = price / 100 * discount;

    this. amount = price - this.s;

    return this.amount;

  }

}
