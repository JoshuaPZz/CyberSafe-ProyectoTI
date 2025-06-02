import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { MenuHeaderComponent } from '../../menu/menu-header/menu-header.component';
import { CursosService } from '../../services/curso/cursos.service';
import { Curso } from '../../models/courses/curso';
import { TopBarComponent } from '../../menu/top-bar/top-bar.component';
import { IndividualInstructorComponent } from '../individual-course/individual-instructor/individual-instructor.component';
import { IndividualReviewsComponent } from '../individual-course/individual-reviews/individual-reviews.component';
import { IndividualFaqsComponent } from '../individual-course/individual-faqs/individual-faqs.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-course-view',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MenuHeaderComponent,
    TopBarComponent,
    IndividualInstructorComponent,
    IndividualReviewsComponent,
    IndividualFaqsComponent,
    RouterModule, // <--- Importante para routerLink
  ],
  templateUrl: './course-view.component.html',
  styleUrl: './course-view.component.css',
})
export class CourseViewComponent implements OnInit {
  curso: Curso | undefined;
  loading: boolean = true;
  error: string | null = null;
  activeTab: string = 'overview';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursosService: CursosService,
    private titleService: Title,
    private routerLink: Router
  ) {}

  ngOnInit(): void {
    const courseName = this.route.snapshot.paramMap.get('nombre');
    console.log(courseName);
    if (courseName) {
      this.cursosService.getCursoByNombre(courseName).subscribe(
        (data: Curso) => {
          this.curso = data;
          this.titleService.setTitle(`${this.curso.nombre} - CyberSafe`);
          this.loading = false;
        },
        (error) => {
          console.error('Error al cargar el curso:', error);
          this.error =
            'No se pudo cargar el curso. Intenta de nuevo más tarde.';
          this.titleService.setTitle('Error - CyberSafe');
          this.loading = false;
        }
      );
    } else {
      this.error = 'Curso no encontrado.';
      this.titleService.setTitle('Curso no encontrado - CyberSafe');
      this.loading = false;
    }
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  onSubmitComment(formData: any): void {
    console.log('Comentario enviado:', formData);
  }
}
