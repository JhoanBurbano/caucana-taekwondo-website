import type { Maestro } from '../types';

export const MAESTRO: Maestro = {
  name: 'Maestro Carlos Rodríguez',
  image: 'director-academia',
  bio: 'Más de 25 años en las artes marciales. Inició en Taekwondo ITF en 1998, obtuvo su cinturón negro en 2003 y desde entonces ha competido y formado campeones a nivel nacional e internacional. Fundador de la Academia Caucana de Taekwondo ITF y representante de la disciplina en el Cauca.',
  disciplines: [
    { name: 'Taekwondo ITF', rank: '6to Dan' },
    { name: 'Kickboxing', rank: 'Instructor certificado' },
    { name: 'Acondicionamiento físico', rank: 'Entrenador deportivo' },
  ],
  achievements: [
    'Campeón nacional Taekwondo ITF (categoría combate)',
    'Medallista Juegos Nacionales',
    'Entrenador de campeones nacionales juveniles y adultos',
    'Representante ITF en torneos panamericanos',
    'Más de 15 años como instructor y director técnico',
  ],
};
