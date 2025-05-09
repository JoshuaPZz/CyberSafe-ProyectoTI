import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { MenuInicioComponent } from './menu/menu-inicio/menu-inicio.component';
import { CourseViewComponent } from './courses/course-view/course-view.component';
import { NgModule } from '@angular/core';
import { IndividualCourseComponent } from './courses/individual-course/individual-course/individual-course.component';
import { IndividualCurriculumComponent } from './courses/individual-course/individual-curriculum/individual-curriculum.component';
import { IndividualInstructorComponent } from './courses/individual-course/individual-instructor/individual-instructor.component';
import { IndividualFaqsComponent } from './courses/individual-course/individual-faqs/individual-faqs.component';
import { IndividualReviewsComponent } from './courses/individual-course/individual-reviews/individual-reviews.component';
import { CoursePaymentComponent } from './courses/payment/course-payment/course-payment.component';
import { CoursePlaythroughComponent } from './courses/individual-course/course-playthrough/course-playthrough.component';

export const routes: Routes = [
  { path: 'courses/list', component: CoursesListComponent },
  { path: 'inicio', component: MenuInicioComponent },
  { path: 'courses/view', component: CourseViewComponent },
  { path: 'course/specific', component: IndividualCourseComponent },
  { path: 'course/curriculum', component: IndividualCurriculumComponent },
  { path: 'course/instructor', component: IndividualInstructorComponent },
  { path: 'course/faqs', component: IndividualFaqsComponent },
  { path: 'course/reviews', component: IndividualReviewsComponent },
  { path: 'course/payment', component: CoursePaymentComponent },
  { path: 'course/playthrough', component: CoursePlaythroughComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
