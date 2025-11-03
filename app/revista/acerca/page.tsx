import { Metadata } from 'next';
import { revistaInfo } from '../../data/revista-info';
import '../styles.css';

export const metadata: Metadata = {
  title: `Acerca de - ${revistaInfo.nombre}`,
  description: `Información sobre ${revistaInfo.entidadEditora}`,
};

export default function AcercaPage() {
  return (
    <main className="revista-main">
        <section className="page-header">
          <div className="container">
            <h1>Acerca de la Revista</h1>
          </div>
        </section>

        <section className="page-content">
          <div className="container">
            <div className="content-card">
              <h2>Institución Editora</h2>
              <p><strong>{revistaInfo.entidadEditora}</strong></p>
              <p>{revistaInfo.direccionPostal}</p>
              <p>{revistaInfo.pais}</p>
              <p><strong>Correo de contacto:</strong> <a href={`mailto:${revistaInfo.correoContacto}`}>{revistaInfo.correoContacto}</a></p>
            </div>

            <div className="content-card">
              <h2>Responsables Editoriales</h2>
              <div className="responsables-list">
                {revistaInfo.responsablesEditoriales.map((responsable, idx) => (
                  <div key={idx} className="responsable-item">
                    <h3>{responsable.nombre}</h3>
                    <p><strong>Cargo:</strong> {responsable.cargo}</p>
                    <p><strong>Afiliación:</strong> {responsable.afiliacion}</p>
                    {responsable.correo && (
                      <p><strong>Correo:</strong> <a href={`mailto:${responsable.correo}`}>{responsable.correo}</a></p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="content-card">
              <h2>Objetivo de la Revista</h2>
              <p>{revistaInfo.objetivo}</p>
            </div>

            <div className="content-card">
              <h2>Cobertura Temática</h2>
              <ul className="temas-list">
                {revistaInfo.coberturaTematica.map((tema, idx) => (
                  <li key={idx}>{tema}</li>
                ))}
              </ul>
            </div>

            <div className="content-card">
              <h2>Información General</h2>
              <div className="info-grid">
                <div>
                  <strong>ISSN:</strong> {revistaInfo.issn}
                </div>
                <div>
                  <strong>Periodicidad:</strong> {revistaInfo.periodicidad}
                </div>
                <div>
                  <strong>Idiomas:</strong> {revistaInfo.idiomas.join(', ')}
                </div>
                <div>
                  <strong>País:</strong> {revistaInfo.pais}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}

