

export interface Curso {
    nombre: string;
    descripcion: string;
    duracion: string;
    nombre_profesor: string;
    numero_clases: number;
    numero_quizes: number;
    numero_de_estudiantes: number;
    calificacion: number;
    precio: number;
    tipo_de_suscripcion: string;
    url_foto_curso: string;
    listado_lecciones: string[];
    reviews: string[]; // <-- esto no debe ser null, sino un arreglo
}

