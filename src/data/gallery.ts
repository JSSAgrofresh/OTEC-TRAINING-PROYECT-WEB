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
import socorristasDemostracion from '../assets/img/socorristas-demostracion.jpg';
import socorristasClasePatio from '../assets/img/socorristas-clase-patio.jpg';
import socorristasRcpGrupo from '../assets/img/socorristas-rcp-grupo.jpg';
import socorristasRcpPractica from '../assets/img/socorristas-rcp-practica.jpg';
import socorristasEvaluacion from '../assets/img/socorristas-evaluacion.jpg';
import socorristasKitEmergencia from '../assets/img/socorristas-kit-emergencia.jpg';
import socorristasAulaDea from '../assets/img/socorristas-aula-dea.jpg';
import equipamientoDeaPrimerosAuxilios from '../assets/img/equipamiento-dea-primeros-auxilios.jpg';
import socorristasExtintores from '../assets/img/socorristas-extintores.jpg';
import socorristasExtintorFuego from '../assets/img/socorristas-extintor-fuego.jpg';

export type GalleryPhoto = { src: string; alt: string };

const BASE_PHOTOS: GalleryPhoto[] = [
  { src: socorristasDemostracion, alt: 'Instructores demostrando RCP a un grupo de jóvenes en el centro de entrenamiento' },
  { src: socorristasClasePatio, alt: 'Clase de primeros auxilios para jóvenes en el patio de prácticas' },
  { src: socorristasRcpGrupo, alt: 'Jóvenes practicando compresiones de RCP sobre maniquí' },
  { src: socorristasRcpPractica, alt: 'Alumno practicando compresiones torácicas durante el curso de primeros auxilios' },
  { src: socorristasEvaluacion, alt: 'Instructora demostrando la evaluación de una víctima en el suelo' },
  { src: socorristasKitEmergencia, alt: 'Alumna ajustándose la mochila de emergencia durante la práctica' },
  { src: socorristasAulaDea, alt: 'Instructora explicando el uso del DEA en sala de clases' },
  { src: equipamientoDeaPrimerosAuxilios, alt: 'Equipamiento de entrenamiento: DEA, chaleco de atragantamiento y botiquín profesional' },
  { src: socorristasExtintores, alt: 'Jóvenes preparando extintores portátiles antes de la práctica' },
  { src: socorristasExtintorFuego, alt: 'Práctica de extinción de fuego con extintor portátil' },
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
