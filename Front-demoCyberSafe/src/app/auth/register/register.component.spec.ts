import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule], // Agrega CommonModule
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {} // Inyecta Router

  async onRegister() {
    try {
      await this.authService.register(this.email, this.password);
      this.router.navigate(['/inicio']); // Redirige a /inicio después de registro exitoso
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }
}