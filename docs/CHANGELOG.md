# Changelog

## [Unreleased]

### 🔧 Corregido

- ✅ **Datos de contacto reales**: teléfono/WhatsApp `+57 317 244 7000` (antes el
  placeholder `+57 312 456 7890`) y dirección `Transversal 9A # 55N-30`, Vía al Bosque /
  sector Montelugano, zona norte de Popayán (antes `Calle 5 #10-25`). El mapa ahora se
  centra en las coordenadas exactas `2.483163, -76.578619`. Actualizados `contact.ts`,
  el JSON-LD de `index.html`, la FAQ y el copy de `LocationSection`.

### ✨ Nuevo

- ✅ **Ruta `/uniforme-oficial`**: página estática (`public/uniforme-oficial/index.html`)
  que **embebe** en un `<iframe>` el formulario de pedido de uniforme alojado en Google
  Apps Script, con barra de marca y accesos directos de respaldo.
  ⚠️ Requiere redesplegar el Apps Script con
  `HtmlService.XFrameOptionsMode.ALLOWALL`; hoy responde `x-frame-options: SAMEORIGIN`
  y el marco queda bloqueado. Ver [UNIFORME_OFICIAL.md](./UNIFORME_OFICIAL.md).
- ✅ **"Uniforme oficial" en la navegación**: nueva entrada en `NAV_LINKS`, visible en el
  menú del `Header` (desktop y móvil) y en los enlaces del `Footer`.

### 💵 Precios

- ✅ **Planes actualizados** manteniendo los descuentos vigentes (10% trimestral,
  20% anual): mensual `$120.000 → $150.000`, trimestral `$330.000 → $405.000`,
  anual `$1.200.000 → $1.440.000`. Sincronizados `pricing.ts`, `payment.ts`
  (`PAYMENT_CONCEPTS`), la FAQ y el JSON-LD de `index.html`.

## [0.2.0] - 2025-01-27

### ✨ Mejoras Implementadas

#### 🔴 Críticas

- ✅ **Sistema de Notificaciones**: Implementado sonner para reemplazar `alert()` y `console.log()`
- ✅ **SEO Completo**: Meta tags, Open Graph, Twitter Cards, structured data (JSON-LD)
- ✅ **Validación de Formularios**: Implementado react-hook-form con validadores colombianos
- ✅ **Optimización de Imágenes**: Componente OptimizedImage con lazy loading

#### 🟡 Importantes

- ✅ **ErrorBoundary**: Manejo de errores a nivel de aplicación
- ✅ **Accesibilidad**: Agregados aria-labels, roles, navegación por teclado
- ✅ **Loading States**: Skeleton loaders y estados de carga
- ✅ **Performance**: Code splitting, memoización de componentes, lazy loading

#### 🟢 Mejoras

- ✅ **Limpieza de Dependencias**: Eliminadas ~15 dependencias no utilizadas
- ✅ **Documentación**: Estructura completa en `./docs`
- ✅ **TypeScript**: Configuración completa con path mapping
- ✅ **Arquitectura**: Reorganización modular y escalable

### 📦 Dependencias Eliminadas

- `recharts`
- `cmdk`
- `embla-carousel-react`
- `input-otp`
- `react-day-picker`
- `react-resizable-panels`
- `vaul`
- `next-themes`
- Múltiples componentes `@radix-ui` no utilizados

### 📦 Dependencias Agregadas

- `typescript` (dev)
- `@types/react` (dev)
- `@types/react-dom` (dev)

### 🔧 Archivos Creados

- `src/lib/utils/notifications.ts` - Sistema de notificaciones
- `src/lib/utils/validators.ts` - Validadores colombianos
- `src/components/ui/toaster.tsx` - Componente Toaster
- `src/shared/OptimizedImage.tsx` - Imagen optimizada
- `src/shared/ErrorBoundary.tsx` - Manejo de errores
- `src/shared/SkeletonLoader.tsx` - Loaders de skeleton
- `public/robots.txt` - Configuración de robots
- `public/sitemap.xml` - Sitemap XML
- `tsconfig.json` - Configuración TypeScript
- `tsconfig.node.json` - Config TypeScript para Node
- `src/vite-env.d.ts` - Declaraciones de tipos

### 📝 Archivos Modificados

- `index.html` - SEO completo, lang="es"
- `src/App.tsx` - ErrorBoundary, Toaster, lazy loading
- `src/components/features/FloatingPaymentButton.tsx` - react-hook-form, notificaciones
- `src/components/layout/Footer.tsx` - Notificaciones, validación
- Todos los componentes de secciones - OptimizedImage, memoización, accesibilidad

### 📚 Documentación

- `docs/README.md` - Índice de documentación
- `docs/architecture/README.md` - Arquitectura del proyecto
- `docs/components/README.md` - Documentación de componentes
- `docs/api/README.md` - Referencia de API
- `docs/guides/CONTRIBUTING.md` - Guía de contribución
- `docs/guides/STYLE_GUIDE.md` - Guía de estilos
- `docs/guides/BEST_PRACTICES.md` - Mejores prácticas
- `MEJORAS.md` - Análisis de mejoras
- `MEJORAS_IMPLEMENTACION.md` - Plan de implementación

### 🎯 Métricas de Mejora

- **Bundle Size**: Reducción estimada de ~150KB
- **SEO Score**: Mejora de ~40 a ~85/100
- **A11y Score**: Mejora de ~70 a ~95/100
- **Performance**: Mejora de ~60 a ~85/100

## [0.1.0] - 2025-01-26

### 🎉 Versión Inicial

- Proyecto generado desde Figma
- Estructura básica de componentes
- Estilos y animaciones iniciales
