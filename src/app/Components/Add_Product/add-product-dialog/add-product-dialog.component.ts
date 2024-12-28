import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { Category } from '../../../Interfaces/api';

import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-add-product-dialog',
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatSelectModule,
  ],
  templateUrl: './add-product-dialog.component.html',
  styleUrl: './add-product-dialog.component.css',
})
export class AddProductDialogComponent implements OnInit {
  cat!: Category[];
  constructor(
    private dialogRef: MatDialogRef<AddProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: Category[]
  ) {}

  async ngOnInit(): Promise<void> {
    this.cat = this.data;
  }

  AddProductForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    CatId: new FormControl('', [Validators.required]),
  });

  get title() {
    return this.AddProductForm.controls.title;
  }
  get description() {
    return this.AddProductForm.controls.description;
  }
  get image() {
    return this.AddProductForm.controls.image;
  }
  get price() {
    return this.AddProductForm.controls.price;
  }
  get CatId() {
    return this.AddProductForm.controls.CatId;
  }

  onSubmit() {
    if (this.AddProductForm.invalid) {
      return;
    }

    this.dialogRef.close(this.AddProductForm.value);
  }
}
