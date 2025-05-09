import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  imports: [],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
  constructor(private router: Router) {}
  navigateToCourses() {
    console.log('Navigating to courses/list');
    this.router.navigate(['/courses/list']);
  }
  navigateToACourse() {
    console.log('Navigating to courses/list');
    this.router.navigate(['/course/specific']);
  }
  navigateToStart(){
    this.router.navigate(['inicio'])
  }
}
