import {Component, OnInit} from '@angular/core';
import {MAP_PROJECTS, Project} from '../../constants/projects';
import {ProjectsCardsComponent} from '../projects-cards/projects-cards.component';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-projects',
  imports: [
    ProjectsCardsComponent,
    MatButton
  ],
  templateUrl: './projects.component.html',
  standalone: true,
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  projects!: Project[];
  TAG_FRONTEND: string = "frontend";
  TAG_BACKEND: string = "backend";

  displayProjects(tag: string) {
    this.projects = MAP_PROJECTS.get(tag) as Project[];
  }

  ngOnInit(): void {
    this.displayProjects(this.TAG_BACKEND);
  }
}
