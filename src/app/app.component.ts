import {Component} from '@angular/core';
import {ICONS_TECHNOLOGIES, IconsValue} from './constants/icons-path';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'davier-portfolio';
  technologies: IconsValue[] = ICONS_TECHNOLOGIES;
}
