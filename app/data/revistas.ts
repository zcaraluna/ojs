export interface Articulo {
  id: number;
  titulo: string;
  autores: string[];
  resumen: string;
  fecha: string;
  descargas: number;
  vistas: number;
}

export interface Revista {
  id: number;
  nombre: string;
  categoria: string;
  descripcion: string;
  ultimoNumero: string;
  articulos: Articulo[];
}

export const revistasData: Revista[] = [
  {
    id: 1,
    nombre: "Revista de Ciencias Computacionales",
    categoria: "tecnologia",
    descripcion: "Publicación dedicada a la investigación en ciencias de la computación, inteligencia artificial y sistemas de información.",
    ultimoNumero: "Vol. 12, No. 3",
    articulos: [
      {
        id: 1,
        titulo: "Algoritmos de Machine Learning para Análisis de Datos",
        autores: ["Dr. Juan Pérez", "Dra. María González"],
        resumen: "Este artículo presenta una revisión de algoritmos de machine learning aplicados al análisis de grandes volúmenes de datos en entornos académicos.",
        fecha: "2024-03-15",
        descargas: 234,
        vistas: 1456
      },
      {
        id: 2,
        titulo: "Ciberseguridad en Sistemas Distribuidos",
        autores: ["Dr. Carlos Martínez"],
        resumen: "Análisis de las principales amenazas de seguridad en sistemas distribuidos modernos y estrategias de mitigación.",
        fecha: "2024-02-28",
        descargas: 189,
        vistas: 987
      }
    ]
  },
  {
    id: 2,
    nombre: "Revista de Humanidades Digitales",
    categoria: "humanidades",
    descripcion: "Explora la intersección entre las humanidades y las tecnologías digitales en la investigación académica contemporánea.",
    ultimoNumero: "Vol. 8, No. 2",
    articulos: [
      {
        id: 3,
        titulo: "Digitalización del Patrimonio Cultural",
        autores: ["Dra. Ana Rodríguez", "Dr. Luis Fernández"],
        resumen: "Estudio sobre metodologías y herramientas para la preservación digital del patrimonio cultural y su accesibilidad.",
        fecha: "2024-01-20",
        descargas: 156,
        vistas: 723
      }
    ]
  },
  {
    id: 3,
    nombre: "Journal of Applied Sciences",
    categoria: "ciencias",
    descripcion: "Revista multidisciplinaria que publica investigaciones aplicadas en diversas áreas de las ciencias naturales.",
    ultimoNumero: "Vol. 15, No. 4",
    articulos: [
      {
        id: 4,
        titulo: "Efectos del Cambio Climático en Ecosistemas Marinos",
        autores: ["Dra. Laura Sánchez", "Dr. Pedro Torres", "Dra. Carmen López"],
        resumen: "Investigación sobre los impactos observados del cambio climático en ecosistemas marinos del Pacífico Sur.",
        fecha: "2024-04-10",
        descargas: 312,
        vistas: 1890
      },
      {
        id: 5,
        titulo: "Nuevos Materiales para Energía Renovable",
        autores: ["Dr. Miguel Herrera"],
        resumen: "Desarrollo de materiales avanzados para mejorar la eficiencia de sistemas de energía solar y eólica.",
        fecha: "2024-03-25",
        descargas: 278,
        vistas: 1654
      }
    ]
  },
  {
    id: 4,
    nombre: "Revista de Ingeniería y Tecnología",
    categoria: "tecnologia",
    descripcion: "Publicación técnica sobre avances en ingeniería, innovación tecnológica y desarrollo de soluciones prácticas.",
    ultimoNumero: "Vol. 10, No. 1",
    articulos: [
      {
        id: 6,
        titulo: "Diseño de Redes de Sensores IoT",
        autores: ["Dr. Roberto Díaz"],
        resumen: "Metodología para el diseño eficiente de redes de sensores inalámbricos para aplicaciones de Internet de las Cosas.",
        fecha: "2024-02-15",
        descargas: 201,
        vistas: 1123
      }
    ]
  }
];

export function obtenerNombreCategoria(categoria: string): string {
  const categorias: Record<string, string> = {
    'ciencias': 'Ciencias',
    'humanidades': 'Humanidades',
    'tecnologia': 'Tecnología'
  };
  return categorias[categoria] || categoria;
}

export function formatearFecha(fecha: string): string {
  const fechaObj = new Date(fecha);
  return fechaObj.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

