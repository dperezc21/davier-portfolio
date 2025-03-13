import {Component} from '@angular/core';
import {ICONS_TECHNOLOGIES, IconsValue} from './constants/icons-path';
import {MatTooltip} from '@angular/material/tooltip';

@Component({
  selector: 'app-root',
  imports: [
    MatTooltip
  ],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'davier-portfolio';
  technologies: IconsValue[] = ICONS_TECHNOLOGIES;
}
