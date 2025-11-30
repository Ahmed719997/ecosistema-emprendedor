# Ecosistemas de Emprendimiento e Innovación

Proyecto web moderno desarrollado con **Astro** para presentar contenido educativo sobre ecosistemas de emprendimiento e innovación.

## 🚀 Características

- ✨ **Diseño Moderno**: Interfaz premium con gradientes, animaciones y efectos visuales
- 🎨 **Sistema de Diseño**: Variables CSS organizadas, componentes reutilizables
- 📱 **Totalmente Responsivo**: Optimizado para todos los dispositivos
- ⚡ **Alto Rendimiento**: Sitio estático generado con Astro
- 🎯 **SEO Optimizado**: Meta tags, estructura semántica HTML5
- 🔧 **Componentes Modulares**: Header, Footer, Hero, Cards reutilizables
- 📝 **Formulario de Contacto**: Interfaz moderna y funcional
- 🎭 **Iconos Modernos**: Lucide Icons en lugar de emojis

## 🛠️ Tecnologías

- **Astro 4.x** - Framework estático moderno
- **TypeScript** - Tipado estricto
- **Lucide Icons** - Iconos SVG modernos
- **CSS Moderno** - Variables CSS, Grid, Flexbox
- **Google Fonts** - Inter & Outfit

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## 🎨 Paleta de Colores

- **Primary**: `#5933AC` (Púrpura)
- **Primary Light**: `#7C5FC4`
- **Accent Green**: `#2ECC71`
- **Accent Blue**: `#3498DB`
- **Accent Yellow**: `#F1C40F`
- **Dark**: `#2C3E50`
- **Light**: `#ECF0F1`

## 📁 Estructura del Proyecto

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── contacto.astro
│   │   └── [otras páginas]
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```


## 📝 Páginas Disponibles

- `/` - Página principal con Hero y grid de secciones
- `/contacto` - Formulario de contacto
- `/fundamentos` - Fundamentos teóricos (por crear)
- `/modelos` - Modelos de ecosistemas (por crear)
- `/metodologias` - Metodologías de medición (por crear)
- `/componentes` - Componentes y pilares (por crear)
- `/casos` - Casos de estudio (por crear)
- `/actores` - Actores del ecosistema (por crear)
- `/herramientas` - Herramientas prácticas (por crear)
- `/innovacion` - Innovación y tecnología (por crear)
- `/recursos` - Biblioteca de recursos (por crear)

## 🎯 Próximos Pasos

1. Crear las páginas restantes basándote en el contenido de los HTMLs originales
2. Agregar imágenes optimizadas a la carpeta `public/`
3. Configurar dominio personalizado en Cloudflare Pages
4. Implementar analytics (opcional)
5. Agregar sitemap.xml para SEO

## 👨‍💻 Desarrollo

### Crear una nueva página

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="Título de la Página">
  <section class="section">
    <div class="container">
      <h1>Tu contenido aquí</h1>
    </div>
  </section>
</Layout>
```

### Usar componentes

```astro
---
import Card from '../components/Card.astro';
import { Icon } from 'lucide-astro';
---

<Card
  icon={Icon}
  title="Título"
  description="Descripción"
  href="/ruta"
  variant="primary"
/>
```

## License

### Code

The **source code** of this project is licensed under the **MIT License**.  
See the [`LICENSE`](./LICENSE) file for details.

### Educational content

The **educational content** (texts, explanations, case studies, diagrams, etc.)
is licensed under **Creative Commons Attribution 4.0 International (CC BY 4.0)**.  
See [`LICENSE-CONTENT.md`](./LICENSE-CONTENT.md) for details.


## 🤝 Créditos

Diseñado y desarrollado por [AGO Lab](https://ago.cl)
