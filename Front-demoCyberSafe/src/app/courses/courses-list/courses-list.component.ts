import { Component } from '@angular/core';
import { Curso } from '../../models/courses/curso';
import { Router } from '@angular/router';
import { MenuHeaderComponent } from '../../menu/menu-header/menu-header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from "../../menu/top-bar/top-bar.component";
import { CursosService } from '../../services/curso/cursos.service';

@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [CommonModule, RouterModule, TopBarComponent],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css',
})
export class CoursesListComponent {
  private courses: Curso[] = []; 
  constructor(private router: Router, private cursosService: CursosService) {}

  ngOnInit(): void {
      this.cursosService.getCursos().subscribe((data) => {
        this.courses = data;
      });
    }

  navigateToView(event: Event) {
    event.preventDefault();
    this.router.navigate(['/courses/view']);
  }
  navigateToACourse() {
    console.log('Navigating to courses/list');
    this.router.navigate(['/course/specific']);
  }
}
