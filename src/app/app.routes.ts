import { Routes } from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import {ProjectsComponent} from './components/projects/projects.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: "about-me"
  },
  {
    path: "about-me",
    component: AboutComponent
  },
  {
    path: "projects",
    component: ProjectsComponent
  }
];
