# Guía de Estilos

## 🎨 Uso de Constantes

**✅ Correcto:**
```typescript
import { COLORS, FONTS } from '@/lib/constants/theme';

<div style={{ color: COLORS.primary, fontFamily: FONTS.heading }}>
```

**❌ Incorrecto:**
```typescript
<div style={{ color: '#D30000', fontFamily: 'Bebas Neue, sans-serif' }}>
```

## 🖼️ Imágenes

**✅ Usar componente OptimizedImage:**
```typescript
<OptimizedImage src={image} alt="Descripción" />
```

**❌ Evitar:**
```typescript
<img src={image} alt="image" />
```

## 📝 Formularios

**✅ Usar react-hook-form:**
```typescript
const { register, handleSubmit, formState: { errors } } = useForm();
```

**❌ Evitar validación HTML básica:**
```typescript
<input required />
```

## 🔔 Notificaciones

**✅ Usar sistema de notificaciones:**
```typescript
import { notify } from '@/lib/utils/notifications';
notify.success('Operación exitosa');
```

**❌ Evitar:**
```typescript
alert('Mensaje');
console.log('Debug');
```
