import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TopBarComponent } from "../../menu/top-bar/top-bar.component";
import { Curso } from '../../models/courses/curso';
import { CursosService } from '../../services/curso/cursos.service';

@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [CommonModule, RouterModule, TopBarComponent, FormsModule],
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
})
export class CoursesListComponent implements OnInit {
  courses: Curso[] = [];
  filteredCourses: Curso[] = [];
  paginatedCourses: Curso[] = [];
  loading: boolean = true;

  searchTerm: string = '';
  viewMode: string = 'grid'; // 'grid' o 'list'

  currentPage: number = 1;
  coursesPerPage: number = 9;
  totalPages: number = 0;

  instructorsList: { id: string; name: string; count: number }[] = [];
  selectedInstructors: string[] = [];

  priceFilter: string = 'all'; // 'all', 'free', 'paid'
  allCoursesCount: number = 0;
  freeCoursesCount: number = 0;
  paidCoursesCount: number = 0;

  ratingFilters: { stars: number; count: number }[] = [
    { stars: 5, count: 0 },
    { stars: 4, count: 0 },
    { stars: 3, count: 0 },
    { stars: 2, count: 0 },
    { stars: 1, count: 0 },
  ];
  selectedRatings: number[] = [];

  constructor(private router: Router, private cursosService: CursosService) {}

  ngOnInit(): void {
    this.loading = true;
    this.cursosService.getCursos().subscribe(
      (data: Curso[]) => {
        this.courses = data;
        this.allCoursesCount = this.courses.length;
        this.initializeFilters();
        this.applyFiltersAndPagination();
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching courses:', error);
        this.loading = false;
      }
    );
  }

  initializeFilters(): void {
    const instructorsMap = new Map<string, number>();

    this.freeCoursesCount = 0;
    this.paidCoursesCount = 0;
    this.ratingFilters.forEach(rf => rf.count = 0);

    this.courses.forEach(course => {
      if (course.nombre_profesor) {
        instructorsMap.set(course.nombre_profesor, (instructorsMap.get(course.nombre_profesor) || 0) + 1);
      }

      if (course.precio === 0) {
        this.freeCoursesCount++;
      } else if (course.precio > 0) {
        this.paidCoursesCount++;
      }

      if (typeof course.calificacion === 'number') {
        const roundedRating = Math.round(course.calificacion);
        const ratingFilter = this.ratingFilters.find(rf => rf.stars === roundedRating);
        if (ratingFilter) {
          ratingFilter.count++;
        }
      }
    });

    this.instructorsList = Array.from(instructorsMap.entries()).map(([name, count], index) => ({
      id: `inst-${index}`,
      name,
      count
    }));
  }

  applyFiltersAndPagination(): void {
    let tempCourses = this.courses;

    if (this.searchTerm) {
      tempCourses = tempCourses.filter(course =>
        course.nombre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        course.descripcion.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        course.nombre_profesor.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    if (this.selectedInstructors.length > 0) {
      tempCourses = tempCourses.filter(course =>
        course.nombre_profesor && this.selectedInstructors.includes(course.nombre_profesor)
      );
    }

    if (this.priceFilter === 'gratis') {
      tempCourses = tempCourses.filter(course => course.precio === 0);
    } else if (this.priceFilter === 'Pago único') {
      tempCourses = tempCourses.filter(course => course.precio > 0);
    }

    if (this.selectedRatings.length > 0) {
      tempCourses = tempCourses.filter(course =>
        typeof course.calificacion === 'number' && this.selectedRatings.includes(Math.round(course.calificacion))
      );
    }

    this.filteredCourses = tempCourses;

    this.totalPages = Math.ceil(this.filteredCourses.length / this.coursesPerPage);
    if (this.totalPages > 0 && this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
    } else if (this.totalPages === 0) {
      this.currentPage = 1;
    }

    const startIndex = (this.currentPage - 1) * this.coursesPerPage;
    const endIndex = startIndex + this.coursesPerPage;
    this.paginatedCourses = this.filteredCourses.slice(startIndex, endIndex);
  }

  onSearch(): void {
    this.currentPage = 1;
    this.applyFiltersAndPagination();
  }

  setViewMode(mode: string): void {
    this.viewMode = mode;
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.applyFiltersAndPagination();
    }
  }

  getPageNumbers(): number[] {
    const pageNumbers: number[] = [];
    if (this.totalPages <= 7) {
      for (let i = 1; i <= this.totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
      if (this.currentPage > 4) {
        pageNumbers.push(-1);
      }

      let startPage = Math.max(2, this.currentPage - 2);
      let endPage = Math.min(this.totalPages - 1, this.currentPage + 2);

      if (this.currentPage <= 4) {
        endPage = Math.min(5, this.totalPages - 1);
      }
      if (this.currentPage > this.totalPages - 4) {
        startPage = Math.max(2, this.totalPages - 4);
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (this.currentPage < this.totalPages - 3) {
        pageNumbers.push(-1);
      }
      pageNumbers.push(this.totalPages);
    }
    return pageNumbers.filter((num, index, self) => num === -1 ? self.indexOf(num, index + 1) === -1 : true);
  }

  getStarArray(calificacion: number | undefined): boolean[] {
    if (typeof calificacion === 'undefined') return Array(5).fill(false);
    const stars = Math.round(calificacion);
    return Array(5).fill(false).map((_, i) => i < stars);
  }

  onImageError(event: Event): void {
    (event.target as HTMLImageElement).src = './assets/courses-img/default-course.png';
  }

  navigateToACourse(courseNombre: string): void {
    console.log(`Navigating to course with name: ${courseNombre}`);
    this.router.navigate(['/course', courseNombre]);
  }

  onInstructorChange(instructorName: string, event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.selectedInstructors.push(instructorName);
    } else {
      this.selectedInstructors = this.selectedInstructors.filter(inst => inst !== instructorName);
    }
    this.currentPage = 1;
    this.applyFiltersAndPagination();
  }

  onPriceFilterChange(filterValue: string): void {
    this.priceFilter = filterValue;
    this.currentPage = 1;
    this.applyFiltersAndPagination();
  }

  onRatingChange(ratingValue: number, event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.selectedRatings.push(ratingValue);
    } else {
      this.selectedRatings = this.selectedRatings.filter(r => r !== ratingValue);
    }
    this.currentPage = 1;
    this.applyFiltersAndPagination();
  }

  clearAllFilters(): void {
    this.searchTerm = '';
    this.selectedInstructors = [];
    this.priceFilter = 'all';
    this.selectedRatings = [];
    this.currentPage = 1;
    this.applyFiltersAndPagination();
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}