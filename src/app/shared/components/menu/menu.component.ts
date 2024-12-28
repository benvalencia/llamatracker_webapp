import {Component, inject, Input} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {IMenuLayout} from './menu.interface';

@Component({
  selector: 'app-menu',
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  @Input() routes!: IMenuLayout[];
  @Input() fragments?: IMenuLayout[];

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
