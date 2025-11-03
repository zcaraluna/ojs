import { Metadata } from 'next';
import { revistaInfo } from '../../data/revista-info';
import '../styles.css';

export const metadata: Metadata = {
  title: `Instrucciones para Autores - ${revistaInfo.nombre}`,
  description: 'Guía de presentación de artículos y normas de estilo',
};

export default function InstruccionesPage() {
  return (
    <main className="revista-main">
        <section className="page-header">
          <div className="container">
            <h1>Instrucciones para Autores</h1>
          </div>
        </section>

        <section className="page-content">
          <div className="container">
            <div className="content-card">
              <h2>Guía de Presentación de Artículos</h2>
              <p>
                La revista acepta artículos originales que contribuyan al avance del conocimiento 
                en las áreas temáticas establecidas. Los manuscritos deben ser inéditos y no estar 
                en proceso de evaluación en otra revista.
              </p>
            </div>

            <div className="content-card">
              <h2>Normas de Estilo</h2>
              <h3>Formato del Documento</h3>
              <ul>
                <li>Extensión: entre 5.000 y 8.000 palabras (incluyendo referencias)</li>
                <li>Formato: Word (.docx) o LaTeX</li>
                <li>Fuente: Times New Roman, 12 puntos, interlineado 1.5</li>
                <li>Márgenes: 2.5 cm en todos los lados</li>
              </ul>

              <h3>Estructura del Artículo</h3>
              <ol>
                <li>Título (español e inglés)</li>
                <li>Resumen (abstract) en español e inglés (máximo 250 palabras cada uno)</li>
                <li>Palabras clave (5-7) en ambos idiomas</li>
                <li>Introducción</li>
                <li>Metodología</li>
                <li>Resultados</li>
                <li>Discusión</li>
                <li>Conclusiones</li>
                <li>Referencias bibliográficas</li>
              </ol>
            </div>

            <div className="content-card">
              <h2>Requisitos Éticos</h2>
              <ul>
                <li>Los autores deben declarar la originalidad del trabajo</li>
                <li>Se requiere declaración de conflicto de intereses</li>
                <li>Debe indicarse si se utilizaron herramientas de IA en la investigación</li>
                <li>Todos los autores deben haber contribuido significativamente al trabajo</li>
              </ul>
            </div>

            <div className="content-card">
              <h2>Política de Revisión</h2>
              <p>
                Todos los artículos son sometidos a revisión por pares doble ciego. 
                El proceso de evaluación tiene una duración aproximada de 8-12 semanas.
              </p>
              <h3>Etapas del Proceso</h3>
              <ol>
                <li>Revisión inicial por el editor (1-2 semanas)</li>
                <li>Evaluación por revisores expertos (4-6 semanas)</li>
                <li>Comunicación de resultados y solicitud de modificaciones si aplica</li>
                <li>Revisión de versiones corregidas</li>
                <li>Decisión final y publicación</li>
              </ol>
            </div>

            <div className="content-card">
              <h2>Formato de Envío</h2>
              <p>
                Los artículos deben enviarse a través del sistema de gestión editorial. 
                Para acceder al sistema, contacte a: <a href={`mailto:${revistaInfo.correoContacto}`}>{revistaInfo.correoContacto}</a>
              </p>
              <h3>Documentos Requeridos</h3>
              <ul>
                <li>Manuscrito completo sin información de autoría</li>
                <li>Carta de presentación con información de autores</li>
                <li>Declaración de originalidad y ética</li>
                <li>Formulario de declaración de conflictos de interés</li>
              </ul>
            </div>

            <div className="content-card">
              <h2>Estilo de Referencias</h2>
              <p>
                Las referencias deben seguir el formato APA (7ª edición). 
                Todas las citas en el texto deben aparecer en la lista de referencias y viceversa.
              </p>
            </div>
          </div>
        </section>
      </main>
  );
}

