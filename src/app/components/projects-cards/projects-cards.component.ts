import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Project} from '../../constants/projects';
import {ICONS_TECHNOLOGIES, IconsValue} from '../../constants/icons-path';
import {MatButton} from '@angular/material/button';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-projects-cards',
  imports: [
    MatButton,
    NgIf
  ],
  templateUrl: './projects-cards.component.html',
  standalone: true,
  styleUrl: './projects-cards.component.css'
})
export class ProjectsCardsComponent implements OnInit, OnChanges {
  @Input() projects!: Project[];
  ICONS: IconsValue[] = ICONS_TECHNOLOGIES;

  mapTechnologiesIcons(technologies: string[]): IconsValue[] {
    return technologies.map(value1 => {
      const tech: IconsValue = this.ICONS.find(value2 => value2.name === value1) as IconsValue;
      return tech ? tech : null;
    }).filter(value => !!value) as IconsValue[];
  }

  mapProjects(projects: Project[]): Project[] {
    return projects.map(value => {
      value.technologiesIcons = this.mapTechnologiesIcons(value.technologies);
      return value;
    });
  }

  ngOnInit(): void {
    this.projects = this.mapProjects(this.projects);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["projects"]?.currentValue)
      this.projects = this.mapProjects(changes["projects"].currentValue);
  }

}
