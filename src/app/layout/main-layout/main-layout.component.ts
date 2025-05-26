import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, NzBreadCrumbModule, NzIconModule, NzMenuModule, NzLayoutModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  isCollapsed = false;

  private authService = inject(AuthService);

  logout() {
    this.authService.logout();
  }
}
