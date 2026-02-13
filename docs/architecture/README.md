# Arquitectura del Proyecto

## 🎯 Principios de Diseño

1. **Modularidad**: Separación clara de responsabilidades
2. **Escalabilidad**: Fácil agregar nuevas funcionalidades
3. **Mantenibilidad**: Código limpio y bien organizado
4. **Type Safety**: TypeScript en todo el proyecto
5. **Performance**: Optimizaciones desde el inicio

## 📁 Estructura de Directorios

### `/src/components`
- **features/**: Componentes de funcionalidades específicas (ej: FloatingPaymentButton)
- **layout/**: Componentes de estructura de página (Header, Footer)
- **sections/**: Secciones de contenido (Hero, About, etc.)
- **ui/**: Componentes UI base reutilizables (Button, Input, etc.)

### `/src/lib`
- **constants/**: Constantes globales (colores, fuentes, animaciones)
- **data/**: Datos estáticos centralizados
- **types/**: Definiciones de tipos TypeScript
- **utils/**: Funciones utilitarias

### `/src/hooks`
Hooks personalizados reutilizables:
- `useScroll`: Detección de scroll
- `useIntersectionObserver`: Observación de intersección

### `/src/shared`
Componentes compartidos entre múltiples secciones:
- `SectionTitle`: Título de sección estandarizado

## 🔄 Flujo de Datos

```
Data (lib/data) 
  → Components (components/)
  → Hooks (hooks/)
  → Utils (lib/utils/)
```

## 🎨 Sistema de Diseño

### Colores
Definidos en `lib/constants/theme.ts`:
- Primary: #D30000
- Background: #000000
- Text: Variaciones de blanco con opacidad

### Tipografía
- Heading: Bebas Neue
- Body: Inter

### Animaciones
- Duración estándar: 0.6s
- Stagger delay: 0.1s

## 🔌 Integraciones

- **Vite**: Build tool y dev server
- **React**: Framework UI
- **Motion**: Animaciones
- **Radix UI**: Componentes accesibles
- **Tailwind CSS**: Estilos utilitarios
