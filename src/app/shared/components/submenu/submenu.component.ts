import {Component, inject, Input} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';
import {ISubMenuLayout} from './submenu.interface';

@Component({
  selector: 'app-submenu',
  imports: [
    RouterLink,
    NgForOf,
    NgIf
  ],
  templateUrl: './submenu.component.html',
  styleUrl: './submenu.component.scss'
})
export class SubmenuComponent {
  @Input() routes!: ISubMenuLayout[];
  @Input() fragments?: ISubMenuLayout[];

  routerService = inject(Router)
  activeRouterService = inject(ActivatedRoute)

  isRouteActive(route: string): boolean {
    let isActive = false;

    if (this.fragments) {
      this.activeRouterService.fragment.subscribe((res) => {
        isActive = res === route
      }).unsubscribe()
    } else {
        isActive = this.routerService.url === '/'+route
    }
    return isActive;
  }
}
