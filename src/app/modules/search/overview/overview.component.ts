import { Component } from '@angular/core';
import {FloatLabel} from 'primeng/floatlabel';
import {InputText} from 'primeng/inputtext';
import {Select} from 'primeng/select';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-overview',
  imports: [
    FloatLabel,
    InputText,
    Select,
    Button
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class SearchOverviewComponent {

}
