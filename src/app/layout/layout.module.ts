import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout/main-layout.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

// import { UserOutline, MenuFoldOutline, MenuUnfoldOutline, TeamOutline, FileOutline } from '@ant-design/icons-angular/icons';

// const icons = [UserOutline, MenuFoldOutline, MenuUnfoldOutline, TeamOutline, FileOutline];

@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    NzBreadCrumbModule,
    NzIconModule, 
    NzMenuModule, 
    NzLayoutModule
  ]
})

export class LayoutModule { }
