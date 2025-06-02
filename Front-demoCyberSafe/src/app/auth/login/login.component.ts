import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router'; // Importa Router
import { CommonModule } from '@angular/common'; // Para usar ngIf u otras directivas

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule], // Agrega CommonModule
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {} // Inyecta Router

  async onLogin() {
    try {
      await this.authService.login(this.email, this.password);
      this.router.navigate(['/inicio']); // Redirige a /inicio después de login exitoso
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }
}