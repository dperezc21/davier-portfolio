import {Component, Input} from '@angular/core';
import {MatCard} from '@angular/material/card';
import {Project} from '../../constants/projects';
import {MatDivider} from '@angular/material/divider';

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
  @Input() projects!: Project[];

}
