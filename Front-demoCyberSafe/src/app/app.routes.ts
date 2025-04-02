import { Routes } from '@angular/router';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { MenuInicioComponent } from './menu/menu-inicio/menu-inicio.component';
import { CourseViewComponent } from './courses/course-view/course-view.component';

export const routes: Routes = [
  { path: 'courses/list', component: CoursesListComponent },
  { path: 'inicio', component: MenuInicioComponent },
  { path: 'courses/view', component: CourseViewComponent },
];
