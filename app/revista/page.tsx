import { Metadata } from 'next';
import { revistaInfo } from '../data/revista-info';
import { revistasData } from '../data/revistas';
import Buscador from '../components/Buscador';
import Link from 'next/link';
import './styles.css';

export const metadata: Metadata = {
  title: `${revistaInfo.nombre} - Inicio`,
  description: revistaInfo.objetivo,
};

export default function RevistaHome() {
  const revista = revistasData.find(r => r.id === revistaInfo.id);

  return (
    <main className="revista-main">
        <section className="revista-hero">
          <div className="container">
            <div className="revista-header">
              <h1 className="revista-titulo">{revistaInfo.nombre}</h1>
              <p className="revista-issn">ISSN: {revistaInfo.issn}</p>
            </div>
            <div className="revista-info-grid">
              <div className="revista-info-card">
                <h2>Objetivo</h2>
                <p>{revistaInfo.objetivo}</p>
              </div>
              <div className="revista-info-card">
                <h2>Cobertura Temática</h2>
                <ul>
                  {revistaInfo.coberturaTematica.map((tema, idx) => (
                    <li key={idx}>{tema}</li>
                  ))}
                </ul>
              </div>
              <div className="revista-info-card">
                <h2>Información Editorial</h2>
                <p><strong>Editora:</strong> {revistaInfo.entidadEditora}</p>
                <p><strong>Contacto:</strong> <a href={`mailto:${revistaInfo.correoContacto}`}>{revistaInfo.correoContacto}</a></p>
                <p><strong>Idiomas:</strong> {revistaInfo.idiomas.join(', ')}</p>
                <p><strong>Periodicidad:</strong> {revistaInfo.periodicidad}</p>
              </div>
              <div className="revista-info-card">
                <h2>Acceso Abierto</h2>
                <p>{revistaInfo.politicaAccesoAbierto}</p>
                <p className="licencia-info">
                  <strong>Licencia:</strong> Creative Commons {revistaInfo.licencia}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="busqueda-section">
          <div className="container">
            <Buscador />
          </div>
        </section>

        {revista && (
          <section className="ultimos-articulos">
            <div className="container">
              <h2>Últimos Artículos Publicados</h2>
              <div className="articulos-grid">
                {revista.articulos.slice(0, 6).map((articulo) => (
                  <Link key={articulo.id} href={`/revista/articulo/${articulo.id}`} className="articulo-preview">
                    <h3>{articulo.titulo}</h3>
                    <p className="autores">{articulo.autores.join(', ')}</p>
                    <p className="resumen-preview">{articulo.resumen.substring(0, 150)}...</p>
                    <div className="meta-preview">
                      <span>{new Date(articulo.fecha).toLocaleDateString('es-ES')}</span>
                    </div>
                  </Link>
                ))}
              </div>
              <Link href="/revista/archivo" className="btn-ver-todos">Ver todos los artículos</Link>
            </div>
          </section>
        )}
      </main>
  );
}

