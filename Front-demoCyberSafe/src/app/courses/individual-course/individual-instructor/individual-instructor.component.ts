import { Component, Input } from '@angular/core';
import { Instructor } from '../../../models/instructor/instructor';
import { ActivatedRoute } from '@angular/router';
import { InstructorService } from '../../../services/instructor.service';

@Component({
  selector: 'app-individual-instructor',
  imports: [],
  templateUrl: './individual-instructor.component.html',
  styleUrl: './individual-instructor.component.css',
})
export class IndividualInstructorComponent {
  @Input() nombreProfesor: string = ' ';
  instructor: Instructor | undefined;
  loading: boolean = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private instructorService: InstructorService
  ) {}

  ngOnInit(): void {
    this.instructorService.getInstructorByNombre(this.nombreProfesor).subscribe(
      (data: Instructor) => {
        this.instructor = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error al cargar el curso:', error);
        this.error = 'No se pudo cargar el curso. Intenta de nuevo más tarde.';
        this.loading = false;
      }
    );
  }
}
