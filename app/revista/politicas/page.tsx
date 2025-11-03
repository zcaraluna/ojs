import { Metadata } from 'next';
import { revistaInfo } from '../../data/revista-info';
import '../styles.css';

export const metadata: Metadata = {
  title: `Políticas Editoriales - ${revistaInfo.nombre}`,
  description: 'Políticas editoriales, arbitraje, acceso abierto y código de ética',
};

export default function PoliticasPage() {
  return (
    <main className="revista-main">
        <section className="page-header">
          <div className="container">
            <h1>Políticas Editoriales</h1>
          </div>
        </section>

        <section className="page-content">
          <div className="container">
            <div className="content-card">
              <h2>Sistema de Arbitraje</h2>
              <p>{revistaInfo.politicaArbitraje}</p>
              <h3>Proceso de Evaluación</h3>
              <ol>
                <li>Recepción del manuscrito</li>
                <li>Revisión de formato y cumplimiento de requisitos</li>
                <li>Asignación de revisores (mínimo 2)</li>
                <li>Evaluación por pares (doble ciego)</li>
                <li>Decisión editorial basada en recomendaciones</li>
                <li>Comunicación al autor con resultados</li>
              </ol>
            </div>

            <div className="content-card">
              <h2>Política de Acceso Abierto</h2>
              <p>{revistaInfo.politicaAccesoAbierto}</p>
              <p className="licencia-info">
                <strong>Licencia:</strong> Creative Commons {revistaInfo.licencia}
              </p>
              <p>
                Esta licencia permite a los usuarios distribuir, remezclar, adaptar y construir 
                sobre el material de cualquier manera, siempre que se atribuya el crédito al autor.
              </p>
            </div>

            <div className="content-card">
              <h2>Código de Ética</h2>
              <p>{revistaInfo.codigoEtica}</p>
              <h3>Principios Éticos</h3>
              <ul>
                <li>Honestidad en la presentación de resultados</li>
                <li>Atribución adecuada de fuentes y referencias</li>
                <li>Transparencia en conflictos de interés</li>
                <li>Respeto a la confidencialidad del proceso de revisión</li>
                <li>Conducta ética en la investigación</li>
              </ul>
            </div>

            <div className="content-card">
              <h2>Detección de Plagio</h2>
              <p>{revistaInfo.politicaPlagio}</p>
              <p>
                Todos los manuscritos son analizados mediante software especializado de detección 
                de similitudes. Los autores son responsables de garantizar la originalidad de su trabajo.
              </p>
            </div>

            <div className="content-card">
              <h2>Política sobre Uso de Inteligencia Artificial</h2>
              <p>{revistaInfo.politicaIA}</p>
              <h3>Requisitos de Declaración</h3>
              <ul>
                <li>Indicar qué herramientas de IA se utilizaron</li>
                <li>Explicar cómo se utilizaron en la investigación</li>
                <li>Garantizar que el contenido original es predominantemente humano</li>
                <li>Las herramientas de IA no pueden ser listadas como coautores</li>
              </ul>
            </div>

            <div className="content-card">
              <h2>Preservación Digital</h2>
              <p>{revistaInfo.preservacionDigital}</p>
              <p>
                La revista mantiene políticas activas de respaldo y preservación para garantizar 
                el acceso permanente a los artículos publicados, cumpliendo con estándares 
                internacionales de preservación digital.
              </p>
            </div>
          </div>
        </section>
      </main>
  );
}

