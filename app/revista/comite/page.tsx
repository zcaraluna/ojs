import { Metadata } from 'next';
import { revistaInfo } from '../../data/revista-info';
import '../styles.css';

export const metadata: Metadata = {
  title: `Comité Editorial - ${revistaInfo.nombre}`,
  description: 'Comité editorial y científico de la revista',
};

export default function ComitePage() {
  return (
    <main className="revista-main">
        <section className="page-header">
          <div className="container">
            <h1>Comité Editorial y Científico</h1>
          </div>
        </section>

        <section className="page-content">
          <div className="container">
            <div className="content-card">
              <p className="intro-text">
                El comité editorial está compuesto por reconocidos expertos en las áreas temáticas de la revista, 
                garantizando la calidad y rigurosidad del proceso de evaluación y publicación.
              </p>
            </div>

            <div className="content-card">
              <h2>Miembros del Comité Editorial</h2>
              <div className="comite-grid">
                {revistaInfo.comiteEditorial.map((miembro, idx) => (
                  <div key={idx} className="miembro-card">
                    <h3>{miembro.nombre}</h3>
                    <p className="afiliacion">{miembro.afiliacion}</p>
                    <p className="pais">{miembro.pais}</p>
                    {miembro.rol && (
                      <p className="rol">{miembro.rol}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}

