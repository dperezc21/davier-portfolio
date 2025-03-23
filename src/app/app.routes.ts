import { Routes } from '@angular/router';
import {AboutComponent} from './components/about/about.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: "about-me"
  },
  {
    path: "about-me",
    component: AboutComponent
  }
];
