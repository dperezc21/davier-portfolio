import { Component } from '@angular/core';
import {ContactInformationComponent} from '../contact-information/contact-information.component';
import {ICONS_TECHNOLOGIES, IconsValue} from "../../constants/icons-path";
import {MatTooltip} from '@angular/material/tooltip';

@Component({
  selector: 'app-about',
  imports: [
    ContactInformationComponent,
    MatTooltip
  ],
  templateUrl: './about.component.html',
  standalone: true,
  styleUrl: './about.component.css'
})
export class AboutComponent {

  protected readonly technologies: IconsValue[] = ICONS_TECHNOLOGIES;
}
