import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { AuthService } from '../../../core/services/auth.service';
import { AntDesignModule } from '../../ant-design/ant-design.module';

@Component({
  selector: 'side-menu',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NzBreadCrumbModule, NzMenuModule, NzLayoutModule, AntDesignModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.less'
})
export class SideMenuComponent {
  isCollapsed = false;

  private authService = inject(AuthService);

  logout() {
    this.authService.logout();
  }
}
