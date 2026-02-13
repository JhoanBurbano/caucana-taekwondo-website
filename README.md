# Academia Caucana de Taekwondo ITF - Website

Sitio web oficial de la Academia Caucana de Taekwondo ITF en Popayán, Cauca.

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

# Verificar tipos TypeScript
npm run type-check
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── features/       # Funcionalidades específicas
│   ├── layout/         # Componentes de estructura
│   ├── sections/       # Secciones de contenido
│   └── ui/             # Componentes UI base
├── hooks/               # Hooks personalizados
├── lib/                 # Lógica de negocio
│   ├── constants/       # Constantes y configuración
│   ├── data/           # Datos estáticos
│   ├── types/          # Tipos TypeScript
│   └── utils/          # Utilidades
└── shared/             # Componentes compartidos
```

## 🛠️ Tecnologías

- **React 18** - Framework UI
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Motion** - Animaciones
- **Radix UI** - Componentes accesibles
- **Tailwind CSS** - Estilos
- **React Hook Form** - Formularios
- **Sonner** - Notificaciones

## 📚 Documentación

Documentación completa disponible en [`./docs`](./docs/README.md):

- [Arquitectura](./docs/architecture/README.md)
- [Componentes](./docs/components/README.md)
- [API Reference](./docs/api/README.md)
- [Guías](./docs/guides/README.md)

## ✨ Características

- ✅ SEO optimizado
- ✅ Accesibilidad (WCAG AA)
- ✅ Responsive design
- ✅ Optimización de imágenes
- ✅ Code splitting
- ✅ Error boundaries
- ✅ Validación de formularios
- ✅ Sistema de notificaciones

## 🎨 Sistema de Diseño

Colores, fuentes y animaciones centralizados en `src/lib/constants/theme.ts`.

## 📝 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run preview` - Preview del build
- `npm run type-check` - Verificar tipos TypeScript

## 🔧 Configuración

### Variables de Entorno

Crear `.env` para variables de entorno (futuro):

```env
VITE_API_URL=https://api.example.com
VITE_PSE_URL=https://pse.example.com
```

### Alias de Imports

Usar `@/` para imports absolutos:

```tsx
import { COLORS } from '@/lib/constants/theme';
import { notify } from '@/lib/utils';
```

## 📦 Dependencias Principales

Ver [`package.json`](./package.json) para lista completa.

## 🤝 Contribuir

Ver [Guía de Contribución](./docs/guides/CONTRIBUTING.md).

## 📄 Licencia

Privado - Academia Caucana de Taekwondo ITF
