'use client';

import { Revista, obtenerNombreCategoria, formatearFecha } from '../data/revistas';

interface ArticulosListProps {
  revista: Revista;
  onVolver: () => void;
}

export default function ArticulosList({ revista, onVolver }: ArticulosListProps) {
  return (
    <section id="articulos" className="articulosSection">
      <div className="container">
        <button onClick={onVolver} className="btnVolver">
          ← Volver a Revistas
        </button>
        <div className="detalleRevista">
          <h2>{revista.nombre}</h2>
          <p><strong>Categoría:</strong> {obtenerNombreCategoria(revista.categoria)}</p>
          <p><strong>Último número:</strong> {revista.ultimoNumero}</p>
          <p><strong>Total de artículos:</strong> {revista.articulos.length}</p>
          <p style={{ marginTop: '1rem' }}>{revista.descripcion}</p>
        </div>
        <div className="articulosList">
          {revista.articulos.map((articulo) => (
            <div key={articulo.id} className="articuloItem">
              <h3>{articulo.titulo}</h3>
              <p className="autores">Por: {articulo.autores.join(', ')}</p>
              <p className="resumen">{articulo.resumen}</p>
              <div className="meta">
                <span>{formatearFecha(articulo.fecha)}</span>
                <span>{articulo.descargas.toLocaleString('es-ES')} descargas</span>
                <span>{articulo.vistas.toLocaleString('es-ES')} vistas</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

