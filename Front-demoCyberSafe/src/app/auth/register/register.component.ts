import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms'; // Necesario para ngModel
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink], // Importa FormsModule para usar ngModel
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  async onRegister() {
    try {
      await this.authService.register(this.email, this.password);
      alert('¡Registro exitoso!');
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }
}