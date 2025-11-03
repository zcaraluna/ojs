import { Articulo } from './revistas';

export interface AutorCompleto {
  nombre: string;
  afiliacion: string;
  ciudad: string;
  pais: string;
  correo?: string;
  orcid?: string;
}

export interface ArticuloCompleto extends Articulo {
  tituloIngles?: string;
  resumenIngles?: string;
  palabrasClave: string[];
  palabrasClaveIngles: string[];
  fechaRecepcion: string;
  fechaAceptacion: string;
  fechaPublicacion: string;
  autoresCompletos: AutorCompleto[];
  volumen: string;
  numero: string;
  ano: number;
  paginacion: string;
  doi: string;
  licencia: string;
  referenciaBibliografica: string;
  cuerpoTexto?: string;
}

export const articulosCompletos: ArticuloCompleto[] = [
  {
    id: 1,
    titulo: "Algoritmos de Machine Learning para Análisis de Datos",
    tituloIngles: "Machine Learning Algorithms for Data Analysis",
    autores: ["Dr. Juan Pérez", "Dra. María González"],
    autoresCompletos: [
      {
        nombre: "Juan Carlos Pérez López",
        afiliacion: "Universidad Nacional de Excelencia",
        ciudad: "Ciudad de México",
        pais: "México",
        correo: "jperez@universidad.edu",
        orcid: "0000-0001-2345-6789"
      },
      {
        nombre: "María Elena González Martínez",
        afiliacion: "Instituto Tecnológico Superior",
        ciudad: "Guadalajara",
        pais: "México",
        correo: "mgonzalez@tecnologico.edu",
        orcid: "0000-0002-3456-7890"
      }
    ],
    resumen: "Este artículo presenta una revisión de algoritmos de machine learning aplicados al análisis de grandes volúmenes de datos en entornos académicos. Se analizan las principales técnicas de aprendizaje supervisado y no supervisado, evaluando su eficacia en diferentes contextos de investigación científica.",
    resumenIngles: "This article presents a review of machine learning algorithms applied to the analysis of large volumes of data in academic environments. Main supervised and unsupervised learning techniques are analyzed, evaluating their effectiveness in different scientific research contexts.",
    palabrasClave: ["machine learning", "análisis de datos", "big data", "aprendizaje automático", "ciencia de datos"],
    palabrasClaveIngles: ["machine learning", "data analysis", "big data", "automatic learning", "data science"],
    fecha: "2024-03-15",
    fechaRecepcion: "2023-11-10",
    fechaAceptacion: "2024-02-20",
    fechaPublicacion: "2024-03-15",
    descargas: 234,
    vistas: 1456,
    volumen: "12",
    numero: "3",
    ano: 2024,
    paginacion: "45-68",
    doi: "10.12345/rcc.2024.v12.n3.001",
    licencia: "CC BY 4.0",
    referenciaBibliografica: "Pérez López, J. C., & González Martínez, M. E. (2024). Algoritmos de Machine Learning para Análisis de Datos. Revista de Ciencias Computacionales, 12(3), 45-68. https://doi.org/10.12345/rcc.2024.v12.n3.001",
    cuerpoTexto: "El análisis de grandes volúmenes de datos ha experimentado un crecimiento exponencial en los últimos años..."
  },
  {
    id: 2,
    titulo: "Ciberseguridad en Sistemas Distribuidos",
    tituloIngles: "Cybersecurity in Distributed Systems",
    autores: ["Dr. Carlos Martínez"],
    autoresCompletos: [
      {
        nombre: "Carlos Alberto Martínez Sánchez",
        afiliacion: "Instituto Tecnológico Superior",
        ciudad: "Monterrey",
        pais: "México",
        correo: "cmartinez@tecnologico.edu",
        orcid: "0000-0003-4567-8901"
      }
    ],
    resumen: "Análisis de las principales amenazas de seguridad en sistemas distribuidos modernos y estrategias de mitigación. Se presentan casos de estudio y soluciones prácticas para la protección de infraestructuras críticas.",
    resumenIngles: "Analysis of main security threats in modern distributed systems and mitigation strategies. Case studies and practical solutions for the protection of critical infrastructures are presented.",
    palabrasClave: ["ciberseguridad", "sistemas distribuidos", "seguridad informática", "protección de datos"],
    palabrasClaveIngles: ["cybersecurity", "distributed systems", "information security", "data protection"],
    fecha: "2024-02-28",
    fechaRecepcion: "2023-10-15",
    fechaAceptacion: "2024-01-25",
    fechaPublicacion: "2024-02-28",
    descargas: 189,
    vistas: 987,
    volumen: "12",
    numero: "3",
    ano: 2024,
    paginacion: "69-92",
    doi: "10.12345/rcc.2024.v12.n3.002",
    licencia: "CC BY 4.0",
    referenciaBibliografica: "Martínez Sánchez, C. A. (2024). Ciberseguridad en Sistemas Distribuidos. Revista de Ciencias Computacionales, 12(3), 69-92. https://doi.org/10.12345/rcc.2024.v12.n3.002",
    cuerpoTexto: "Los sistemas distribuidos han transformado la manera en que las organizaciones procesan y almacenan información..."
  }
];

export function obtenerArticuloCompleto(id: number): ArticuloCompleto | undefined {
  return articulosCompletos.find(art => art.id === id);
}

