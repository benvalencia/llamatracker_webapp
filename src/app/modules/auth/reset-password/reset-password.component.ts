import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {TranslatePipe} from "@ngx-translate/core";
import {RouterLink} from '@angular/router';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-reset-password',
  imports: [
    NgForOf,
    TranslatePipe,
    RouterLink
  ],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  images = environment.images.background.login;
}
