import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuHeaderComponent } from '../../menu/menu-header/menu-header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [CommonModule, RouterModule, MenuHeaderComponent],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css',
})
export class CoursesListComponent {
  constructor(private router: Router) {}

  navigateToView(event: Event) {
    event.preventDefault();
    this.router.navigate(['/courses/view']);
  }
}
