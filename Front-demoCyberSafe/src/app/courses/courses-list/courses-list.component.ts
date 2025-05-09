import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuHeaderComponent } from '../../menu/menu-header/menu-header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from "../../menu/top-bar/top-bar.component";

@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [CommonModule, RouterModule, TopBarComponent],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css',
})
export class CoursesListComponent {
  constructor(private router: Router) {}

  navigateToView(event: Event) {
    event.preventDefault();
    this.router.navigate(['/courses/view']);
  }
  navigateToACourse() {
    console.log('Navigating to courses/list');
    this.router.navigate(['/course/specific']);
  }
}
