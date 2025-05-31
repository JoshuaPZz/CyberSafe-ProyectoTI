import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, setPersistence, browserLocalPersistence, onAuthStateChanged } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  constructor(private auth: Auth) {
    // Escucha cambios en el estado de autenticación
    onAuthStateChanged(this.auth, (user) => {
      this.userSubject.next(user);
      console.log('Auth state changed:', user); // Para depuración
    });
  }

  async register(email: string, password: string) {
    try {
      await setPersistence(this.auth, browserLocalPersistence);
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  }

  async login(email: string, password: string) {
    try {
      await setPersistence(this.auth, browserLocalPersistence);
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  }

  async logout() {
    try {
      await signOut(this.auth);
    } catch (error) {
      throw error;
    }
  }

  getCurrentUser() {
    return this.userSubject.value; // Devuelve el valor actual del BehaviorSubject
  }
}