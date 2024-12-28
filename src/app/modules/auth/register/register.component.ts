import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {TranslatePipe} from "@ngx-translate/core";
import {RouterLink} from '@angular/router';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-register',
  imports: [
    NgForOf,
    TranslatePipe,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  images = environment.images.background.login;
}
