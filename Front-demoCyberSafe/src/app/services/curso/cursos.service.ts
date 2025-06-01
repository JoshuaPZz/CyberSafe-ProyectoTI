import { Injectable, inject } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { from, map } from 'rxjs';

import { Curso } from '../../models/courses/curso';
import { Database, getDatabase, ref, get, child, query, limitToFirst} from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private db: Database) { }

  getCursosPrincipal() {
    const cursosRef = ref(this.db, 'cursos');
    const limitedQuery = query(cursosRef, limitToFirst(6));
    return from(get(limitedQuery)).pipe(
      map((snapshot) => {
        const data = snapshot.val();
        if (!data) return [];
        return Object.values(data) as Curso[];
      })
    );
  }
  getAllCourses() {
    const cursoRef = ref(this.db, 'cursos');
    return from(get(cursoRef)).pipe(
      map((snapshot) => {
        const data = snapshot.val();
        if (!data) return [];
        return Object.values(data) as Curso[];
      })
    ); 
  }  
  getCursoByNombre(nombre: string) {
  const db = getDatabase();
  const cursosRef = ref(db, 'cursos');
  return from(get(cursosRef)).pipe(
    map((snapshot) => {
      if (snapshot.exists()) {
        const cursos = snapshot.val();
        const cursoEncontrado = Object.values(cursos).find(
          (curso: any) => curso.nombre === nombre
        );
        if (cursoEncontrado) {
          return cursoEncontrado as Curso;
        } else {
          throw new Error('Curso no encontrado');
        }
      } else {
        throw new Error('No hay cursos disponibles');
      }
    })
  );
}
}
