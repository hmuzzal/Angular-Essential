import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { authGuard } from './auth/guards/auth.guard';


export const routes: Routes = [
  { 
    path: 'login', 
    loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: '',
    loadComponent: () => import('./layout/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
    canActivate: [authGuard],
    children: [
      { 
        path: 'home', 
        loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent) 
      },
      { 
        path: 'other', 
        loadComponent: () => import('./features/contacts/contacts.component').then(m => m.ContactsComponent) 
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'home' }
];

// export const routes: Routes = [
//     {
//         path: '',
//         component: MainLayoutComponent,
//         children: [
//             {
//                 path: '',
//                 loadComponent: () =>
//                      import('./features/contacts/contacts.component').then(c => c.ContactsComponent)
//             },
//             {
//                 path: 'contacts',
//                 loadComponent: () =>
//                     import('./features/home/home.component').then(c => c.HomeComponent)
                   
//             }
//         ]
//     }
// ];

  