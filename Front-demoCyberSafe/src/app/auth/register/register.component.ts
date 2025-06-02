import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { FormsModule } from '@angular/forms'; // Necesario para ngModel
import { Router, RouterLink } from '@angular/router';
import { Database, getDatabase, ref, set } from '@angular/fire/database';

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

  constructor(private authService: AuthService, private router: Router, private db: Database) {}

  async onRegister() {
    try {
      this.db = getDatabase()
      await this.authService.register(this.email, this.password);
      this.router.navigate(['/inicio']);
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }
}