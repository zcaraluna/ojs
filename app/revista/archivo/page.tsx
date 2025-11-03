import { Metadata } from 'next';
import { revistasData, Articulo } from '../../data/revistas';
import { revistaInfo } from '../../data/revista-info';
import Link from 'next/link';
import '../styles.css';

export const metadata: Metadata = {
  title: `Archivo - ${revistaInfo.nombre}`,
  description: 'Números anteriores y archivo completo de artículos publicados',
};

export default function ArchivoPage() {
  const revista = revistasData.find(r => r.id === revistaInfo.id);

  // Organizar artículos por año (simulado)
  const articulosPorAno: Record<number, Articulo[]> = {};
  
  if (revista) {
    revista.articulos.forEach((articulo) => {
      const ano = new Date(articulo.fecha).getFullYear();
      if (!articulosPorAno[ano]) {
        articulosPorAno[ano] = [];
      }
      articulosPorAno[ano].push(articulo);
    });
  }

  return (
    <main className="revista-main">
        <section className="page-header">
          <div className="container">
            <h1>Archivo - Números Anteriores</h1>
            <p className="subtitle">Acceso a todos los artículos publicados, organizados por año y volumen</p>
          </div>
        </section>

        <section className="page-content">
          <div className="container">
            {Object.entries(articulosPorAno).sort(([a], [b]) => Number(b) - Number(a)).map(([ano, articulos]) => (
              <div key={ano} className="ano-section">
                <h2>Año {ano}</h2>
                <div className="articulos-lista">
                  {articulos.map((articulo) => (
                    <div key={articulo.id} className="articulo-archivo-item">
                      <Link href={`/revista/articulo/${articulo.id}`}>
                        <h3>{articulo.titulo}</h3>
                      </Link>
                      <p className="autores">{articulo.autores.join(', ')}</p>
                      <div className="meta-info">
                        <span>{new Date(articulo.fecha).toLocaleDateString('es-ES', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                        <span>{articulo.descargas} descargas</span>
                        <span>{articulo.vistas} vistas</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
  );
}

