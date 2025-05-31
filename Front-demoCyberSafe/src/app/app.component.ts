import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuInicioComponent } from './menu/menu-inicio/menu-inicio.component';

@Component({
  selector: 'app-root',
  standalone: true, // Asegúrate de que esto esté presente
  imports: [RouterOutlet, MenuInicioComponent], // Agrega MenuInicioComponent aquí
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Front-demoCyberSafe';
}