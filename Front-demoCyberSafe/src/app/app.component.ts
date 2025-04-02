import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuInicioComponent } from './menu/menu-inicio/menu-inicio.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuInicioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Front-demoCyberSafe';
}
