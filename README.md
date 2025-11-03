# OJS - Sistema de Revistas Académicas

Esta es una demostración básica de cómo funciona OJS (Open Journal Systems). La página muestra una interfaz simple para navegar por revistas y sus artículos.

## Estructura del Proyecto

- `index.html` - Página principal
- `styles.css` - Estilos de la interfaz
- `app.js` - Lógica y datos de ejemplo
- `README.md` - Este archivo

## Cómo Usar

1. Abre `index.html` en tu navegador
2. Navega por las revistas disponibles
3. Haz clic en una revista para ver sus artículos
4. Usa el buscador y filtros para encontrar revistas específicas

## Implementar OJS Real

Para implementar Open Journal Systems real en tu servidor web, necesitas:

### Requisitos Previos

- **Servidor web** con PHP 7.3 o superior
- **Base de datos**: MySQL 5.7+ o PostgreSQL 9.6+
- **Servidor web**: Apache o Nginx
- **Extensiones PHP**: mysqli/pgsql, mbstring, gd, curl, xml

### Pasos de Instalación

1. **Descargar OJS**
   - Visita: https://pkp.sfu.ca/ojs/
   - Descarga la última versión estable

2. **Subir archivos**
   - Extrae el archivo descargado
   - Sube el contenido a tu servidor (vía FTP/SFTP o panel de control)

3. **Configurar permisos**
   - Los directorios `public/`, `cache/`, `cache/t_cache/`, `cache/t_compile/` y `cache/_db` deben ser escribibles (permisos 755 o 775)

4. **Instalación vía web**
   - Accede a la URL donde subiste OJS (ej: `https://tudominio.com/ojs`)
   - Sigue el asistente de instalación:
     - Configura la conexión a la base de datos
     - Establece idiomas
     - Crea cuenta de administrador

5. **Configuración inicial**
   - Inicia sesión como administrador
   - Crea tu primera revista
   - Configura políticas editoriales
   - Personaliza el diseño

### Integración en Tu Página Web

OJS puede integrarse de varias formas:

1. **Instalación independiente**: OJS en un subdirectorio (ej: `/ojs`) y enlaces desde tu sitio principal

2. **Integración temática**: Personalizar el tema de OJS para que coincida con el diseño de tu sitio

3. **API REST**: OJS 3.x incluye una API REST que permite integrar datos de revistas en tu sitio web mediante llamadas API

4. **Widgets/iframe**: Embebed contenido de OJS en páginas de tu sitio mediante iframes o widgets

### Recursos Adicionales

- **Documentación oficial**: https://docs.pkp.sfu.ca/
- **Comunidad OJS**: https://forum.pkp.sfu.ca/
- **Traducciones**: https://github.com/pkp/pkp-lib

## Notas

Esta demostración es una versión simplificada que muestra el concepto básico de OJS. El sistema real es mucho más completo e incluye:

- Gestión de usuarios (autores, editores, revisores)
- Sistema de revisión por pares
- Publicación de números y volúmenes
- Gestión de archivos y documentos
- Estadísticas y métricas
- Y mucho más

