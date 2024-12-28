import { Component } from '@angular/core';
import {SubmenuComponent} from '../../shared/components/submenu/submenu.component';
import {IMenuLayout} from '../../shared/components/menu/menu.interface';
import {ISubMenuLayout} from '../../shared/components/submenu/submenu.interface';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-shop',
  imports: [
    SubmenuComponent,
    RouterOutlet
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {
  routes: IMenuLayout[] = [
    {
      route: 'overview',
      label: 'Overview'
    },
    {
      route: 'daily-shop',
      label: 'Daily shop'
    },
    {
      route: 'item-shop',
      label: 'Item shop'
    },
  ];
}
