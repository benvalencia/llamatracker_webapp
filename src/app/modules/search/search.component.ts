import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {SubmenuComponent} from '../../shared/components/submenu/submenu.component';
import {IMenuLayout} from '../../shared/components/menu/menu.interface';

@Component({
  selector: 'app-search',
  imports: [
    RouterOutlet,
    SubmenuComponent
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  routes: IMenuLayout[] = [
    {
      route: 'overview',
      label: 'Overview'
    },
    {
      route: 'test1',
      label: 'Test1'
    },
  ];
}
