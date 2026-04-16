import {Component} from '@angular/core';
import {ContactInformationComponent} from '../contact-information/contact-information.component';
import {TechnologiesComponent} from '../technologies/technologies.component';

@Component({
  selector: 'app-about',
  imports: [
    ContactInformationComponent,
    TechnologiesComponent,
  ],
  templateUrl: './about.component.html',
  standalone: true,
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
