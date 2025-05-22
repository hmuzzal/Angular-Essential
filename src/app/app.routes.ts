import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                loadComponent: () =>
                    import('./features/home/home.component').then(c => c.HomeComponent)
            },
            {
                path: 'contacts',
                loadComponent: () =>
                    import('./features/contacts/contacts.component').then(c => c.ContactsComponent)
            }
        ]
    }
];

  