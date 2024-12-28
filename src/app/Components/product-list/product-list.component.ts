import {
  Component,
  input,
  output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Product } from '../../Interfaces/api';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { updateProduct } from '../../Interfaces/add';
import { IncrmentcomponentComponent } from '../incrmentcomponent/incrmentcomponent.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialog } from '@angular/material/dialog';
import { UpdateProdDialogComponent } from '../Update_Product/update-prod-dialog/update-prod-dialog.component';
@Component({
  selector: 'app-product-list',
  imports: [
    MatButtonModule,
    MatCardModule,
    FormsModule,
    IncrmentcomponentComponent,
    MatGridListModule,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  constructor(private dialog: MatDialog) {}
  productList = input<Product[]>();
  emitededelete = output<{ id: string }>();

  title!: string;
  description!: string;
  price!: number;
  images!: [string];
  //////////////////////////////////////////////
  emitedupdateObj = output<updateProduct>();

  deleteProduct(id: string) {
    this.emitededelete.emit({
      id: id,
    });
  }
  updateProduct(id: string) {
    const dialogRef = this.dialog.open(UpdateProdDialogComponent, {
      width: '600px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.emitedupdateObj.emit({
          title: result.title,
          description: result.description,
          price: +result.price,
          images: result.images,
          productId: id,
        });
      }
    });
  }
}
