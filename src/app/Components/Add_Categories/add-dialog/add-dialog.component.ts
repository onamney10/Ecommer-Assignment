import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-add-dialog',
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
  ],
  templateUrl: './add-dialog.component.html',
  styleUrl: './add-dialog.component.css',
})
export class AddDialogComponent {
  constructor(private dialogRef: MatDialogRef<AddDialogComponent>) {}

  AddCategoryForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
  });

  get id() {
    return this.AddCategoryForm.controls.name;
  }
  get name() {
    return this.AddCategoryForm.controls.image;
  }

  onSubmit() {
    if (this.AddCategoryForm.invalid) {
      return;
    }
    this.dialogRef.close(this.AddCategoryForm.value);
  }
}
