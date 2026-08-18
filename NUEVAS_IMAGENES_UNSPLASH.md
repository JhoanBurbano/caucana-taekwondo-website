# 📸 Nuevas Imágenes Unsplash - Dramatic Dark Theme

## Criterios de selección:
1. ✅ Aspect ratio horizontal (16:9 o similar) para background-size: cover
2. ✅ Alta resolución (1920px+ width)
3. ✅ Fondos oscuros o iluminación dramática
4. ✅ Acción de artes marciales dinámica
5. ✅ Composición profesional

## Imágenes encontradas:

### Hero Sections (1920px width):

**hero-fighter / hero-taekwondo:**
- ID: `1555597408-26bc8e548a46` (actual - repetida)
- ❌ Problema: Usada en múltiples lugares
- 🔄 Alternativa: Buscar foto con fondo más oscuro

**hero-kickboxing:**
- Actual: `photo-1773289338370-6197ab131713`
- Photo ID: `M8UwjHgMA5E`
- ✅ Muay Thai training en gym - buena iluminación
- ✅ Aspect ratio correcto

**hero-acondicionamiento:**
- Actual: `photo-1773289338379-5bad1838a860`
- ❌ Problema: Muy similar a kickboxing
- 🔄 Buscar alternativa con equipamiento fitness

### Nuevas opciones encontradas:

1. **Kickboxing gym con sacos**
   - Photo ID: `y-wuo0RqUWk`
   - URL: `photo-1758778932703-7bfaaf1c42cd`
   - ✅ Gym interior con buena iluminación
   - ✅ Múltiples atletas en acción

2. **Kickbox high kick en gym**
   - Photo ID: `Zzuj1Cfbv7A`
   - URL: Buscar
   - ✅ Atleta en acción con músculo definido
   - ✅ Gym background dinámico

3. **Muay Thai sparring femenino**
   - Photo ID: `VVqEIRNtqws`
   - URL: `photo-1758778933112-af9fde620101`
   - ✅ Acción dinámica
   - ✅ Iluminación profesional

4. **Competencia de fighters**
   - Photo ID: `J26TT4wzMEE`
   - URL: `photo-1767971162450-9477017b2cb1`
   - ✅ Acción de competencia real
   - ✅ Fondo oscuro de ring

5. **Taekwondo con coach**
   - Photo ID: `0kB6575nT28`
   - Premium Getty Images
   - ❌ No usar (premium)

## Recomendaciones de reemplazo:

### HERO SECTIONS (Prioridad Alta):

```typescript
'hero-fighter': 
  'https://images.unsplash.com/photo-1767971162450-9477017b2cb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1920'
  // Competencia fighters - fondo oscuro

'hero-taekwondo':
  'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1920'
  // Mantener - training en dojang

'hero-kickboxing':
  'https://images.unsplash.com/photo-1758778932703-7bfaaf1c42cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1920'
  // Kickboxing gym con sacos

'hero-acondicionamiento':
  'https://images.unsplash.com/photo-1758778933112-af9fde620101?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1920'
  // Muay Thai sparring - muy dinámico
```

## Próximos pasos:
1. Verificar aspect ratios con curl
2. Probar en local con npm run dev
3. Verificar que no se distorsionen con cover
4. Deploy a producción
