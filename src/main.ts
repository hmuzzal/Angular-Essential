import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NZ_ICONS } from 'ng-zorro-antd/icon'; import { UserOutline, TeamOutline, FileOutline, MenuFoldOutline, MenuUnfoldOutline } from '@ant-design/icons-angular/icons';
import { provideHttpClient } from '@angular/common/http';

const icons = [UserOutline, TeamOutline, FileOutline, MenuFoldOutline, MenuUnfoldOutline];

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(), provideAnimations(), provideRouter(routes), { provide: NZ_ICONS, useValue: icons }]
});