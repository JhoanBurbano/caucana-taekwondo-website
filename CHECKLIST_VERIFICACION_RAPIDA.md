# ✅ CHECKLIST RÁPIDO - Verificación en Producción

**URL:** https://www.caucanadetaekwondo.com/  
**Tiempo estimado:** 5 minutos

---

## 🖥️ VERIFICACIÓN EN DESKTOP (3 minutos)

### 1. Hero Section (10 segundos)
- [ ] Botón principal dice **"Clase de Prueba Gratis"**
- [ ] ~~NO dice "Inscríbete Hoy"~~ ❌ (versión antigua)
- [ ] Botón es más grande y tiene sombra roja

### 2. WhatsApp Button (10 segundos)
- [ ] **Botón verde flotante** visible en esquina inferior derecha
- [ ] Tiene ícono de mensaje/chat
- [ ] Al pasar mouse aparece tooltip "Chatea con nosotros"
- [ ] Al hacer click abre WhatsApp Web con mensaje predefinido

### 3. Reviews Section (30 segundos)
**Scroll hacia abajo hasta ver:**
- [ ] Título: **"Lo que dicen nuestros estudiantes"**
- [ ] Badge con **5 estrellas amarillas** y número **4.9**
- [ ] Texto: **(47 reseñas)**
- [ ] **3 testimonios** en tarjetas grises
- [ ] Nombres visibles: María González, Carlos Rodríguez, Ana Martínez
- [ ] Botón **"Ver en Google"**
- [ ] Texto: **"47 familias confiaron en nosotros este mes"**

### 4. FAQ Section (30 segundos)
**Scroll más abajo hasta ver:**
- [ ] Título: **"Preguntas Frecuentes"**
- [ ] **8 preguntas** en formato accordion
- [ ] Primera pregunta abierta por defecto: "¿Cuánto cuesta el Taekwondo ITF..."
- [ ] Al hacer click en pregunta → Se expande/contrae con animación
- [ ] Al final: Botón **"Contáctanos por WhatsApp"**

### 5. Accesibilidad (10 segundos)
- [ ] Presionar **Tab** en teclado
- [ ] Debe aparecer enlace **"Saltar al contenido principal"** arriba a la izquierda
- [ ] Fondo blanco, texto negro

---

## 📱 VERIFICACIÓN EN MOBILE (1 minuto)

**Abrir en teléfono:** https://www.caucanadetaekwondo.com/

- [ ] WhatsApp button verde visible (esquina inferior derecha)
- [ ] Hero CTA "Clase de Prueba Gratis" visible y legible
- [ ] Reviews section se ve bien (badge + testimonios)
- [ ] FAQ accordion funciona al tocar
- [ ] Scroll suave, sin errores de layout

---

## 🔍 VERIFICACIÓN SEO (1 minuto)

### Opción 1: Ver código fuente
**Ctrl+U (Windows) o Cmd+Option+U (Mac)**

Buscar (Ctrl+F):
- [ ] `"FAQPage"` → Debe encontrar **1 resultado**
- [ ] `"aggregateRating"` → Debe encontrar **1 resultado**
- [ ] `"ratingValue": "4.9"` → Debe encontrar **1 resultado**

### Opción 2: Verificar URLs
- [ ] https://www.caucanadetaekwondo.com/robots.txt → Debe cargar (no 404)
- [ ] https://www.caucanadetaekwondo.com/sitemap.xml → Debe cargar (no 404)

---

## ❌ SI ALGO NO APARECE

### Problema: No veo WhatsApp button
**Solución:**
1. Hacer scroll hacia abajo y arriba
2. Refresh (Ctrl+R o Cmd+R)
3. Limpiar caché: Ctrl+Shift+R (Windows) o Cmd+Shift+R (Mac)

### Problema: No veo Reviews o FAQ
**Solución:**
1. Scroll completamente hacia abajo
2. Esperar 2-3 segundos (lazy loading)
3. Refresh con caché limpio

### Problema: Hero dice "Inscríbete Hoy" (versión vieja)
**Solución:**
1. Limpiar caché del navegador
2. Abrir en ventana incógnita/privada
3. Esperar 2-3 minutos más (CDN propagación)

---

## ✅ CONFIRMACIÓN FINAL

**Si TODO está marcado ✓:**
🎉 **¡Deployment exitoso!** Todos los cambios están en producción.

**Si falta algo:**
⚠️ Limpiar caché del navegador y esperar 5 minutos más.

---

## 📸 CAPTURAS RECOMENDADAS (Opcional)

Para documentar:
1. Screenshot del Hero con "Clase de Prueba Gratis"
2. Screenshot del WhatsApp button
3. Screenshot de la sección Reviews (badge 4.9★)
4. Screenshot de la FAQ abierta

---

**Tiempo total:** 5 minutos  
**Herramientas:** Solo navegador, no se requieren dev tools
