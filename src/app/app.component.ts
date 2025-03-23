import {Component} from '@angular/core';
import {ICONS_TECHNOLOGIES, IconsValue} from './constants/icons-path';
import {BACKEND_PROJECTS, FRONTEND_PROJECTS, Project} from './constants/projects';
import {HeaderComponent} from './components/header/header.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    /*MatTooltip,
    ProjectsCardsComponent,*/
    HeaderComponent,
    RouterOutlet
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
