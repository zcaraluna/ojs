'use client';

import Link from 'next/link';
import { revistasData } from './data/revistas';
import { obtenerNombreCategoria } from './data/revistas';
import './styles/home.css';

export default function Home() {
  return (
    <main className="home-main">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-background"></div>
          <div className="container hero-container">
            <div className="hero-content">
              <h1 className="hero-title">
                Sistema de Revistas<br />
                Académicas
              </h1>
              <p className="hero-subtitle">
                Plataforma de excelencia para la gestión y publicación de revistas científicas
                de prestigio internacional
              </p>
              <div className="hero-actions">
                <Link href="/revista" className="btn-primary">
                  Ver Revistas
                </Link>
                <Link href="/revista/acerca" className="btn-secondary">
                  Conoce Más
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">{revistasData.length}</div>
                <div className="stat-label">Revistas Activas</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">
                  {revistasData.reduce((acc, r) => acc + r.articulos.length, 0)}
                </div>
                <div className="stat-label">Artículos Publicados</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Acceso Abierto</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Disponibilidad</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="container">
            <h2 className="section-title">Características Principales</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">✓</div>
                <h3>Revisión por Pares</h3>
                <p>Sistema riguroso de evaluación académica con proceso de revisión doble ciego</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">✓</div>
                <h3>Acceso Abierto</h3>
                <p>Todos los artículos disponibles libremente bajo licencia Creative Commons</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">✓</div>
                <h3>Estándares Internacionales</h3>
                <p>Cumplimiento con requisitos de Latindex 2.0 y criterios de indexación</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">✓</div>
                <h3>Preservación Digital</h3>
                <p>Garantía de acceso permanente a través de sistemas de preservación</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">✓</div>
                <h3>DOI y Metadatos</h3>
                <p>Cada artículo incluye identificador DOI y metadatos completos</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">✓</div>
                <h3>Interoperabilidad</h3>
                <p>Soporte para protocolos OAI-PMH y estándares de intercambio</p>
              </div>
            </div>
          </div>
        </section>

        {/* Revistas Section */}
        <section id="revistas" className="revistas-home-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Nuestras Revistas</h2>
              <p className="section-subtitle">
                Descubre nuestras publicaciones académicas de alta calidad
              </p>
            </div>
            <div className="revistas-home-grid">
              {revistasData.map((revista) => (
                <Link 
                  key={revista.id} 
                  href="/revista"
                  className="revista-home-card"
                >
                  <div className="revista-card-header">
                    <span className="revista-categoria">
                      {obtenerNombreCategoria(revista.categoria)}
                    </span>
                  </div>
                  <h3 className="revista-card-title">{revista.nombre}</h3>
                  <p className="revista-card-desc">{revista.descripcion}</p>
                  <div className="revista-card-footer">
                    <div className="revista-stats">
                      <span>{revista.articulos.length} artículos</span>
                      <span>{revista.ultimoNumero}</span>
                    </div>
                    <span className="revista-link">Ver revista →</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="section-cta">
              <Link href="/revista/archivo" className="btn-outline">
                Ver Archivo Completo
              </Link>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="info-section">
          <div className="container">
            <div className="info-grid">
              <div className="info-card">
                <h3>Para Autores</h3>
                <p>Envía tu investigación siguiendo nuestras guías de publicación</p>
                <Link href="/revista/instrucciones" className="info-link">
                  Ver instrucciones →
                </Link>
              </div>
              <div className="info-card">
                <h3>Políticas Editoriales</h3>
                <p>Conoce nuestros estándares de calidad y procesos editoriales</p>
                <Link href="/revista/politicas" className="info-link">
                  Ver políticas →
                </Link>
              </div>
              <div className="info-card">
                <h3>Comité Editorial</h3>
                <p>Nuestro equipo de expertos garantiza la calidad académica</p>
                <Link href="/revista/comite" className="info-link">
                  Ver comité →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>¿Listo para publicar tu investigación?</h2>
              <p>Únete a nuestra comunidad académica y comparte tus contribuciones científicas</p>
              <div className="cta-actions">
                <Link href="/revista/instrucciones" className="btn-cta-primary">
                  Enviar Artículo
                </Link>
                <Link href="/revista/acerca" className="btn-cta-secondary">
                  Más Información
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}
