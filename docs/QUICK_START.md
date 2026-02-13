# Quick Start Guide

## 🚀 Inicio Rápido

### 1. Instalación

```bash
npm install
```

### 2. Desarrollo

```bash
npm run dev
```

El servidor se iniciará en `http://localhost:3000`

### 3. Build de Producción

```bash
npm run build
```

El build se generará en la carpeta `build/`

## 📝 Uso de Componentes

### Usar OptimizedImage

```tsx
import { OptimizedImage } from '@/shared/OptimizedImage';

<OptimizedImage
  src="/image.jpg"
  alt="Descripción"
  priority={false} // true para imágenes above the fold
/>
```

### Usar Notificaciones

```tsx
import { notify } from '@/lib/utils';

notify.success('Operación exitosa');
notify.error('Error al procesar');
notify.info('Información importante');
notify.warning('Advertencia');
```

### Usar Validadores

```tsx
import { validators, getValidationMessage } from '@/lib/utils';

if (!validators.email(email)) {
  console.error(getValidationMessage.email);
}
```

### Usar Hooks

```tsx
import { useScroll, useIntersectionObserver } from '@/hooks';

// Detectar scroll
const isScrolled = useScroll(20);

// Observar intersección
const { ref, isInView } = useIntersectionObserver({
  once: true,
  amount: 0.3
});
```

## 🎨 Usar Constantes de Tema

```tsx
import { COLORS, FONTS, ANIMATIONS } from '@/lib/constants/theme';

<div style={{ color: COLORS.primary, fontFamily: FONTS.heading }}>
  Texto
</div>
```

## 📦 Agregar Nueva Sección

1. Crear componente en `src/components/sections/`
2. Agregar datos en `src/lib/data/` si es necesario
3. Importar en `App.tsx` con lazy loading
4. Agregar a navegación en `src/lib/data/navigation.ts`

## 🔧 Agregar Nuevo Componente UI

1. Crear en `src/components/ui/`
2. Seguir estructura de componentes existentes
3. Usar Radix UI si es necesario
4. Documentar en `docs/components/README.md`

## 📚 Más Información

- [Arquitectura](./architecture/README.md)
- [Componentes](./components/README.md)
- [API Reference](./api/README.md)
- [Guías](./guides/README.md)
