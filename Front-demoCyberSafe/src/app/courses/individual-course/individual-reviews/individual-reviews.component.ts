import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CursosService } from '../../../services/curso/cursos.service';
import { Curso } from '../../../models/courses/curso';
import { TopBarComponent } from '../../../menu/top-bar/top-bar.component';
import { Review } from '../../../models/review/review';
@Component({
  selector: 'app-individual-reviews',
  standalone: true,
  imports: [CommonModule, TopBarComponent],
  templateUrl: './individual-reviews.component.html',
  styleUrls: ['./individual-reviews.component.css'],
})
export class IndividualReviewsComponent implements OnInit {
  @Input() nombre?: string;

  // Propiedades del componente
  reviews: Review[] = [];
  loading: boolean = true;
  curso: Curso | undefined;
  error: string | null = null;
  averageRating: number = 0;
  ratingBreakdown: { rating: number; percentage: number }[] = [];

  constructor(
    private route: ActivatedRoute,
    private cursosService: CursosService
  ) {}

  ngOnInit(): void {
    if (this.nombre) {
      this.loadCursoByNombre(this.nombre);
    } else {
      const courseName = this.route.snapshot.paramMap.get('nombre');
      if (courseName) {
        this.loadCursoByNombre(courseName);
      } else {
        this.error = 'Course not found.';
        this.loading = false;
      }
    }
  }

  private loadCursoByNombre(nombre: string): void {
    this.cursosService.getCursoByNombre(nombre).subscribe(
      (data: Curso) => {
        this.curso = data;
        this.loadReviewsFromCurso(data);
      },
      (error) => {
        console.error('Error fetching course reviews:', error);
        this.error = 'Unable to load reviews. Please try again later.';
        this.loading = false;
      }
    );
  }

  private loadReviewsFromCurso(curso: Curso): void {
    this.reviews = Array.isArray(curso.reviews)
      ? curso.reviews.map((r: any) =>
          typeof r === 'string'
            ? { calificacion: 0, opinion: r, nombre: 'Anónimo' }
            : r
        )
      : [];
    this.calculateRatingSummary();
    this.loading = false;
  }

  calculateRatingSummary(): void {
    if (this.reviews.length === 0) {
      this.averageRating = 0;
      this.ratingBreakdown = [
        { rating: 5, percentage: 0 },
        { rating: 4, percentage: 0 },
        { rating: 3, percentage: 0 },
        { rating: 2, percentage: 0 },
        { rating: 1, percentage: 0 },
      ];
      return;
    }

    const totalReviews = this.reviews.length;
    const ratingCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    let totalScore = 0;

    this.reviews.forEach((review) => {
      if (review.calificacion >= 1 && review.calificacion <= 5) {
        ratingCounts[review.calificacion as keyof typeof ratingCounts]++;
        totalScore += review.calificacion;
      }
    });

    this.averageRating = Number((totalScore / totalReviews).toFixed(1));
    this.ratingBreakdown = [
      { rating: 5, percentage: (ratingCounts[5] / totalReviews) * 100 },
      { rating: 4, percentage: (ratingCounts[4] / totalReviews) * 100 },
      { rating: 3, percentage: (ratingCounts[3] / totalReviews) * 100 },
      { rating: 2, percentage: (ratingCounts[2] / totalReviews) * 100 },
      { rating: 1, percentage: (ratingCounts[1] / totalReviews) * 100 },
    ];
  }

  getStars(rating: number): string {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    let starsHTML = '';

    // Estrellas llenas
    for (let i = 0; i < fullStars; i++) {
      starsHTML += '<span class="star">★</span>';
    }

    // Estrellas vacías
    for (let i = 0; i < emptyStars; i++) {
      starsHTML += '<span class="star" style="color: #e0e0e0">☆</span>';
    }

    return starsHTML;
  }
}
