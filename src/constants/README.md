# Internacionalización (i18n)

Esta aplicación soporta 4 idiomas:
- 🇬🇧 Inglés (en)
- 🇪🇸 Español (es)
- 🇫🇮 Finlandés (fi)
- 🇷🇸 Serbio (sr)

## Estructura

```
src/
├── i18n.js                    # Configuración de i18next
└── constants/
    └── langs/
        ├── en.js              # Traducciones en inglés
        ├── es.js              # Traducciones en español
        ├── fi.js              # Traducciones en finlandés
        └── sr.js              # Traducciones en serbio
```

## Uso

### En componentes

```jsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('nav.home')}</h1>
      <p>{t('home.noPosts')}</p>
    </div>
  );
}
```

### Cambiar idioma

Los usuarios pueden cambiar el idioma usando el selector de idioma en el header de la aplicación.

El idioma seleccionado se guarda automáticamente en `localStorage` y se detecta automáticamente en la próxima visita.

### Detección automática

La aplicación intenta detectar el idioma del usuario en este orden:
1. Parámetro de URL (`?lang=es`)
2. LocalStorage (`i18nextLng`)
3. Idioma del navegador

## Agregar nuevas traducciones

1. Abre el archivo del idioma correspondiente en `src/constants/langs/`
2. Agrega la nueva clave de traducción siguiendo la estructura existente:

```javascript
export const es = {
  nav: {
    home: "Inicio",
    newKey: "Nueva traducción"  // ← Agregar aquí
  }
};
```

3. Repite para todos los idiomas
4. Usa la traducción en tu componente: `{t('nav.newKey')}`

## Agregar un nuevo idioma

1. Crea un nuevo archivo en `src/constants/langs/` (ej: `de.js` para alemán)
2. Copia la estructura de otro archivo de idioma
3. Traduce todos los textos
4. Importa el nuevo idioma en `src/i18n.js`:

```javascript
import { de } from './constants/langs/de';
```

5. Agrégalo a la configuración:

```javascript
supportedLngs: ['en', 'es', 'sr', 'fi', 'de'], // ← Agregar aquí

resources: {
  // ... otros idiomas
  de: {
    translation: de
  }
}
```

6. Actualiza el componente `LanguageSelector.jsx` con el nuevo idioma:

```javascript
const languages = [
  // ... otros idiomas
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
];
```

## Estructura de traducciones

Las traducciones están organizadas por secciones:

- `nav`: Navegación principal
- `header`: Encabezado de la aplicación  
- `createPost`: Formulario de creación de posts
- `post`: Componente de post
- `home`: Página de inicio
- `profile`: Página de perfil
- `explore`: Página de exploración
- `admin`: Panel de administración
- `editPost`: Formulario de edición
- `comments`: Comentarios
- `time`: Formatos de tiempo
- `likes`: Likes/Me gusta
- `errors`: Mensajes de error

## Notas

- Todos los textos visibles de la aplicación deben estar traducidos
- Mantén la consistencia en la estructura entre todos los archivos de idioma
- Usa claves descriptivas para las traducciones
- No uses HTML dentro de las traducciones, usa React para eso
