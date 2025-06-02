import { Injectable, NgZone } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, setPersistence, browserLocalPersistence, onAuthStateChanged } from '@angular/fire/auth';
import { Database, ref, set } from '@angular/fire/database';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  constructor(private auth: Auth, private db: Database, private ngZone: NgZone) {
    onAuthStateChanged(this.auth, (user) => {
      this.ngZone.run(() => {
        this.userSubject.next(user);
        console.log('Auth state changed:', user);
      });
    });
  }

  async register(email: string, password: string) {
    try {
      // Ejecutar setPersistence dentro de NgZone
      await this.ngZone.run(() =>
        setPersistence(this.auth, browserLocalPersistence)
      );
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      
      // Reemplazar puntos por guiones bajos en el email
      const safeEmail = email.replace(/\./g, '_');
      const usuarioRef = ref(this.db, `usuarios/${safeEmail}`);
      await set(usuarioRef, false);
      
      return userCredential.user;
    } catch (error) {
      console.error('Error during registration:', error);
      throw error;
    }
  }

  async login(email: string, password: string) {
    try {
      await this

.ngZone.run(() =>
        setPersistence(this.auth, browserLocalPersistence)
      );
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      return userCredential.user;
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  }

  async logout() {
    try {
      await signOut(this.auth);
    } catch (error) {
      console.error('Error during logout:', error);
      throw error;
    }
  }

  getCurrentUser() {
    return this.userSubject.value;
  }
}