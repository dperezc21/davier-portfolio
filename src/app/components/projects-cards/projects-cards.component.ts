import { Component } from '@angular/core';
import {MatCard} from '@angular/material/card';

@Component({
  selector: 'app-projects-cards',
  imports: [
    MatCard
  ],
  templateUrl: './projects-cards.component.html',
  standalone: true,
  styleUrl: './projects-cards.component.css'
})
export class ProjectsCardsComponent {

}
