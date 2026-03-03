# ECHO - Escape Room de Red Social

ECHO es una aplicación web educativa de tipo *escape room* que simula una red social. Los jugadores asumen el rol de un moderador de contenido que debe resolver cuatro retos progresivos relacionados con la desinformación digital y el uso de la inteligencia artificial.

---

## Descripción del Juego

El juego se ambienta en un escritorio de sistema operativo simulado. Al iniciarlo, el jugador realiza un *onboarding* (nombre, edad e idioma) y recibe instrucciones de su jefe a través de la app de mensajes. A partir de ahí, navega por la red social ECHO completando los retos en orden.

### Retos

| # | Nombre | Descripción |
|---|--------|-------------|
| 1 | **Cuentas Sospechosas** | Clasifica 5 cuentas (3 bots, 2 humanos) investigando sus perfiles. |
| 2 | **Contenido Generado por IA** | Verifica si un post fue generado por IA completando su texto palabra a palabra. |
| 3 | **Usos Incorrectos de IA** | Actúa como moderador: responde a publicaciones que difunden desinformación generada por IA. |
| 4 | **Community Note** | Publica una nota comunitaria final con los aprendizajes clave del escape room. |

El nivel de desinformación del sistema disminuye con cada reto superado y se muestra en el panel lateral de estadísticas en tiempo real.

---

## Escritorio Simulado

El escritorio incluye un drawer de apps con las siguientes aplicaciones:

| App | Descripción |
|-----|-------------|
| **Mensajes** | Recibe instrucciones del jefe antes y después de cada reto. Los mensajes se marcan automáticamente como leídos al abrirlos. |
| **Red Social (ECHO)** | App principal donde se desarrollan todos los retos. |
| **Archivos** | Explorador de archivos simulado con carpetas (Documentos, Imágenes) y una carpeta privada bloqueada (ECHO). |
| **Pistas** | Muestra pistas contextuales para el reto activo. Registra en xAPI cuando el jugador consulta una pista. |
---

## Integración xAPI

ECHO registra la actividad del jugador en un LRS (Learning Record Store) compatible con xAPI 1.0. Los *statements* cubren:

- Inicio y finalización del juego (`initialized`, `started`, `completed`)
- Lectura de mensajes del jefe (`looked at`)
- Clasificación de cuentas y respuestas (`answered`)
- Éxito/fracaso de cada reto (`succeeded`, `failed`, `completed`)
- Consulta de pistas (`asked`)
- Navegación por perfiles (`experienced`)
- Duración de cada reto (extensión `durationMs`)

La configuración del LRS se realiza mediante variables de entorno (ver sección de configuración). Si no están definidas, el juego funciona normalmente sin enviar *statements*.

---

## Idiomas Soportados

| Código | Idioma |
|--------|--------|
| `es` | Español |
| `en` | Inglés |
| `fi` | Finés |
| `sr` | Serbio |

El idioma se selecciona durante el *onboarding* y puede cambiarse desde el selector del header. Las traducciones se gestionan mediante **i18next** y se generan desde un archivo Excel con el script `update-i18n`.

---

## Stack Tecnológico

| Capa | Tecnología |
|------|-----------|
| Framework | React 18 + Vite |
| Routing | React Router v6 |
| Estado global | Context API + Hooks |
| Backend simulado | MirageJS (mock API in-memory) |
| Internacionalización | i18next + react-i18next |
| xAPI | Implementación propia sobre Fetch API |
| Notificaciones | react-hot-toast |
| Animaciones | react-awesome-reveal |
| Iconos | react-icons |
| Fechas | Day.js |
| IDs únicos | uuid |

---

## Instalación

### Prerrequisitos

- Node.js >= 18.3
- npm >= 9

### Clonar e instalar

```bash
git clone https://github.com/valgonzalez3001/SocialMediaER2.git
cd SocialMediaER2
npm install
```

### Variables de entorno

Crea un archivo `.env` en la raíz del proyecto (basándote en `example.env`):

```env
# LRS - xAPI (opcional, el juego funciona sin estas variables)
VITE_XAPI_ENDPOINT=https://tu-lrs.example.com/xapi
VITE_XAPI_KEY=tu_key_base64
VITE_XAPI_SECRET=tu_secret_base64
```

---

## Comandos

```bash
# Servidor de desarrollo con hot-reload
npm run dev

# Build de producción
npm run build

# Preview del build de producción
npm run preview

# Regenerar archivos de traducción desde el Excel
npm run update-i18n

# Exportar traducciones actuales a CSV
npm run update-i18n-inverse
```

La aplicación de desarrollo estará disponible en `http://localhost:5173`.

---

## Estructura del Proyecto

```
src/
+-- backend/            # Mock API con MirageJS (controllers, DB, utils)
   +-- db/             # Datos de usuarios y posts por idioma
+-- components/         # Componentes reutilizables
   +-- FilesApp/       # Explorador de archivos simulado
   +-- Header/         # Cabecera de la red social
   +-- HintsApp/       # App de pistas del escape room
   +-- MessagesApp/    # App de mensajes del jefe
   +-- Navbar/         # Navegación lateral
   +-- Post/           # Tarjeta de publicación
   +-- SocialMediaApp/ # Contenedor de la red social
   +-- StatsPanel/     # Panel lateral de estadísticas
   +-- Taskbar/        # Barra de tareas del escritorio
+-- constants/
   +-- langs/          # Traducciones (es, en, fi, sr)
+-- contexts/           # Providers de estado global
   +-- LoggedInUserProvider
   +-- MessagesProvider
   +-- OSProvider      # Estado del escritorio simulado
   +-- PostsProvider
   +-- StatsProvider   # Progreso y puntuación del jugador
   +-- UserProvider
   +-- XAPIProvider    # Integración xAPI
+-- pages/
   +-- Admin/          # Reto 1: Detección de bots
   +-- AIContent/      # Reto 2: Verificación de contenido IA
   +-- AIIncorrectUses/# Reto 3: Usos incorrectos de IA
   +-- CommunityNote/  # Reto 4: Community Note
   +-- Desktop/        # Escritorio simulado
   +-- Home/           # Feed principal
   +-- Profile/        # Perfil de usuario
   +-- PostDetail/     # Detalle de publicación
+-- scripts/
    +-- download_from_excel.mjs  # Genera traducciones desde Excel
    +-- js_to_csv.mjs            # Exporta traducciones a CSV
```

---

## Gestión de Traducciones

Las traducciones se almacenan en `src/constants/langs/` (un archivo por idioma). Para actualizar desde el Excel maestro:

```bash
npm run update-i18n
```

Para exportar el estado actual a CSV:

```bash
npm run update-i18n-inverse
```

---

## Tests

```bash
npm test
```

---

## Licencia

Proyecto desarrollado en el marco del proyecto **ENDGAME**. Uso académico e investigador.
