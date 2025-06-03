import { Component } from '@angular/core';
import { TopBarComponent } from "../../menu/top-bar/top-bar.component";
import { Router } from '@angular/router';
import { SuscripcionService } from '../../services/suscripcion/suscripcion.service';

@Component({
  selector: 'app-premium',
  imports: [TopBarComponent],
  templateUrl: './premium.component.html',
  styleUrl: './premium.component.css'
})
export class PremiumComponent {

  constructor(private router: Router, private suscripcionService : SuscripcionService) {}

  selectPremiumPlan() {
    this.suscripcionService.suscribirPremium();
    this.router.navigate(['/course/payment'])
  }

  selectFreemiumPlan() {
    this.router.navigate(['/inicio'])
  }

}
