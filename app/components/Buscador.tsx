'use client';

import { useState } from 'react';
import { revistasData } from '../data/revistas';
import { articulosCompletos } from '../data/articulos-completos';
import Link from 'next/link';

export default function Buscador() {
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [resultados, setResultados] = useState<typeof articulosCompletos>([]);

  const buscar = (termino: string) => {
    if (!termino.trim()) {
      setResultados([]);
      return;
    }

    const terminoLower = termino.toLowerCase();
    const encontrados = articulosCompletos.filter(articulo => {
      const tituloMatch = articulo.titulo.toLowerCase().includes(terminoLower);
      const resumenMatch = articulo.resumen.toLowerCase().includes(terminoLower);
      const autorMatch = articulo.autoresCompletos.some(autor => 
        autor.nombre.toLowerCase().includes(terminoLower) ||
        autor.afiliacion.toLowerCase().includes(terminoLower)
      );
      const palabrasClaveMatch = articulo.palabrasClave.some(pc => 
        pc.toLowerCase().includes(terminoLower)
      );
      
      return tituloMatch || resumenMatch || autorMatch || palabrasClaveMatch;
    });

    setResultados(encontrados);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    buscar(terminoBusqueda);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setTerminoBusqueda(valor);
    buscar(valor);
  };

  return (
    <div className="buscador-container">
      <h2>Buscar Artículos</h2>
      <form onSubmit={handleSubmit} className="buscador-form">
        <input
          type="text"
          value={terminoBusqueda}
          onChange={handleChange}
          placeholder="Buscar por título, autor, palabras clave..."
          className="buscador-input"
        />
        <button type="submit" className="buscador-btn">Buscar</button>
      </form>

      {resultados.length > 0 && (
        <div className="resultados-busqueda">
          <h3>Resultados de búsqueda ({resultados.length})</h3>
          <div className="resultados-lista">
            {resultados.map((articulo) => (
              <Link key={articulo.id} href={`/revista/articulo/${articulo.id}`} className="resultado-item">
                <h4>{articulo.titulo}</h4>
                <p className="resultado-autores">{articulo.autoresCompletos.map(a => a.nombre).join(', ')}</p>
                <p className="resultado-resumen">{articulo.resumen.substring(0, 200)}...</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {terminoBusqueda && resultados.length === 0 && (
        <div className="sin-resultados">
          <p>No se encontraron artículos que coincidan con tu búsqueda.</p>
        </div>
      )}
    </div>
  );
}

