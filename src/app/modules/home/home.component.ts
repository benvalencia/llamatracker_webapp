import { Component } from '@angular/core';
import {SubmenuComponent} from '../../shared/components/submenu/submenu.component';
import {IMenuLayout} from '../../shared/components/menu/menu.interface';
import {ISubMenuLayout} from '../../shared/components/submenu/submenu.interface';

@Component({
  selector: 'app-home',
  imports: [
    SubmenuComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  routes: IMenuLayout[] = [
    {
      route: '',
      label: ''
    }
  ];

  fragments: ISubMenuLayout[] = [
    {
      route: 'app',
      label: 'App'
    },
    {
      route: 'feature',
      label: 'Feature'
    },
    {
      route: 'about',
      label: 'About'
    },
    {
      route: 'download',
      label: 'Download'
    },
  ];
}
