import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {TranslatePipe} from "@ngx-translate/core";
import {RouterLink} from '@angular/router';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-forgot-password',
  imports: [
    NgForOf,
    TranslatePipe,
    RouterLink
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  images = environment.images.background.login;
}
