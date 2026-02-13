# Convenciones de Código

Estándares de código del proyecto: modularidad, clean code, tipado estricto y legibilidad.

## TypeScript

- **Modo strict**: activado en `tsconfig.json` (`strict: true`, `noUnusedLocals`, `noUnusedParameters`).
- **Tipado explícito**: evita `any`. Usa tipos/interfaces definidos en `src/lib/types` o en el propio archivo.
- **Imports de tipos**: `import type { X } from '...'` cuando solo se usa como tipo.
- **Tipos para datos de dominio**: `Coach`, `GalleryItem`, `PricingPlan`, etc. referencian IDs de assets (`ExternalImageId`) en lugar de strings sueltos donde aplica.

## Estructura modular

- **Una responsabilidad por archivo**: componentes que hacen una cosa; lógica de negocio en hooks o `lib`.
- **Datos**: en `src/lib/data/`; no incrustar listas largas en componentes.
- **Constantes**: colores, fuentes, animaciones en `src/lib/constants/theme.ts`; assets en `src/lib/assets`.
- **Componentes**:
  - `components/ui`: primitivos reutilizables.
  - `components/layout`: Header, Footer.
  - `components/sections`: una sección de página por archivo.
  - `components/features`: features completas (ej. FloatingPaymentButton).
- **Shared**: `SectionTitle`, `OptimizedImage`, `ErrorBoundary`, `SkeletonLoader` en `src/shared/`.

## Nombres

- **Componentes**: PascalCase.
- **Hooks**: `use` + PascalCase.
- **Funciones/utilidades**: camelCase.
- **Constantes**: UPPER_SNAKE_CASE o PascalCase según contexto (ej. `COACHES`, `COLORS`).
- **IDs de assets**: kebab-case (ej. `hero-pattern`, `coach-1`).

## Imports

- Orden sugerido: React/vendor → alias `@/` (hooks, lib, shared, components) → relativos.
- Alias `@/*` → `./src/*`; usar `@/lib/assets`, `@/shared/OptimizedImage`, etc.

## Documentación en código

- **JSDoc** en funciones y módulos no triviales (hooks, utils, helpers de assets).
- **Comentarios breves** cuando la lógica no sea obvia; evitar comentarios que repitan lo que hace el código.
- **Tipos**: comentar propiedades cuando el significado no sea evidente (ej. “ID del asset en @/lib/assets”).

## Assets e imágenes

- No usar URLs ni rutas de imagen directas en JSX o datos. Usar siempre `getImageUrl(id)` y `getAssetAlt(id)` desde `@/lib/assets`.
- Definir todos los IDs en `src/lib/assets/types.ts` y las URLs/metadata en `constants.ts` y `local.ts`. Ver [ASSETS.md](../ASSETS.md).

## Formularios y validación

- Validación con `src/lib/utils/validators.ts` y mensajes con `getValidationMessage`.
- Notificaciones con `notify` de `src/lib/utils/notifications.ts`; no `alert` ni `console.log` para feedback al usuario.

## Estilos

- Preferir constantes de tema (`COLORS`, `FONTS`, `ANIMATIONS`) sobre valores mágicos.
- Tailwind para layout y utilidades; `style` cuando se necesiten valores del tema (colores, fuentes).

Resumen: código modular, tipado estricto, nombres claros, assets centralizados y documentación mínima pero útil donde aporte.
