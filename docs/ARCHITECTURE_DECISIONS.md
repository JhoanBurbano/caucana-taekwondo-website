# Decisiones de Arquitectura

## 🏗️ Estructura de Directorios

### Decisión: Separación por Responsabilidad

**Razón**: Facilita mantenimiento y escalabilidad.

```
src/
├── components/     # Componentes React organizados por tipo
├── lib/           # Lógica de negocio y utilidades
├── hooks/         # Hooks personalizados
└── shared/        # Componentes compartidos
```

## 📦 Gestión de Dependencias

### Decisión: Solo Dependencias Utilizadas

**Razón**: Reduce bundle size y tiempo de instalación.

**Proceso**:
1. Auditar dependencias instaladas
2. Verificar uso real en código
3. Eliminar no utilizadas
4. Documentar dependencias críticas

## 🎨 Sistema de Diseño

### Decisión: Constantes Centralizadas

**Razón**: Consistencia y fácil mantenimiento.

**Implementación**:
- Colores en `lib/constants/theme.ts`
- Fuentes en `lib/constants/theme.ts`
- Animaciones en `lib/constants/theme.ts`

**Beneficios**:
- Cambios globales desde un solo lugar
- Type safety
- Autocompletado en IDE

## 🖼️ Optimización de Imágenes

### Decisión: Componente OptimizedImage

**Razón**: Reutilización y consistencia.

**Características**:
- Lazy loading automático
- Skeleton loader
- Manejo de errores
- Intersection Observer

**Alternativas consideradas**:
- next/image (solo Next.js)
- react-lazy-load-image-component (dependencia adicional)
- Solución propia (elegida)

## 📝 Formularios

### Decisión: react-hook-form

**Razón**: Performance y validación robusta.

**Ventajas**:
- Menos re-renders
- Validación flexible
- Integración con validadores personalizados
- TypeScript support

## 🔔 Notificaciones

### Decisión: sonner

**Razón**: Ya estaba instalado, ligero, accesible.

**Características**:
- Toast notifications
- Posicionamiento flexible
- Accesible por defecto
- Customizable

## ⚡ Performance

### Decisión: Code Splitting + Memoización

**Estrategia**:
- Lazy loading de secciones pesadas
- Memoización de componentes que se re-renderizan frecuentemente
- Intersection Observer para animaciones

**Componentes memoizados**:
- CoachesSection
- GallerySection

## ♿ Accesibilidad

### Decisión: ARIA + Semántica HTML

**Enfoque**:
- HTML semántico primero
- ARIA cuando sea necesario
- Navegación por teclado
- Contraste de colores

## 🧪 Testing (Futuro)

### Decisión: Vitest + React Testing Library

**Razón**:
- Vitest: Rápido, compatible con Vite
- RTL: Mejores prácticas de testing React

## 📚 Documentación

### Decisión: Documentación en ./docs

**Estructura**:
- README principal
- Documentación por categoría
- Guías prácticas
- Referencia de API

**Formato**: Markdown para fácil mantenimiento
