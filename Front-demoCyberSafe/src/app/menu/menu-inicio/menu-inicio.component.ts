import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuHeaderComponent } from '../menu-header/menu-header.component';

@Component({
  selector: 'app-menu-inicio',
  standalone: true,
  imports: [MenuHeaderComponent],
  templateUrl: './menu-inicio.component.html',
  styleUrl: './menu-inicio.component.css',
})
export class MenuInicioComponent {
  constructor(private router: Router) {}

  navigateToCourses() {
    console.log('Navigating to courses/list');
    this.router.navigate(['/courses/list']);
  }
}
