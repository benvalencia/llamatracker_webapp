import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {RouterLink} from '@angular/router';
import {environment} from '../../../../environments/environment';
import {NgForOf} from '@angular/common';
import {Button} from 'primeng/button';
import {FloatLabel} from 'primeng/floatlabel';
import {InputText} from 'primeng/inputtext';
import {Checkbox} from 'primeng/checkbox';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [
    TranslatePipe,
    RouterLink,
    NgForOf,
    Button,
    FloatLabel,
    InputText,
    Checkbox,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  images = environment.images.background.login;

}
