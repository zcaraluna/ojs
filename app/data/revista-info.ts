// Información completa de la revista según Latindex 2.0

export interface InformacionRevista {
  id: number;
  nombre: string;
  nombreCorto: string;
  objetivo: string;
  coberturaTematica: string[];
  issn: string;
  logo?: string;
  entidadEditora: string;
  correoContacto: string;
  idiomas: string[];
  direccionPostal: string;
  pais: string;
  responsablesEditoriales: ResponsableEditorial[];
  comiteEditorial: MiembroComite[];
  periodicidad: string;
  politicaAccesoAbierto: string;
  licencia: string;
  politicaArbitraje: string;
  codigoEtica: string;
  politicaPlagio: string;
  politicaIA: string;
  preservacionDigital: string;
}

export interface ResponsableEditorial {
  nombre: string;
  cargo: string;
  afiliacion: string;
  correo?: string;
}

export interface MiembroComite {
  nombre: string;
  afiliacion: string;
  pais: string;
  rol?: string;
}

export const revistaInfo: InformacionRevista = {
  id: 1,
  nombre: "Revista de Ciencias Computacionales",
  nombreCorto: "Rev. Cienc. Comput.",
  objetivo: "Publicar investigaciones originales y de alta calidad en ciencias de la computación, inteligencia artificial y sistemas de información, contribuyendo al avance del conocimiento científico y tecnológico en estas áreas.",
  coberturaTematica: [
    "Ciencias de la Computación",
    "Inteligencia Artificial",
    "Machine Learning",
    "Sistemas de Información",
    "Seguridad Informática",
    "Arquitectura de Computadores",
    "Redes y Telecomunicaciones"
  ],
  issn: "0123-4567",
  entidadEditora: "Universidad Nacional de Excelencia",
  correoContacto: "editor@revistacienciascomputacionales.edu",
  idiomas: ["Español", "Inglés"],
  direccionPostal: "Avenida Principal 123, Ciudad Universitaria, CP 12345",
  pais: "México",
  responsablesEditoriales: [
    {
      nombre: "Dr. Juan Carlos Pérez López",
      cargo: "Editor en Jefe",
      afiliacion: "Universidad Nacional de Excelencia",
      correo: "jperez@universidad.edu"
    },
    {
      nombre: "Dra. María Elena González Martínez",
      cargo: "Editora Asociada",
      afiliacion: "Universidad Nacional de Excelencia",
      correo: "mgonzalez@universidad.edu"
    },
    {
      nombre: "Dr. Carlos Alberto Martínez Sánchez",
      cargo: "Editor de Sección",
      afiliacion: "Instituto Tecnológico Superior",
      correo: "cmartinez@tecnologico.edu"
    }
  ],
  comiteEditorial: [
    {
      nombre: "Dr. Roberto Silva Torres",
      afiliacion: "Universidad Nacional Autónoma de México",
      pais: "México",
      rol: "Editor Asociado"
    },
    {
      nombre: "Dra. Ana Patricia López García",
      afiliacion: "Instituto Tecnológico de Massachusetts",
      pais: "Estados Unidos",
      rol: "Editora Asociada"
    },
    {
      nombre: "Dr. José Luis Fernández Ruiz",
      afiliacion: "Universidad Complutense de Madrid",
      pais: "España",
      rol: "Editor Asociado"
    },
    {
      nombre: "Dra. Laura Isabel Ramírez Mendoza",
      afiliacion: "Universidad de Buenos Aires",
      pais: "Argentina",
      rol: "Editora Asociada"
    },
    {
      nombre: "Dr. Miguel Ángel Torres Hernández",
      afiliacion: "Universidad de Chile",
      pais: "Chile",
      rol: "Editor Asociado"
    },
    {
      nombre: "Dra. Carmen Rosa Díaz Suárez",
      afiliacion: "Universidad Nacional de Colombia",
      pais: "Colombia",
      rol: "Editora Asociada"
    }
  ],
  periodicidad: "Trimestral",
  politicaAccesoAbierto: "Esta revista proporciona acceso abierto inmediato a su contenido, basado en el principio de que hacer que la investigación esté disponible gratuitamente para el público fomenta un mayor intercambio global del conocimiento.",
  licencia: "CC BY 4.0",
  politicaArbitraje: "Todos los artículos enviados son sometidos a un proceso de revisión por pares doble ciego. El proceso incluye evaluación inicial por el editor, revisión por al menos dos evaluadores expertos en el tema, y decisión final basada en los comentarios y recomendaciones de los revisores.",
  codigoEtica: "La revista adhiere a los principios éticos establecidos por el Comité de Ética en Publicación (COPE) y garantiza la integridad académica en todos los procesos editoriales.",
  politicaPlagio: "Todos los manuscritos son sometidos a revisión de plagio mediante software especializado. Se rechazan automáticamente artículos con similitud superior al 15%.",
  politicaIA: "Se requiere declaración sobre el uso de herramientas de inteligencia artificial en la investigación y redacción. El uso de IA debe ser transparente y no reemplazar la autoría humana original.",
  preservacionDigital: "Los contenidos de la revista son preservados digitalmente mediante repositorios institucionales y sistemas de preservación a largo plazo, garantizando el acceso permanente a los artículos publicados."
};

