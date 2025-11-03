'use client';

import { useState, useMemo } from 'react';
import { Revista, obtenerNombreCategoria } from '../data/revistas';

interface RevistasGridProps {
  revistas: Revista[];
  onSelectRevista: (revista: Revista) => void;
}

export default function RevistasGrid({ revistas, onSelectRevista }: RevistasGridProps) {
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState('');

  const revistasFiltradas = useMemo(() => {
    return revistas.filter(revista => {
      const coincideBusqueda = revista.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        revista.descripcion.toLowerCase().includes(busqueda.toLowerCase());
      const coincideCategoria = !categoria || revista.categoria === categoria;
      return coincideBusqueda && coincideCategoria;
    });
  }, [revistas, busqueda, categoria]);

  return (
    <section id="revistas" className="revistasSection">
      <div className="container">
        <h2>Revistas Disponibles</h2>
        <div className="filtros">
          <input
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar revista..."
            className="searchInput"
          />
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="filtroSelect"
          >
            <option value="">Todas las categorías</option>
            <option value="ciencias">Ciencias</option>
            <option value="humanidades">Humanidades</option>
            <option value="tecnologia">Tecnología</option>
          </select>
        </div>
        <div className="revistasGrid">
          {revistasFiltradas.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#666', padding: '2rem', gridColumn: '1 / -1' }}>
              No se encontraron revistas que coincidan con los criterios de búsqueda.
            </p>
          ) : (
            revistasFiltradas.map((revista) => (
              <div
                key={revista.id}
                className="revistaCard"
                onClick={() => onSelectRevista(revista)}
              >
                <h3>{revista.nombre}</h3>
                <span className="categoria">{obtenerNombreCategoria(revista.categoria)}</span>
                <p className="descripcion">{revista.descripcion}</p>
                <div className="info">
                  <span>{revista.articulos.length} artículos</span>
                  <span>{revista.ultimoNumero}</span>
                </div>
                <div className="ver-revista-link">
                  Ver revista →
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

