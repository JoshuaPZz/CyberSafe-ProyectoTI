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

}
