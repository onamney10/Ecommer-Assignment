import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { MatButtonModule } from '@angular/material/button';
import { loginUser } from '../../Interfaces/auth';
import { ToastrService } from 'ngx-toastr';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-login',
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
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private router: Router,
    private login: LoginService,
    private toast: ToastrService
  ) {}

  showspinner: boolean = false;
  registerform = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  get email() {
    return this.registerform.controls.email;
  }
  get password() {
    return this.registerform.controls.password;
  }

  taketoregister() {
    this.router.navigateByUrl('register');
  }
  async onSubmit() {
    this.showspinner = true;
    try {
      if (this.registerform.invalid) {
        return;
      }
      const postdata = { ...this.registerform.value };
      await this.login
        .login(postdata as loginUser)
        .then((data) => localStorage.setItem('token', data.access_token));
      this.showspinner = false;
      this.toast.success('Login Successfull');
      this.router.navigateByUrl('layout');
    } catch (error) {
      this.showspinner = false;
      this.toast.warning('Bad Request');
    }
  }
}
