import { Metadata } from 'next';
import { obtenerArticuloCompleto } from '../../../data/articulos-completos';
import { revistaInfo } from '../../../data/revista-info';
import { notFound } from 'next/navigation';
import '../../styles.css';

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const articulo = obtenerArticuloCompleto(Number(params.id));
  
  if (!articulo) {
    return {
      title: 'Artículo no encontrado',
    };
  }

  return {
    title: `${articulo.titulo} - ${revistaInfo.nombre}`,
    description: articulo.resumen,
    keywords: articulo.palabrasClave.join(', '),
    openGraph: {
      title: articulo.titulo,
      description: articulo.resumen,
      type: 'article',
      publishedTime: articulo.fechaPublicacion,
      authors: articulo.autoresCompletos.map(a => a.nombre),
    },
    other: {
      'citation_title': articulo.titulo,
      'citation_author': articulo.autoresCompletos.map(a => a.nombre).join('; '),
      'citation_publication_date': articulo.fechaPublicacion,
      'citation_journal_title': revistaInfo.nombre,
      'citation_doi': articulo.doi,
      'citation_issn': revistaInfo.issn,
    },
  };
}

export default function ArticuloPage({ params }: PageProps) {
  const articulo = obtenerArticuloCompleto(Number(params.id));

  if (!articulo) {
    notFound();
  }

  return (
    <>
      {/* Metadatos Dublin Core */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            "headline": articulo.titulo,
            "abstract": articulo.resumen,
            "author": articulo.autoresCompletos.map(autor => ({
              "@type": "Person",
              "name": autor.nombre,
              "affiliation": {
                "@type": "Organization",
                "name": autor.afiliacion,
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": autor.ciudad,
                  "addressCountry": autor.pais
                }
              },
              ...(autor.orcid && {
                "identifier": {
                  "@type": "PropertyValue",
                  "propertyID": "ORCID",
                  "value": `https://orcid.org/${autor.orcid}`
                }
              })
            })),
            "datePublished": articulo.fechaPublicacion,
            "dateReceived": articulo.fechaRecepcion,
            "dateAccepted": articulo.fechaAceptacion,
            "publisher": {
              "@type": "Organization",
              "name": revistaInfo.entidadEditora
            },
            "isPartOf": {
              "@type": "Periodical",
              "name": revistaInfo.nombre,
              "issn": revistaInfo.issn
            },
            "identifier": {
              "@type": "PropertyValue",
              "propertyID": "DOI",
              "value": articulo.doi
            },
            "license": "https://creativecommons.org/licenses/by/4.0/",
            "keywords": articulo.palabrasClave.join(", "),
            "inLanguage": ["es", "en"]
          })
        }}
      />
      <main className="revista-main">
        <article className="articulo-completo">
          <div className="container">
            {/* Información bibliográfica del fascículo */}
            <div className="info-fasciculo">
              <p>
                <strong>{revistaInfo.nombre}</strong> | 
                Vol. {articulo.volumen}, No. {articulo.numero} ({articulo.ano}) | 
                pp. {articulo.paginacion}
              </p>
            </div>

            {/* Título */}
            <h1 className="titulo-articulo">{articulo.titulo}</h1>
            {articulo.tituloIngles && (
              <h2 className="titulo-articulo-en">{articulo.tituloIngles}</h2>
            )}

            {/* Autores con afiliación */}
            <div className="autores-seccion">
              {articulo.autoresCompletos.map((autor, idx) => (
                <div key={idx} className="autor-item">
                  <p className="nombre-autor">{autor.nombre}</p>
                  <p className="afiliacion-autor">
                    {autor.afiliacion}, {autor.ciudad}, {autor.pais}
                  </p>
                  {autor.correo && (
                    <p className="contacto-autor">
                      <a href={`mailto:${autor.correo}`}>{autor.correo}</a>
                    </p>
                  )}
                  {autor.orcid && (
                    <p className="orcid-autor">
                      ORCID: <a href={`https://orcid.org/${autor.orcid}`} target="_blank" rel="noopener noreferrer">{autor.orcid}</a>
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Fechas editoriales */}
            <div className="fechas-editoriales">
              <p><strong>Fecha de recepción:</strong> {new Date(articulo.fechaRecepcion).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <p><strong>Fecha de aceptación:</strong> {new Date(articulo.fechaAceptacion).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <p><strong>Fecha de publicación:</strong> {new Date(articulo.fechaPublicacion).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>

            {/* Resumen en español */}
            <div className="resumen-seccion">
              <h2>Resumen</h2>
              <p>{articulo.resumen}</p>
            </div>

            {/* Resumen en inglés */}
            {articulo.resumenIngles && (
              <div className="resumen-seccion">
                <h2>Abstract</h2>
                <p>{articulo.resumenIngles}</p>
              </div>
            )}

            {/* Palabras clave */}
            <div className="palabras-clave-seccion">
              <div className="palabras-clave-item">
                <h3>Palabras clave:</h3>
                <p>{articulo.palabrasClave.join(', ')}</p>
              </div>
              {articulo.palabrasClaveIngles.length > 0 && (
                <div className="palabras-clave-item">
                  <h3>Keywords:</h3>
                  <p>{articulo.palabrasClaveIngles.join(', ')}</p>
                </div>
              )}
            </div>

            {/* DOI */}
            <div className="doi-seccion">
              <p><strong>DOI:</strong> <a href={`https://doi.org/${articulo.doi}`}>{articulo.doi}</a></p>
            </div>

            {/* Licencia */}
            <div className="licencia-seccion">
              <p>
                <strong>Licencia:</strong> Este artículo se distribuye bajo la licencia Creative Commons {articulo.licencia}.
              </p>
              <p>
                <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">
                  Ver detalles de la licencia
                </a>
              </p>
            </div>

            {/* Cuerpo del texto */}
            {articulo.cuerpoTexto ? (
              <div className="cuerpo-texto">
                <h2>Texto Completo</h2>
                <div dangerouslySetInnerHTML={{ __html: `<p>${articulo.cuerpoTexto}</p>` }} />
              </div>
            ) : (
              <div className="cuerpo-texto">
                <p>El texto completo está disponible en el PDF adjunto.</p>
              </div>
            )}

            {/* Referencia bibliográfica */}
            <div className="referencia-bibliografica">
              <h2>Referencia Bibliográfica</h2>
              <p className="referencia-texto">{articulo.referenciaBibliografica}</p>
            </div>

            {/* Estadísticas y acciones */}
            <div className="acciones-articulo">
              <div className="estadisticas">
                <p><strong>Descargas:</strong> {articulo.descargas.toLocaleString('es-ES')}</p>
                <p><strong>Visualizaciones:</strong> {articulo.vistas.toLocaleString('es-ES')}</p>
              </div>
              <div className="botones-compartir">
                <button className="btn-descargar">Descargar PDF</button>
                <button className="btn-compartir">Compartir</button>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}

