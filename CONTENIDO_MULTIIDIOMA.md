# Contenido Multiidioma para Usuarios y Posts

La aplicación soporta contenido dinámico en múltiples idiomas para biografías de usuarios y contenido de posts.

## Cómo Funciona

### Estructura de Datos

El contenido puede ser definido de dos formas:

#### 1. Texto simple (Retrocompatible)
```javascript
{
  bio: "Simple text that won't change with language"
}
```

#### 2. Objeto multiidioma
```javascript
{
  bio: {
    en: "English version",
    es: "Versión en español",
    fi: "Suomeksi versio",
    sr: "Српска верзија"
  }
}
```

### Campos que soportan multiidioma

**Usuarios:**
- `bio`: Biografía del usuario

**Posts:**
- `content`: Contenido del post

**Comentarios:**
- `text`: Texto del comentario

## Ejemplos de Uso

### Usuario con biografía multiidioma

```javascript
{
  _id: uuid(),
  firstName: "Katherine",
  lastName: "Brundage",
  username: "Katherine",
  bio: {
    en: "Makeup enthusiast with a passion for enhancing natural beauty. 💄🎨 #MakeupLover",
    es: "Entusiasta del maquillaje con pasión por realzar la belleza natural. 💄🎨 #AmanteDelMaquillaje",
    fi: "Meikkauksen ystävä, jolla on intohimo luonnollisen kauneuden korostamiseen. 💄🎨 #MeikkiRakastaja",
    sr: "Entuzijasta šminke sa strašću za unapređenje prirodne lepote. 💄🎨 #LjubiteljŠminke"
  }
}
```

### Post con contenido multiidioma

```javascript
{
  _id: uuid(),
  content: {
    en: "A Purrfect Connection.",
    es: "Una Conexión Purrfecta.",
    fi: "Täydellinen Yhteys.",
    sr: "Savršena Veza."
  },
  mediaUrl: "...",
  // resto de campos
}
```

## Agregar Contenido Nuevo

### Paso 1: Editar el archivo de datos

Para usuarios: edita `src/backend/db/users.js`
Para posts: edita `src/backend/db/posts.js`

### Paso 2: Formato del contenido

```javascript
// Para un nuevo usuario
{
  // ... otros campos
  bio: {
    en: "Your English bio",
    es: "Tu biografía en español",
    fi: "Suomalainen elämäkertasi",
    sr: "Tvoja biografija na srpskom"
  }
}

// Para un nuevo post
{
  // ... otros campos
  content: {
    en: "Your English post",
    es: "Tu publicación en español",
    fi: "Suomalainen julkaisusi",
    sr: "Tvoja objava na srpskom"
  }
}
```

### Paso 3: El sistema automáticamente muestra el idioma correcto

Los componentes usan el helper `getLocalizedContent()` que:
1. Detecta el idioma actual del usuario
2. Muestra el contenido en ese idioma
3. Si no existe traducción, muestra en inglés como fallback
4. Si tampoco hay en inglés, muestra el primer idioma disponible

## Lógica de Fallback

El sistema busca el contenido en este orden:

1. **Idioma actual del usuario** (ej: 'es')
2. **Inglés** (fallback por defecto: 'en')
3. **Primer idioma disponible** (cualquiera)
4. **String vacío** (si no hay nada)

Ejemplo:
```javascript
// Usuario con idioma español (es)
// Contenido disponible solo en inglés y finlandés

content: {
  en: "Hello world",
  fi: "Hei maailma"
}

// Resultado: "Hello world" (fallback a inglés)
```

## Retrocompatibilidad

El sistema es **100% retrocompatible**. Si un usuario o post tiene contenido en formato string simple, seguirá funcionando:

```javascript
// ✅ Esto sigue funcionando
bio: "Simple text"

// ✅ Esto también funciona y es preferido
bio: {
  en: "English text",
  es: "Texto español"
}
```

## Helper Disponible

### `getLocalizedContent(content, currentLang)`

**Parámetros:**
- `content`: String o objeto con claves de idioma
- `currentLang`: Código de idioma actual ('en', 'es', 'fi', 'sr')

**Retorna:** String con el contenido localizado

**Ejemplo de uso:**
```javascript
import { useTranslation } from 'react-i18next';
import { getLocalizedContent } from '../utils/i18nHelpers';

function MyComponent() {
  const { i18n } = useTranslation();
  
  return (
    <p>{getLocalizedContent(post.content, i18n.language)}</p>
  );
}
```

## Componentes Actualizados

Los siguientes componentes ya soportan contenido multiidioma:

- ✅ **Post** - Muestra contenido de posts
- ✅ **UserInfo** - Muestra biografía de usuarios
- ✅ **Comment** - Muestra texto de comentarios

## Ejemplo de Comentario Multiidioma

```javascript
{
  _id: uuid(),
  firstName: "Neha",
  lastName: "Dung",
  username: "Neha",
  text: {
    en: "Aww, this is the sweetest picture ever! The bond between humans and cats is truly magical.",
    es: "¡Aww, esta es la imagen más dulce de todas! El vínculo entre humanos y gatos es verdaderamente mágico.",
    fi: "Voi, tämä on suloisin kuva ikinä! Side ihmisten ja kissojen välillä on todella maaginen.",
    sr: "Aww, ovo je najslađa slika ikada! Veza između ljudi i mačaka je zaista magična."
  },
  createdAt: new Date("January 02 2023 09:09:09"),
}
```

## Buenas Prácticas

1. **Siempre incluye inglés**: Úsalo como idioma base y fallback
2. **Mantén consistencia**: Si un post es multiidioma, todos deberían serlo
3. **Emojis**: Son universales, úsalos en todos los idiomas
4. **Hashtags**: Pueden adaptarse o mantenerse en inglés según el contexto
5. **Longitud similar**: Intenta que las traducciones tengan longitud similar

## Futuras Mejoras

- [ ] UI para que usuarios creen contenido multiidioma
- [ ] Detección automática de idioma del contenido
- [ ] Traducción automática con API
