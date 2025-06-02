import { Injectable } from '@angular/core';
import { Instructor } from '../models/instructor/instructor';
import { from, map } from 'rxjs';
import { Database, getDatabase, ref, get, child, query, limitToFirst} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  constructor(private db: Database) { }

  getInstructorByNombre(nombre: string) {
    const db = getDatabase();
    const instructorRef = ref(db, 'profesores');
    return from(get(instructorRef)).pipe(
      map((snapshot) => {
        if (snapshot.exists()) {
          const instructores = snapshot.val();
          const instructorEncontrado = Object.values(instructores).find(
            (instructor: any) => instructor.nombre === nombre
          );
          if (instructorEncontrado) {
            return instructorEncontrado as Instructor;
          } else {
            throw new Error('Instructor no encontrado');
          }
        } else {
          throw new Error('No hay instructores disponibles');
        }
      })
    );
  }

}
