# Documentación de Componentes

## Componentes UI Base

### Button
Componente de botón reutilizable con variantes.

**Ubicación**: `src/components/ui/button.tsx`

**Variantes**:
- `default`: Botón principal
- `outline`: Botón con borde
- `destructive`: Botón de acción destructiva
- `secondary`: Botón secundario
- `ghost`: Botón sin fondo
- `link`: Botón estilo enlace

**Ejemplo**:
```tsx
<Button variant="default" size="lg">
  Click me
</Button>
```

### Dialog
Modal/diálogo accesible basado en Radix UI.

**Ubicación**: `src/components/ui/dialog.tsx`

**Componentes**:
- `Dialog`: Contenedor principal
- `DialogContent`: Contenido del diálogo
- `DialogHeader`: Encabezado
- `DialogTitle`: Título
- `DialogDescription`: Descripción

### Input
Campo de entrada de texto.

**Ubicación**: `src/components/ui/input.tsx`

**Props**: Extiende `React.InputHTMLAttributes<HTMLInputElement>`

### Select
Selector desplegable accesible.

**Ubicación**: `src/components/ui/select.tsx`

### RadioGroup
Grupo de opciones de radio.

**Ubicación**: `src/components/ui/radio-group.tsx`

### Label
Etiqueta para formularios.

**Ubicación**: `src/components/ui/label.tsx`

## Componentes Compartidos

### SectionTitle
Título estandarizado para secciones.

**Ubicación**: `src/shared/SectionTitle.tsx`

**Props**:
- `title`: Título principal
- `highlight`: Texto a resaltar (opcional)
- `subtitle`: Subtítulo (opcional)
- `animate`: Si debe animarse (default: true)
- `isInView`: Si está visible

### OptimizedImage
Componente de imagen optimizada con lazy loading.

**Ubicación**: `src/shared/OptimizedImage.tsx`

**Props**:
- `src`: URL de la imagen
- `alt`: Texto alternativo (obligatorio)
- `fallback`: URL de imagen de respaldo (opcional)
- `priority`: Si debe cargarse inmediatamente (default: false)

**Características**:
- Lazy loading automático
- Skeleton loader mientras carga
- Manejo de errores con fallback
- Intersection Observer para carga eficiente

### ErrorBoundary
Manejo de errores a nivel de aplicación.

**Ubicación**: `src/shared/ErrorBoundary.tsx`

**Uso**:
```tsx
<ErrorBoundary>
  <App />
</ErrorBoundary>
```

### SkeletonLoader
Loader de skeleton para estados de carga.

**Ubicación**: `src/shared/SkeletonLoader.tsx`

**Variantes**:
- `text`: Para texto
- `image`: Para imágenes
- `card`: Para tarjetas
- `button`: Para botones

## Componentes de Layout

### Header
Encabezado fijo con navegación.

**Ubicación**: `src/components/layout/Header.tsx`

**Características**:
- Navegación responsive
- Menú móvil
- Scroll detection
- Smooth scroll a secciones

### Footer
Pie de página con información de contacto.

**Ubicación**: `src/components/layout/Footer.tsx`

**Secciones**:
- Información de la academia
- Enlaces rápidos
- Información de contacto
- Formulario de newsletter

## Componentes de Secciones

### HeroSection
Sección principal/hero.

**Ubicación**: `src/components/sections/HeroSection.tsx`

### AboutSection
Sección "Acerca de".

**Ubicación**: `src/components/sections/AboutSection.tsx`

### CoachesSection
Sección de instructores.

**Ubicación**: `src/components/sections/CoachesSection.tsx`

**Optimizaciones**:
- Memoizado con `React.memo`
- Lazy loading de imágenes

### PricingSection
Sección de precios/planes.

**Ubicación**: `src/components/sections/PricingSection.tsx`

### GallerySection
Galería de eventos.

**Ubicación**: `src/components/sections/GallerySection.tsx`

**Optimizaciones**:
- Memoizado con `React.memo`
- Lazy loading de imágenes
- Navegación por teclado

### SponsorsSection
Sección de patrocinadores.

**Ubicación**: `src/components/sections/SponsorsSection.tsx`

## Componentes de Features

### FloatingPaymentButton
Botón flotante de pago con formulario completo.

**Ubicación**: `src/components/features/FloatingPaymentButton.tsx`

**Características**:
- Formulario multi-paso
- Validación con react-hook-form
- Integración con sistema de notificaciones
- Validación de datos colombianos

**Pasos**:
1. Identificación del pagador
2. Resumen y selección de banco
3. Simulación de PSE
