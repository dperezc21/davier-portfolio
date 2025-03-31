import { Component } from '@angular/core';
import {ContactInformationComponent} from '../contact-information/contact-information.component';

@Component({
  selector: 'app-about',
  imports: [
    ContactInformationComponent
  ],
  templateUrl: './about.component.html',
  standalone: true,
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
