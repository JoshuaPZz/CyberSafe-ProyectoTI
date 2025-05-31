import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { Curso } from '../../models/courses/curso';
import { CursosService } from '../../services/curso/cursos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-inicio',
  standalone: true,
  imports: [TopBarComponent, CommonModule],
  templateUrl: './menu-inicio.component.html',
  styleUrl: './menu-inicio.component.css',
})
export class MenuInicioComponent {
  courses: Curso[] = [];
  constructor(private router: Router, private cursosService : CursosService) {}

  ngOnInit(): void {
    this.cursosService.getCursos().subscribe((data) => {
      this.courses = data;
    });
  }

}
