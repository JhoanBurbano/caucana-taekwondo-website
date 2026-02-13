# API Reference

## Hooks

### useScroll
Hook para detectar scroll de la ventana.

**Ubicación**: `src/hooks/useScroll.ts`

**Uso**:
```tsx
const isScrolled = useScroll(20); // threshold en píxeles
```

**Retorna**: `boolean` - Si el scroll superó el threshold

### useIntersectionObserver
Hook para observar intersección de elementos.

**Ubicación**: `src/hooks/useIntersectionObserver.ts`

**Uso**:
```tsx
const { ref, isInView } = useIntersectionObserver({
  once: true,
  amount: 0.3
});
```

**Opciones**:
- `once`: Si solo debe observarse una vez (default: true)
- `amount`: Porcentaje visible requerido (default: 0.3)

**Retorna**:
- `ref`: Ref para el elemento
- `isInView`: Si el elemento está visible

## Utilidades

### formatCurrency
Formatea números como moneda colombiana.

**Ubicación**: `src/lib/utils/formatters.ts`

**Uso**:
```tsx
formatCurrency(120000); // "$ 120.000"
```

### notify
Sistema de notificaciones toast.

**Ubicación**: `src/lib/utils/notifications.ts`

**Métodos**:
- `notify.success(message, description?)`
- `notify.error(message, description?)`
- `notify.info(message, description?)`
- `notify.warning(message, description?)`

**Uso**:
```tsx
notify.success('Operación exitosa', 'Los datos se guardaron correctamente');
```

### validators
Validadores para formularios colombianos.

**Ubicación**: `src/lib/utils/validators.ts`

**Validadores disponibles**:
- `validators.email(value)`: Valida formato de email
- `validators.phone(value)`: Valida teléfono colombiano
- `validators.identification(value, type)`: Valida identificación
- `validators.required(value)`: Valida que no esté vacío
- `validators.fullName(value)`: Valida nombre completo

**Uso**:
```tsx
if (!validators.email(email)) {
  // Error
}
```

### getValidationMessage
Mensajes de error para validaciones.

**Ubicación**: `src/lib/utils/validators.ts`

**Uso**:
```tsx
const message = getValidationMessage.email; // "Por favor ingrese un email válido"
const idMessage = getValidationMessage.identification('CC'); // Mensaje específico para CC
```

## Constantes

### COLORS
Colores del tema.

**Ubicación**: `src/lib/constants/theme.ts`

**Valores**:
- `primary`: #D30000
- `primaryDark`: #C00000
- `primaryLight`: #FF0000
- `background`: #000000
- `backgroundSecondary`: #1A1A1A
- `backgroundTertiary`: #0A0A0A
- `white`: #FFFFFF
- `textPrimary`: #FFFFFF
- `textSecondary`: rgba(255, 255, 255, 0.8)
- `textTertiary`: rgba(255, 255, 255, 0.6)
- `textMuted`: rgba(255, 255, 255, 0.4)

### FONTS
Fuentes del tema.

**Ubicación**: `src/lib/constants/theme.ts`

**Valores**:
- `heading`: 'Bebas Neue, sans-serif'
- `body`: 'Inter, sans-serif'

### ANIMATIONS
Configuración de animaciones.

**Ubicación**: `src/lib/constants/theme.ts`

**Valores**:
- `duration.fast`: 0.3s
- `duration.normal`: 0.6s
- `duration.slow`: 0.8s
- `delay.stagger`: 0.1s
- `delay.staggerLarge`: 0.15s

## Assets (imágenes y fotos)

Sistema centralizado para todas las imágenes del sitio. No uses URLs directas; usa siempre el módulo de assets.

**Ubicación**: `src/lib/assets/`

**API**:
- `getImageUrl(id: ImageAssetId): string` — Obtiene la URL de una imagen por ID.
- `getAssetAlt(id: ImageAssetId): string` — Obtiene el texto alternativo.
- `getAssetMeta(id)` — Metadata (alt, credit, etc.).

**Uso**:
```tsx
import { getImageUrl, getAssetAlt } from '@/lib/assets';

<OptimizedImage src={getImageUrl('coach-1')} alt={getAssetAlt('coach-1')} />
```

**Tipos**: `ImageAssetId`, `LocalAssetId`, `ExternalImageId` en `@/lib/assets`.

Documentación completa: [ASSETS.md](../ASSETS.md).

## Datos

### NAV_LINKS
Enlaces de navegación.

**Ubicación**: `src/lib/data/navigation.ts`

### COACHES
Lista de instructores.

**Ubicación**: `src/lib/data/coaches.ts`

### PRICING_PLANS
Planes de precios.

**Ubicación**: `src/lib/data/pricing.ts`

### GALLERY_ITEMS
Items de la galería.

**Ubicación**: `src/lib/data/gallery.ts`

### SPONSORS
Lista de patrocinadores.

**Ubicación**: `src/lib/data/sponsors.ts`

### COLOMBIAN_BANKS
Lista de bancos colombianos para PSE.

**Ubicación**: `src/lib/data/payment.ts`

### IDENTIFICATION_TYPES
Tipos de identificación colombianos.

**Ubicación**: `src/lib/data/payment.ts`

### PAYMENT_CONCEPTS
Conceptos de pago.

**Ubicación**: `src/lib/data/payment.ts`
