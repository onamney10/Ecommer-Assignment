import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AuthService } from '../../services/auth.service';
import { User } from '../../Interfaces/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-register-component',
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './register-component.component.html',
  styleUrl: './register-component.component.css',
})
export class RegisterComponentComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toast: ToastrService
  ) {}
  showspinner: boolean = false;
  registerform = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    avatar: new FormControl('', [Validators.required]),
  });
  get email() {
    return this.registerform.controls.email;
  }
  get password() {
    return this.registerform.controls.password;
  }
  get name() {
    return this.registerform.controls.name;
  }
  get avatar() {
    return this.registerform.controls.avatar;
  }
  async onSubmit() {
    this.showspinner = true;
    try {
      if (this.registerform.invalid) {
        return;
      }
      const postdata = { ...this.registerform.value };
      await this.authService.registerUser(postdata as User);
      this.showspinner = false;
      this.router.navigateByUrl('/layout');
    } catch (error) {
      this.toast.warning('Bad Request');
      this.showspinner = false;
    }
  }
}
