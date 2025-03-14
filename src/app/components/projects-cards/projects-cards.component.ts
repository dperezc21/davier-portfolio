import {Component, Input, OnInit} from '@angular/core';
import {MatCard} from '@angular/material/card';
import {Project} from '../../constants/projects';
import {ICONS_TECHNOLOGIES, IconsValue} from '../../constants/icons-path';
import {MatButton} from '@angular/material/button';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-projects-cards',
  imports: [
    MatCard,
    MatButton,
    NgIf
  ],
  templateUrl: './projects-cards.component.html',
  standalone: true,
  styleUrl: './projects-cards.component.css'
})
export class ProjectsCardsComponent implements OnInit {
  @Input() projects!: Project[];
  ICONS: IconsValue[] = ICONS_TECHNOLOGIES;

  mapTechnologiesIcons(technologies: string[]): IconsValue[] {
    return technologies.map(value1 => {
      const tech: IconsValue = this.ICONS.find(value2 => value2.name === value1) as IconsValue;
      return tech ? tech : null;
    }).filter(value => !!value) as IconsValue[];
  }

  ngOnInit(): void {
    this.projects = this.projects.map(value => {
      value.technologiesIcons = this.mapTechnologiesIcons(value.technologies);
      return value;
    });
  }

}
