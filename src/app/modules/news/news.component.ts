import { Component } from '@angular/core';
import {SubmenuComponent} from "../../shared/components/submenu/submenu.component";
import {IMenuLayout} from '../../shared/components/menu/menu.interface';
import {ISubMenuLayout} from '../../shared/components/submenu/submenu.interface';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-news',
  imports: [
    SubmenuComponent,
    RouterOutlet
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  routes: IMenuLayout[] = [
    {
      route: 'test',
      label: 'Test'
    },
    {
      route: 'test1',
      label: 'Test1'
    },
    {
      route: 'test2',
      label: 'Test2'
    },
    {
      route: 'test3',
      label: 'Test3'
    }
  ];
}
