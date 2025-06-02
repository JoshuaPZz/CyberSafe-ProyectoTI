import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [RouterLink, CommonModule], // Agrega CommonModule a los imports
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit, OnDestroy {
  isLogin: boolean = true;
  private userSubscription: Subscription | undefined;

  constructor(private router: Router, public authService: AuthService) {}

  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe((user) => {
      console.log('User updated in TopBar:', user);
    });
  }

  get userDisplayName(): string {
    const user = this.authService.getCurrentUser();
    return user?.displayName || user?.email || 'Usuario';
  }

  navigateToCourses() {
    this.router.navigate(['/courses/list']);
  }

  navigateToACourse() {
    this.router.navigate(['/course/specific']);
  }

  navigateToStart() {
    this.router.navigate(['/inicio']);
  }

  navigateToPremium() {
    this.router.navigate(['/premium']);
  }

  navigateTo(path: string) {
    this.router.navigate([`/${path.toLowerCase()}`]);
  }

  toggleAuth() {
    this.isLogin = !this.isLogin;
    this.router.navigate([this.isLogin ? '/login' : '/register']);
  }

  navigateToUser() {
    this.router.navigate(['/user']);
  }

  async logout() {
    try {
      await this.authService.logout();
      this.router.navigate(['/login']);
      console.log('Logged out successfully');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}