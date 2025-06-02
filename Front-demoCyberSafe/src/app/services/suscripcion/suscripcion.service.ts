import { Injectable, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Database, ref, set } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class SuscripcionService {

  private auth = inject(Auth);
  private db = inject(Database);

  async suscribirPremium(): Promise<void> {
    const user = this.auth.currentUser;
    if (!user || !user.email) {
      throw new Error('No hay usuario autenticado.');
    }

    const emailKey = user.email.replace(/\./g, '_');
    const userRef = ref(this.db, `usuarios/${emailKey}`);
    await set(userRef, true);
  }
}
