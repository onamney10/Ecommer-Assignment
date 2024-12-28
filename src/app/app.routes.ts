import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./Components/login/login.component').then(
        (c) => c.LoginComponent
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import(
        './Components/register-component/register-component.component'
      ).then((c) => c.RegisterComponentComponent),
  },
  {
    path: 'layout',
    loadComponent: () =>
      import('./Components/layout/layout.component').then(
        (c) => c.LayoutComponent
      ),
  },
  {
    path: 'layout/cart',
    loadComponent: () =>
      import('./Components/cart/cart.component').then((c) => c.CartComponent),
  },
];
