import {Component} from '@angular/core';
import {ICONS_TECHNOLOGIES, IconsValue} from './constants/icons-path';
import {MatTooltip} from '@angular/material/tooltip';
import {ProjectsCardsComponent} from './components/projects-cards/projects-cards.component';
import {ContactInformationComponent} from './components/contact-information/contact-information.component';
import {Project, FRONTEND_PROJECTS, BACKEND_PROJECTS} from './constants/projects';

@Component({
  selector: 'app-root',
  imports: [
    MatTooltip,
    ProjectsCardsComponent,
    ContactInformationComponent
  ],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'davier-portfolio';
  technologies: IconsValue[] = ICONS_TECHNOLOGIES;
  frontendProjects: Project[] = FRONTEND_PROJECTS;
  backendProjects: Project[] = BACKEND_PROJECTS;
}
