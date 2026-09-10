import torreEquipo from '../assets/img/equipo-6.jpg';
import rescateDetalle from '../assets/img/equipo-4.jpg';
import equipoCloseup from '../assets/img/equipo-3.jpg';
import izajeRescate from '../assets/img/izaje-rescate-1.jpg';
import extintores from '../assets/img/extintores.jpg';
import proyectoMujeres from '../assets/img/proyecto-mujeres.jpg';
import equipoTorre from '../assets/img/equipo-7.jpg';
import equipoGrupo from '../assets/img/equipo-2.jpg';
import izajeRescate2 from '../assets/img/izaje-rescate-2.jpg';
import torreNocturna1 from '../assets/img/torre-nocturna-1.jpg';
import alturaAscenso1 from '../assets/img/altura-ascenso-1.jpg';
import espaciosConfinadosVentana from '../assets/img/espacios-confinados-ventana.jpg';
import salaElectricaLoto from '../assets/img/sala-electrica-loto.jpg';
import muroEscalada1 from '../assets/img/muro-escalada-1.jpg';
import briefingGrupo from '../assets/img/briefing-grupo.jpg';
import alturaDescenso from '../assets/img/altura-descenso.jpg';
import rescateDetalleManos from '../assets/img/rescate-detalle-manos.jpg';
import torreBanner from '../assets/img/torre-banner.jpg';
import plataformaScaffold from '../assets/img/plataforma-scaffold.jpg';
import espaciosConfinadosHatch from '../assets/img/espacios-confinados-hatch.jpg';
import alturaTejado from '../assets/img/altura-tejado.jpg';
import trabajoTuberias from '../assets/img/trabajo-tuberias.jpg';
import alturaArbol from '../assets/img/altura-arbol.jpg';
import muroEscalada2 from '../assets/img/muro-escalada-2.jpg';
import torreNocturna2 from '../assets/img/torre-nocturna-2.jpg';

export type GalleryPhoto = { src: string; alt: string };

const BASE_PHOTOS: GalleryPhoto[] = [
  { src: torreEquipo, alt: 'Equipo entrenando en la torre de altura física' },
  { src: rescateDetalle, alt: 'Detalle de equipo de rescate en altura' },
  { src: equipoCloseup, alt: 'Instructor revisando equipo de anclaje junto a alumnos' },
  { src: izajeRescate, alt: 'Maniobra de izaje y rescate en altura' },
  { src: extintores, alt: 'Práctica de uso de extintores portátiles' },
  { src: proyectoMujeres, alt: 'Participantes del programa de formación para mujeres en minería' },
  { src: equipoTorre, alt: 'Grupo de alumnos en la torre con vista a Calama' },
  { src: equipoGrupo, alt: 'Grupo de alumnos al finalizar un curso' },
  { src: izajeRescate2, alt: 'Maniobra de rescate en altura vista desde la torre' },
  { src: torreNocturna1, alt: 'Torre de entrenamiento iluminada de noche' },
  { src: alturaAscenso1, alt: 'Alumno ascendiendo la torre de altura física' },
  { src: espaciosConfinadosVentana, alt: 'Práctica de ingreso a espacio confinado' },
  { src: salaElectricaLoto, alt: 'Práctica de bloqueo y etiquetado en sala eléctrica' },
  { src: muroEscalada1, alt: 'Alumno en el muro de escalada de la torre' },
  { src: briefingGrupo, alt: 'Briefing grupal antes de una práctica en altura' },
  { src: alturaDescenso, alt: 'Alumno descendiendo por la estructura de andamios' },
  { src: rescateDetalleManos, alt: 'Detalle de equipo utilizado en una práctica de rescate' },
  { src: torreBanner, alt: 'Torre de entrenamiento de OTEC Training Proyect' },
  { src: plataformaScaffold, alt: 'Alumno en la plataforma superior del andamio' },
  { src: espaciosConfinadosHatch, alt: 'Práctica de ingreso a espacio confinado por escotilla' },
  { src: alturaTejado, alt: 'Práctica en altura física en Calama' },
  { src: trabajoTuberias, alt: 'Práctica de trabajo con tuberías y válvulas' },
  { src: alturaArbol, alt: 'Alumno en la torre acompañado por un instructor' },
  { src: muroEscalada2, alt: 'Alumno asegurado en el muro de escalada' },
  { src: torreNocturna2, alt: 'Vista nocturna de la torre de entrenamiento' },
];

const newPhotoModules = import.meta.glob('../assets/img/galeria/*.webp', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const NEW_PHOTOS: GalleryPhoto[] = Object.entries(newPhotoModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
  .map(([, src], index) => ({
    src,
    alt: `Actividad práctica de capacitación OTEC Training Proyect ${index + 1}`,
  }));

export const GALLERY_PHOTOS = [...NEW_PHOTOS, ...BASE_PHOTOS];
