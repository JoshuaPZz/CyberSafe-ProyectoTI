import { Injectable, inject } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { from, map } from 'rxjs';

import { Curso } from '../../models/courses/curso';
import { Database, getDatabase, ref, get, child } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private db: Database = inject(Database);

  constructor() { }


    getCursos() {
    const cursosRef = ref(this.db, 'cursos');
    return from(get(cursosRef)).pipe(
      map((snapshot) => {
        const data = snapshot.val();
        if (!data) return [];
        return Object.values(data) as Curso[];
      })
    );
  }  
}
