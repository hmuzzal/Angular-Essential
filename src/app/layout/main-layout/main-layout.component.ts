import { Component, inject } from '@angular/core';
import { SideMenuComponent } from '../../shared/components/side-menu/side-menu.component';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'main-layout',
  imports: [RouterOutlet, SideMenuComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.less'
})
export class MainLayoutComponent {

}
