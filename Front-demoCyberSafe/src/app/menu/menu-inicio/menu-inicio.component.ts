import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TopBarComponent } from '../top-bar/top-bar.component';

@Component({
  selector: 'app-menu-inicio',
  standalone: true,
  imports: [TopBarComponent],
  templateUrl: './menu-inicio.component.html',
  styleUrl: './menu-inicio.component.css',
})
export class MenuInicioComponent {
  constructor(private router: Router) {}

}
