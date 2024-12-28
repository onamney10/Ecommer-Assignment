import { Injectable } from '@angular/core';
import { cartlist } from '../Interfaces/add';

@Injectable({
  providedIn: 'root',
})
export class SharedcartService {
  cartList: cartlist = [{}];
  constructor() {}

  cartadding(obj: {
    productId?: string | undefined;
    quantity?: number | undefined;
    title?: string | undefined;
    price?: number | undefined;
  }) {
    this.cartList.push(obj);
  }
}
