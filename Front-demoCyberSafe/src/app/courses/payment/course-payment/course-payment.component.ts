import { Component } from '@angular/core';
import { TopBarComponent } from '../../../menu/top-bar/top-bar.component';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-course-payment',
  imports: [CommonModule,TopBarComponent, RouterModule],
  templateUrl: './course-payment.component.html',
  styleUrl: './course-payment.component.css'
})
export class CoursePaymentComponent {
  constructor(private router : Router) {}

  paymentBtn(){
    console.log('Navigating to courses/list');
    this.router.navigate(['course/playthrough']);
    }
}
