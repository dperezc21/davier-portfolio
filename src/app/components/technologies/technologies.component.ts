import {Component} from '@angular/core';
import {DATA_BASE, FRAMEWORKS, OTHER_TECHNOLOGIES, PROGRAMMING_LANGUAGE} from '../../constants/icons-path';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-technologies',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './technologies.component.html',
  standalone: true,
  styleUrl: './technologies.component.css'
})
export class TechnologiesComponent {

  protected readonly databases = DATA_BASE;
  protected readonly programmingLanguages = PROGRAMMING_LANGUAGE;
  protected readonly frameworks = FRAMEWORKS;
  protected readonly other = OTHER_TECHNOLOGIES;
}
