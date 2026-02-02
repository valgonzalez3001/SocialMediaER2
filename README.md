# ECHO - Red Social con Detección de Bots

ECHO es una aplicación de red social desarrollada con React que incluye un innovador sistema de juego educativo para identificar bots y cuentas automatizadas. La aplicación combina funcionalidades tradicionales de redes sociales con un enfoque educativo sobre la desinformación digital.

## 🎮 Características Principales

### Red Social Completa
- **Feed de Usuario**: Visualización de publicaciones con ordenamiento por fecha y tendencias
- **Crear Publicaciones**: Soporte para texto, imágenes y videos
- **Interacciones**: Like, comentarios, edición y eliminación de posts
- **Perfil de Usuario**: Avatar personalizado, biografía, URL de portfolio
- **Sistema de Seguimiento**: Follow/Unfollow de usuarios
- **Feed de Exploración**: Descubre contenido de toda la red
- **Scroll Infinito**: Carga dinámica de contenido
- **Emojis y GIFs**: Enriquece tus publicaciones
- **Multiidioma**: Soporte para Español, Inglés, Finés y Serbio
- **Juego de Detección de Bots**: Panel educativo para identificar cuentas automatizadas

## 🛠️ Stack Tecnológico

- **Frontend**: React.js, HTML, CSS
- **Gestión de Estado**: Context API, React Hooks
- **Backend**: MockBee (Mock API)
- **Internacionalización**: i18next, react-i18next
- **Routing**: React Router v6
- **Notificaciones**: React Hot Toast
- **Build Tool**: Vite
- **Otras Librerías**: 
  - Axios para peticiones HTTP
  - React Icons para iconografía
  - React Player para reproducción de videos
  - Day.js para manejo de fechas
  - UUID para generación de IDs únicos

## 📦 Instalación

### Prerrequisitos
- Node.js (versión 18.3 o superior)
- npm o yarn

### Clonar el Repositorio

```bash
git clone https://github.com/valgonzalez3001/SocialMediaER2.git
cd SocialMediaER2
```

### Instalar Dependencias

```bash
npm install
```

## 🚀 Comandos de Ejecución

### Modo Desarrollo
Inicia el servidor de desarrollo con hot-reload:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Build de Producción
Genera los archivos optimizados para producción:

```bash
npm run build
```

### Preview de Build
Previsualiza la versión de producción localmente:

```bash
npm run preview
```

## 🎯 Cómo Usar el Juego de Detección de Bots

1. **Accede al Panel Admin**: Navega a la sección "Admin" desde el menú
2. **Observa los Usuarios**: Se presentarán 5 usuarios sospechosos
3. **Investiga**: Haz clic en cualquier usuario para ver su perfil completo
   - Examina sus publicaciones
   - Revisa su biografía y estadísticas
   - Busca patrones sospechosos
4. **Vuelve al Juego**: Usa el botón "Volver al Juego" para continuar
5. **Clasifica**: Marca cada usuario como "Bot" o "Humano"
6. **Envía tu Respuesta**: Una vez clasificados los 5, haz clic en "Enviar Clasificación"
7. **Revisa el Resultado**: 
   - ✅ Si aciertas todos: ¡Excelente! Juega de nuevo con usuarios diferentes
   - ❌ Si fallas: Intenta de nuevo con los mismos usuarios

### 💡 Pistas para Identificar Bots

Haz clic en el botón "Pista" para ver indicadores clave:


## 🌍 Idiomas Soportados

- 🇪🇸 Español
- 🇬🇧 English
- 🇫🇮 Suomi (Finés)
- 🇷🇸 Српски (Serbio)

El idioma se detecta automáticamente del navegador y puede cambiarse desde el selector de idioma.

## 📱 Responsive Design

La aplicación está completamente optimizada para:
- 💻 Desktop
- 📱 Tablets
- 📱 Móviles


## 📂 Estructura del Proyecto

```
react-social-media/
├── public/              # Archivos estáticos
├── src/
│   ├── backend/         # Mock API y datos
│   │   ├── controllers/ # Controladores de Posts, Users, Comments
│   │   ├── db/          # Base de datos mock (users, posts)
│   │   └── utils/       # Utilidades de autenticación
│   ├── components/      # Componentes reutilizables
│   │   ├── CreatePostForm/
│   │   ├── Discover/
│   │   ├── Header/
│   │   ├── Navbar/
│   │   ├── Post/
│   │   └── ...
│   ├── constants/       # Constantes y traducciones
│   │   └── langs/       # Archivos de idioma (es, en, fi, sr)
│   ├── contexts/        # Context API providers
│   ├── pages/           # Páginas principales
│   │   ├── Admin/       # Juego de detección de bots
│   │   ├── Home/
│   │   ├── Profile/
│   │   ├── Explore/
│   │   └── ...
│   ├── services/        # Servicios de API
│   ├── utils/           # Funciones utilitarias
│   └── Routes/          # Configuración de rutas
├── package.json
└── README.md
```

## 📄 Licencia

Este proyecto está bajo licencia MIT.

## 👥 Autores

- [@valgonzalez3001](https://github.com/valgonzalez3001) - Valeria Carolina González Alonso
- Desarrollado en el marco de la Beca GING



