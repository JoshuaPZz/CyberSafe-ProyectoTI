import { Component } from '@angular/core';
import { MenuHeaderComponent } from '../../menu/menu-header/menu-header.component';

@Component({
  selector: 'app-courses-list',
  imports: [MenuHeaderComponent],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css',
})
export class CoursesListComponent {}
