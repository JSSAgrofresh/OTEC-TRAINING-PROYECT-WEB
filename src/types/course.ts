export interface SenceCourse {
  nombre: string;
  codigoSence: string;
  horas: number;
}

export interface DirectCourse {
  nombre: string;
  horas: number;
}

export interface RiesgoFatalidad {
  codigo: string;
  nombre: string;
  horas: number;
}

export type CourseTabId = 'sence' | 'directos' | 'codelco';
