# OJS - Sistema de Revistas Académicas

Aplicación Next.js 16.0.1 para demostración de cómo funciona OJS (Open Journal Systems). Plataforma moderna para navegar por revistas académicas y sus artículos.

## Tecnologías

- **Next.js 16.0.1** - Framework React con App Router
- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **PM2** - Gestor de procesos para producción

## Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar en desarrollo:
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:6369`

3. Compilar para producción:
```bash
npm run build
```

4. Ejecutar en producción:
```bash
npm start
```

## Gestión con PM2

### Iniciar aplicación con PM2:
```bash
pm2 start ecosystem.config.js
```

### Comandos PM2 útiles:
```bash
# Ver estado
pm2 status

# Ver logs
pm2 logs ojs-nextjs

# Reiniciar
pm2 restart ojs-nextjs

# Detener
pm2 stop ojs-nextjs

# Eliminar del listado
pm2 delete ojs-nextjs

# Configurar inicio automático
pm2 startup
pm2 save
```

## Configuración

- **Puerto**: 6369 (configurado en `package.json` y `ecosystem.config.js`)
- **Puerto de desarrollo**: 6369
- **Puerto de producción**: 6369

## Estructura del Proyecto

```
ojs/
├── app/
│   ├── components/      # Componentes React
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Footer.tsx
│   │   ├── RevistasGrid.tsx
│   │   └── ArticulosList.tsx
│   ├── data/           # Datos y utilidades
│   │   └── revistas.ts
│   ├── styles/         # Estilos globales
│   │   └── globals.css
│   ├── layout.tsx      # Layout principal
│   └── page.tsx        # Página principal
├── ecosystem.config.js # Configuración PM2
├── next.config.js      # Configuración Next.js
├── package.json
└── tsconfig.json
```

## Funcionalidades

- Navegación por revistas académicas
- Búsqueda y filtrado por categoría
- Visualización de artículos por revista
- Diseño responsivo y moderno
- Interfaz minimalista

## Implementar OJS Real

Para implementar Open Journal Systems real en tu servidor web:

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
   - Accede a la URL donde subiste OJS
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

1. **Instalación independiente**: OJS en un subdirectorio y enlaces desde tu sitio principal

2. **Integración temática**: Personalizar el tema de OJS para que coincida con el diseño de tu sitio

3. **API REST**: OJS 3.x incluye una API REST que permite integrar datos de revistas en tu sitio web mediante llamadas API

4. **Widgets/iframe**: Embebed contenido de OJS en páginas de tu sitio mediante iframes o widgets

## Recursos Adicionales

- **Documentación oficial OJS**: https://docs.pkp.sfu.ca/
- **Comunidad OJS**: https://forum.pkp.sfu.ca/
- **Traducciones**: https://github.com/pkp/pkp-lib
- **Documentación Next.js**: https://nextjs.org/docs

## Desarrollo

Este proyecto utiliza:
- **App Router** de Next.js 13+ para routing
- **Server Components** y **Client Components** según necesidad
- **TypeScript** para type safety
- **CSS Modules** para estilos globales

## Notas

Esta demostración es una versión simplificada que muestra el concepto básico de OJS. El sistema real es mucho más completo e incluye:

- Gestión de usuarios (autores, editores, revisores)
- Sistema de revisión por pares
- Publicación de números y volúmenes
- Gestión de archivos y documentos
- Estadísticas y métricas
- Y mucho más
