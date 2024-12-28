import { Component, input } from '@angular/core';
import { SharedcartService } from '../../services/sharedcart.service';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-incrmentcomponent',
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './incrmentcomponent.component.html',
  styleUrl: './incrmentcomponent.component.css',
})
export class IncrmentcomponentComponent {
  quantity: number = 0;
  productId = input<string | undefined>();

  //////
  title = input<string>();
  // description = input<string>();
  price = input<number>();
  ///////////////////
  constructor(private sharedcart: SharedcartService) {}
  decrement() {
    if (this.quantity > 0) {
      this.quantity = this.quantity - 1;
    }
  }
  increment() {
    this.quantity = this.quantity + 1;
  }
  Addtocart() {
    if (this.quantity > 0) {
      const obj = {
        productId: this.productId(),
        quantity: this.quantity,
        title: this.title(),

        price: this.price(),
      };
      this.sharedcart.cartadding(obj);
      this.quantity = 0;
    }
  }
}
