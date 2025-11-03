// Datos de ejemplo de revistas y artículos
const revistasData = [
    {
        id: 1,
        nombre: "Revista de Ciencias Computacionales",
        categoria: "tecnologia",
        descripcion: "Publicación dedicada a la investigación en ciencias de la computación, inteligencia artificial y sistemas de información.",
        ultimoNumero: "Vol. 12, No. 3",
        articulos: [
            {
                id: 1,
                titulo: "Algoritmos de Machine Learning para Análisis de Datos",
                autores: ["Dr. Juan Pérez", "Dra. María González"],
                resumen: "Este artículo presenta una revisión de algoritmos de machine learning aplicados al análisis de grandes volúmenes de datos en entornos académicos.",
                fecha: "2024-03-15",
                descargas: 234,
                vistas: 1456
            },
            {
                id: 2,
                titulo: "Ciberseguridad en Sistemas Distribuidos",
                autores: ["Dr. Carlos Martínez"],
                resumen: "Análisis de las principales amenazas de seguridad en sistemas distribuidos modernos y estrategias de mitigación.",
                fecha: "2024-02-28",
                descargas: 189,
                vistas: 987
            }
        ]
    },
    {
        id: 2,
        nombre: "Revista de Humanidades Digitales",
        categoria: "humanidades",
        descripcion: "Explora la intersección entre las humanidades y las tecnologías digitales en la investigación académica contemporánea.",
        ultimoNumero: "Vol. 8, No. 2",
        articulos: [
            {
                id: 3,
                titulo: "Digitalización del Patrimonio Cultural",
                autores: ["Dra. Ana Rodríguez", "Dr. Luis Fernández"],
                resumen: "Estudio sobre metodologías y herramientas para la preservación digital del patrimonio cultural y su accesibilidad.",
                fecha: "2024-01-20",
                descargas: 156,
                vistas: 723
            }
        ]
    },
    {
        id: 3,
        nombre: "Journal of Applied Sciences",
        categoria: "ciencias",
        descripcion: "Revista multidisciplinaria que publica investigaciones aplicadas en diversas áreas de las ciencias naturales.",
        ultimoNumero: "Vol. 15, No. 4",
        articulos: [
            {
                id: 4,
                titulo: "Efectos del Cambio Climático en Ecosistemas Marinos",
                autores: ["Dra. Laura Sánchez", "Dr. Pedro Torres", "Dra. Carmen López"],
                resumen: "Investigación sobre los impactos observados del cambio climático en ecosistemas marinos del Pacífico Sur.",
                fecha: "2024-04-10",
                descargas: 312,
                vistas: 1890
            },
            {
                id: 5,
                titulo: "Nuevos Materiales para Energía Renovable",
                autores: ["Dr. Miguel Herrera"],
                resumen: "Desarrollo de materiales avanzados para mejorar la eficiencia de sistemas de energía solar y eólica.",
                fecha: "2024-03-25",
                descargas: 278,
                vistas: 1654
            }
        ]
    },
    {
        id: 4,
        nombre: "Revista de Ingeniería y Tecnología",
        categoria: "tecnologia",
        descripcion: "Publicación técnica sobre avances en ingeniería, innovación tecnológica y desarrollo de soluciones prácticas.",
        ultimoNumero: "Vol. 10, No. 1",
        articulos: [
            {
                id: 6,
                titulo: "Diseño de Redes de Sensores IoT",
                autores: ["Dr. Roberto Díaz"],
                resumen: "Metodología para el diseño eficiente de redes de sensores inalámbricos para aplicaciones de Internet de las Cosas.",
                fecha: "2024-02-15",
                descargas: 201,
                vistas: 1123
            }
        ]
    }
];

let revistasFiltradas = [...revistasData];
let revistaActual = null;

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    renderizarRevistas();
    
    // Filtros
    document.getElementById('buscarRevista').addEventListener('input', filtrarRevistas);
    document.getElementById('filtroCategoria').addEventListener('change', filtrarRevistas);
    
    // Navegación
    document.getElementById('volverRevistas').addEventListener('click', volverARevistas);
    
    // Smooth scroll para navegación
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Renderizar lista de revistas
function renderizarRevistas() {
    const container = document.getElementById('listaRevistas');
    
    if (revistasFiltradas.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">No se encontraron revistas que coincidan con los criterios de búsqueda.</p>';
        return;
    }
    
    container.innerHTML = revistasFiltradas.map(revista => `
        <div class="revista-card" data-id="${revista.id}">
            <h3>${revista.nombre}</h3>
            <span class="categoria">${obtenerNombreCategoria(revista.categoria)}</span>
            <p class="descripcion">${revista.descripcion}</p>
            <div class="info">
                <span>${revista.articulos.length} artículos</span>
                <span>${revista.ultimoNumero}</span>
            </div>
        </div>
    `).join('');
    
    // Agregar event listeners a las tarjetas
    container.querySelectorAll('.revista-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = parseInt(card.dataset.id);
            mostrarArticulos(id);
        });
    });
}

// Obtener nombre de categoría
function obtenerNombreCategoria(categoria) {
    const categorias = {
        'ciencias': 'Ciencias',
        'humanidades': 'Humanidades',
        'tecnologia': 'Tecnología'
    };
    return categorias[categoria] || categoria;
}

// Filtrar revistas
function filtrarRevistas() {
    const busqueda = document.getElementById('buscarRevista').value.toLowerCase();
    const categoria = document.getElementById('filtroCategoria').value;
    
    revistasFiltradas = revistasData.filter(revista => {
        const coincideBusqueda = revista.nombre.toLowerCase().includes(busqueda) ||
                                revista.descripcion.toLowerCase().includes(busqueda);
        const coincideCategoria = !categoria || revista.categoria === categoria;
        return coincideBusqueda && coincideCategoria;
    });
    
    renderizarRevistas();
}

// Mostrar artículos de una revista
function mostrarArticulos(revistaId) {
    revistaActual = revistasData.find(r => r.id === revistaId);
    
    if (!revistaActual) return;
    
    // Ocultar sección de revistas y mostrar sección de artículos
    document.getElementById('revistas').style.display = 'none';
    document.getElementById('articulos').style.display = 'block';
    
    // Renderizar detalle de revista
    const detalle = document.getElementById('detalleRevista');
    detalle.innerHTML = `
        <h2>${revistaActual.nombre}</h2>
        <p><strong>Categoría:</strong> ${obtenerNombreCategoria(revistaActual.categoria)}</p>
        <p><strong>Último número:</strong> ${revistaActual.ultimoNumero}</p>
        <p><strong>Total de artículos:</strong> ${revistaActual.articulos.length}</p>
        <p style="margin-top: 1rem;">${revistaActual.descripcion}</p>
    `;
    
    // Renderizar artículos
    const articulosContainer = document.getElementById('listaArticulos');
    articulosContainer.innerHTML = revistaActual.articulos.map(articulo => `
        <div class="articulo-item">
            <h3>${articulo.titulo}</h3>
            <p class="autores">Por: ${articulo.autores.join(', ')}</p>
            <p class="resumen">${articulo.resumen}</p>
            <div class="meta">
                <span>${formatearFecha(articulo.fecha)}</span>
                <span>${articulo.descargas} descargas</span>
                <span>${articulo.vistas} vistas</span>
            </div>
        </div>
    `).join('');
    
    // Scroll al inicio de la sección
    document.getElementById('articulos').scrollIntoView({ behavior: 'smooth' });
}

// Volver a la lista de revistas
function volverARevistas() {
    document.getElementById('revistas').style.display = 'block';
    document.getElementById('articulos').style.display = 'none';
    revistaActual = null;
    document.getElementById('revistas').scrollIntoView({ behavior: 'smooth' });
}

// Formatear fecha
function formatearFecha(fecha) {
    const fechaObj = new Date(fecha);
    return fechaObj.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

