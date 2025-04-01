import {Component} from '@angular/core';
import {HeaderComponent} from './components/header/header.component';
import {RouterOutlet} from '@angular/router';
import {MatTooltip} from '@angular/material/tooltip';
import {ICONS_TECHNOLOGIES, IconsValue} from './constants/icons-path';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    RouterOutlet,
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
