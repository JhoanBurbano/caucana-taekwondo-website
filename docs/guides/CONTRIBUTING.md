# Guía de Contribución

## 🛠️ Setup del Entorno

1. Clonar el repositorio
2. Instalar dependencias: `npm install`
3. Iniciar servidor de desarrollo: `npm run dev`

## 📝 Convenciones de Código

### Nombres de Archivos
- Componentes: PascalCase (ej: `Header.tsx`)
- Utilidades: camelCase (ej: `formatters.ts`)
- Hooks: camelCase con prefijo `use` (ej: `useScroll.ts`)

### Estructura de Componentes
```typescript
// 1. Imports
import { ... } from '...';

// 2. Tipos/Interfaces
interface Props { ... }

// 3. Componente
export function Component({ ... }: Props) {
  // 4. Hooks
  // 5. Handlers
  // 6. Render
  return (...);
}
```

### Imports
- Usar alias `@/` para imports absolutos
- Orden: externos → internos → relativos

## ✅ Checklist antes de Commit

- [ ] Código sigue las convenciones
- [ ] No hay `console.log()` o `alert()`
- [ ] TypeScript compila sin errores
- [ ] Imports organizados
- [ ] Componentes documentados si son complejos
