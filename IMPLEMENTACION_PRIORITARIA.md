# 🚀 Guía de Implementación Prioritaria
## Academia Caucana - Quick Wins y Acciones Inmediatas

Este documento complementa el `ANALISIS_COMPETITIVO_COMPLETO.md` con instrucciones técnicas específicas para implementación inmediata.

---

## ⚡ QUICK WINS - SEMANA 1 (2-4 horas)

### 1. WhatsApp Widget Flotante (30 min)

**Archivo:** `src/components/features/WhatsAppButton.tsx`

```tsx
import { MessageCircle } from 'lucide-react';
import { COLORS, FONTS } from '@/lib/constants/theme';

const WHATSAPP_NUMBER = '573124567890'; // Actualizar con número real
const DEFAULT_MESSAGE = 'Hola, me interesa información sobre clases de Taekwondo ITF';

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-8 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 z-40"
      style={{ backgroundColor: '#25D366' }}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" aria-hidden="true" />
    </a>
  );
}
```

**Integración en `App.tsx`:**

```tsx
import { WhatsAppButton } from './components/features/WhatsAppButton';

export default function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-black">
        <Header />
        <main>{/* ... */}</main>
        <Footer />
        <Toaster />
        <WhatsAppButton /> {/* AGREGAR AQUÍ */}
      </div>
    </ErrorBoundary>
  );
}
```

---

### 2. Google Reviews Badge (45 min)

**Archivo:** `src/components/sections/ReviewsSection.tsx`

```tsx
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { SectionTitle } from '@/shared/SectionTitle';
import { COLORS, FONTS, ANIMATIONS } from '@/lib/constants/theme';

const REVIEWS = [
  {
    author: 'María González',
    rating: 5,
    text: 'Excelente academia. Mi hijo ha mejorado enormemente su disciplina y confianza en solo 4 meses.',
    date: 'Hace 2 semanas',
  },
  {
    author: 'Carlos Rodríguez',
    rating: 5,
    text: 'Los instructores son profesionales y los resultados en competencias hablan por sí solos.',
    date: 'Hace 1 mes',
  },
  // Agregar más testimonios reales
];

export function ReviewsSection() {
  const { ref, isInView } = useIntersectionObserver({ once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: COLORS.backgroundSecondary }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="Lo que dicen nuestros estudiantes"
          highlight="estudiantes"
          subtitle="Testimonios reales de familias que han confiado en nosotros"
          isInView={isInView}
        />

        {/* Google Reviews Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <div className="text-white">
            <div style={{ fontFamily: FONTS.heading, fontSize: '32px', lineHeight: '1' }}>
              4.9
            </div>
            <div style={{ fontFamily: FONTS.body, fontSize: '14px', color: COLORS.textMuted }}>
              (47 reseñas)
            </div>
          </div>
          <a
            href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-4 py-2 text-white transition-colors duration-300"
            style={{
              fontFamily: FONTS.body,
              fontSize: '14px',
              backgroundColor: COLORS.primary,
            }}
          >
            Ver en Google
          </a>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: ANIMATIONS.duration.normal,
                delay: index * ANIMATIONS.delay.staggerMedium,
              }}
              className="border-2 p-6"
              style={{
                backgroundColor: COLORS.background,
                borderColor: 'rgba(255, 255, 255, 0.1)',
              }}
            >
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p
                className="mb-4"
                style={{
                  fontFamily: FONTS.body,
                  fontSize: '14px',
                  lineHeight: '1.6',
                  color: COLORS.textSecondary,
                }}
              >
                "{review.text}"
              </p>
              <div>
                <div style={{ fontFamily: FONTS.heading, fontSize: '16px', color: COLORS.white }}>
                  {review.author}
                </div>
                <div style={{ fontFamily: FONTS.body, fontSize: '12px', color: COLORS.textMuted }}>
                  {review.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Integración en `App.tsx`:**

```tsx
const ReviewsSection = lazy(() => import('./components/sections/ReviewsSection').then(m => ({ default: m.ReviewsSection })));

// Agregar después de GallerySection:
<Suspense fallback={<SkeletonLoader variant="card" className="h-96" />}>
  <ReviewsSection />
</Suspense>
```

---

### 3. Hero CTA Optimizado (20 min)

**Actualizar `HeroSection.tsx`:**

Cambiar botones para priorizar "Clase de Prueba":

```tsx
<div className="flex flex-wrap gap-4">
  <Button
    className="text-white px-10 py-7 transition-all duration-300 shadow-2xl shadow-red-900/80 hover:shadow-red-900/100 hover:scale-105"
    style={{
      fontFamily: FONTS.heading,
      fontSize: '22px',
      letterSpacing: '1.5px',
      borderRadius: '0',
      background: `linear-gradient(to right, ${COLORS.primaryDark}, ${COLORS.primaryLight})`,
    }}
    onClick={() => {
      // FUTURO: Abrir modal de trial class
      document.getElementById('inscripciones')?.scrollIntoView({ behavior: 'smooth' });
    }}
    aria-label="Reservar clase de prueba gratis"
  >
    Clase de Prueba Gratis
  </Button>
  <Button
    variant="outline"
    className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 transition-all duration-300"
    style={{
      fontFamily: FONTS.heading,
      fontSize: '18px',
      letterSpacing: '1.5px',
      borderRadius: '0',
    }}
    onClick={() => document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' })}
    aria-label="Conocer más sobre la academia"
  >
    Conocer Más
  </Button>
</div>
```

---

### 4. Mejorar Contraste de Colores (15 min)

**Actualizar `src/lib/constants/theme.ts`:**

```tsx
export const COLORS = {
  // ... otros colores
  textSecondary: '#AAAAAA', // Era #888888 - Mejorado contraste
  textTertiary: '#999999', // Era #777777 - Mejorado contraste
} as const;
```

Verificar contraste con WebAIM: https://webaim.org/resources/contrastchecker/

---

### 5. Skip to Content Link (15 min)

**Agregar en `App.tsx`:**

```tsx
export default function App() {
  return (
    <ErrorBoundary>
      {/* Skip Link para accesibilidad */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black"
        style={{ fontFamily: FONTS.body }}
      >
        Saltar al contenido principal
      </a>
      
      <div className="min-h-screen bg-black">
        <Header />
        <main id="main-content"> {/* AGREGAR ID */}
          <HeroSection />
          {/* ... */}
        </main>
        <Footer />
        <Toaster />
        <WhatsAppButton />
      </div>
    </ErrorBoundary>
  );
}
```

**Agregar clases en `src/index.css`:**

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.focus\:not-sr-only:focus {
  position: static;
  width: auto;
  height: auto;
  padding: 0.5rem 1rem;
  margin: 0;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
```

---

## 🎯 PRIORIDAD MEDIA - SEMANA 2 (8-12 horas)

### 6. Trial Class Landing Page

**Archivo:** `src/pages/TrialClassPage.tsx`

```tsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Check, X } from 'lucide-react';
import { getImageUrl } from '@/lib/assets';
import { notify, validators, getValidationMessage } from '@/lib/utils';
import { COLORS, FONTS } from '@/lib/constants/theme';

interface TrialFormData {
  name: string;
  email: string;
  phone: string;
}

export function TrialClassPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TrialFormData>();

  const onSubmit = async (data: TrialFormData) => {
    // Validaciones
    if (!validators.fullName(data.name)) {
      notify.error('Nombre inválido', getValidationMessage.fullName);
      return;
    }
    if (!validators.email(data.email)) {
      notify.error('Email inválido', getValidationMessage.email);
      return;
    }
    if (!validators.phone(data.phone)) {
      notify.error('Teléfono inválido', getValidationMessage.phone);
      return;
    }

    try {
      // FUTURO: Enviar a API
      // await fetch('/api/trial-class', { method: 'POST', body: JSON.stringify(data) });

      // Simular envío
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSubmitted(true);
      notify.success(
        '¡Reserva confirmada!',
        'Te contactaremos por WhatsApp en los próximos 5 minutos'
      );
      reset();
    } catch (error) {
      notify.error('Error', 'Por favor intenta nuevamente o contáctanos por WhatsApp');
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="max-w-2xl text-center">
          <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-6">
            <Check className="w-12 h-12 text-white" />
          </div>
          <h1
            className="text-white mb-4"
            style={{ fontFamily: FONTS.heading, fontSize: '42px', letterSpacing: '1px' }}
          >
            ¡Reserva Confirmada!
          </h1>
          <p
            className="mb-8"
            style={{ fontFamily: FONTS.body, fontSize: '18px', color: COLORS.textSecondary }}
          >
            Te contactaremos por WhatsApp en los próximos 5 minutos para confirmar tu horario.
          </p>
          <Button
            onClick={() => (window.location.href = '/')}
            style={{
              fontFamily: FONTS.heading,
              fontSize: '18px',
              letterSpacing: '1px',
              background: `linear-gradient(to right, ${COLORS.primaryDark}, ${COLORS.primaryLight})`,
            }}
          >
            Volver al Inicio
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header Simple (sin navegación para no distraer) */}
      <header className="py-6 border-b" style={{ borderColor: `${COLORS.primary}33` }}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={getImageUrl('logo-academia-caucana')} alt="Academia Caucana" className="w-12 h-12" />
            <div>
              <div className="text-white" style={{ fontFamily: FONTS.heading, fontSize: '18px' }}>
                Academia Caucana
              </div>
              <div style={{ color: COLORS.primary, fontSize: '12px', letterSpacing: '1px' }}>
                TAEKWONDO ITF
              </div>
            </div>
          </div>
          <button
            onClick={() => (window.location.href = '/')}
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="Cerrar y volver al inicio"
          >
            <X size={28} />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div>
              <div
                className="inline-block px-4 py-1 mb-4"
                style={{ backgroundColor: COLORS.primary }}
              >
                <span className="text-white" style={{ fontFamily: FONTS.heading, fontSize: '14px', letterSpacing: '1px' }}>
                  OFERTA LIMITADA
                </span>
              </div>
              <h1
                className="text-white mb-6"
                style={{
                  fontFamily: FONTS.heading,
                  fontSize: 'clamp(32px, 5vw, 52px)',
                  lineHeight: '1.1',
                  letterSpacing: '1px',
                }}
              >
                Clase de Prueba{' '}
                <span style={{ color: COLORS.primary }}>100% Gratis</span>
              </h1>
              <p
                className="mb-6"
                style={{ fontFamily: FONTS.body, fontSize: '18px', lineHeight: '1.6', color: COLORS.textSecondary }}
              >
                Descubre el Taekwondo ITF con los <strong>Campeones Centroamericanos 2025</strong>.
                Academia Revelación ITF. Proceso estructurado por edades.
              </p>

              {/* Benefits */}
              <ul className="space-y-3 mb-8">
                {[
                  'Instructores certificados ITF',
                  'Grupos por edad (niños, jóvenes, adultos)',
                  'Sin compromiso de inscripción',
                  'Conoce nuestras instalaciones',
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 flex-shrink-0" style={{ color: COLORS.primary }} />
                    <span style={{ fontFamily: FONTS.body, fontSize: '16px', color: COLORS.textSecondary }}>
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Social Proof */}
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-black -ml-2 first:ml-0"
                      style={{
                        backgroundImage: `url(https://i.pravatar.cc/150?img=${i + 10})`,
                        backgroundSize: 'cover',
                      }}
                    />
                  ))}
                </div>
                <span style={{ fontFamily: FONTS.body, fontSize: '14px', color: COLORS.textMuted }}>
                  <strong className="text-white">47 familias</strong> confiaron en nosotros este mes
                </span>
              </div>
            </div>

            {/* Right: Form */}
            <div
              className="border-2 p-8"
              style={{ backgroundColor: COLORS.backgroundSecondary, borderColor: COLORS.primary }}
            >
              <h2
                className="text-white mb-6"
                style={{ fontFamily: FONTS.heading, fontSize: '24px', letterSpacing: '1px' }}
              >
                Reserva tu Clase Gratis
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-white/80" style={{ fontFamily: FONTS.body }}>
                    Nombre Completo *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    {...register('name', { required: true })}
                    className="mt-1 bg-black border-white/20 text-white"
                    style={{ borderRadius: '0', fontFamily: FONTS.body }}
                    placeholder="Juan Pérez"
                    aria-invalid={errors.name ? 'true' : 'false'}
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-white/80" style={{ fontFamily: FONTS.body }}>
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email', { required: true })}
                    className="mt-1 bg-black border-white/20 text-white"
                    style={{ borderRadius: '0', fontFamily: FONTS.body }}
                    placeholder="juan@email.com"
                    aria-invalid={errors.email ? 'true' : 'false'}
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-white/80" style={{ fontFamily: FONTS.body }}>
                    Teléfono (WhatsApp) *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register('phone', { required: true })}
                    className="mt-1 bg-black border-white/20 text-white"
                    style={{ borderRadius: '0', fontFamily: FONTS.body }}
                    placeholder="312 456 7890"
                    inputMode="tel"
                    aria-invalid={errors.phone ? 'true' : 'false'}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full py-6 text-white transition-all duration-300"
                  style={{
                    fontFamily: FONTS.heading,
                    fontSize: '20px',
                    letterSpacing: '1px',
                    borderRadius: '0',
                    background: `linear-gradient(to right, ${COLORS.primaryDark}, ${COLORS.primaryLight})`,
                  }}
                >
                  Reservar Ahora (Gratis)
                </Button>

                <p
                  className="text-center"
                  style={{ fontFamily: FONTS.body, fontSize: '12px', color: COLORS.textMuted }}
                >
                  Te contactaremos en <strong className="text-white">menos de 5 minutos</strong> por WhatsApp
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section
        className="py-12 border-t"
        style={{ backgroundColor: COLORS.backgroundSecondary, borderColor: `${COLORS.primary}33` }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div style={{ fontFamily: FONTS.heading, fontSize: '36px', color: COLORS.primary }}>
                🏆
              </div>
              <div style={{ fontFamily: FONTS.body, fontSize: '14px', color: COLORS.textMuted }}>
                Campeones<br />Centroamericanos 2025
              </div>
            </div>
            <div className="text-center">
              <div style={{ fontFamily: FONTS.heading, fontSize: '36px', color: COLORS.primary }}>
                ⭐
              </div>
              <div style={{ fontFamily: FONTS.body, fontSize: '14px', color: COLORS.textMuted }}>
                Academia Revelación<br />ITF 2025
              </div>
            </div>
            <div className="text-center">
              <div style={{ fontFamily: FONTS.heading, fontSize: '36px', color: COLORS.primary }}>
                100+
              </div>
              <div style={{ fontFamily: FONTS.body, fontSize: '14px', color: COLORS.textMuted }}>
                Estudiantes<br />Activos
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
```

**Agregar ruta en configuración:**

Si usas React Router, agregar en routes. Si no, crear archivo `/public/clase-de-prueba.html` que cargue la app con esta página.

---

### 7. FAQ Schema Implementation (30 min)

**Archivo:** `src/lib/data/faq.ts`

```tsx
export const FAQ_ITEMS = [
  {
    question: '¿Cuánto cuesta el Taekwondo ITF en Academia Caucana?',
    answer:
      'Nuestros planes van desde $80,000 COP/mes (Básico, 2 clases/semana) hasta $150,000 COP/mes (Premium, 4 clases/semana). Ofrecemos una clase de prueba 100% gratis sin compromiso.',
  },
  {
    question: '¿Desde qué edad pueden empezar los niños?',
    answer:
      'Aceptamos niños desde los 5 años. Tenemos grupos estructurados por edad: niños (5-9 años), prejuveniles (10-13 años), jóvenes (14-17 años) y adultos (18+).',
  },
  {
    question: '¿Los instructores están certificados?',
    answer:
      'Sí, todos nuestros instructores están certificados por la ITF (International Taekwon-Do Federation) y la ACTD (Asociación Colombiana de Taekwon-Do). Nuestro director, Jonathan López Cepeda, es cinturón negro certificado.',
  },
  {
    question: '¿Qué logros ha obtenido la academia?',
    answer:
      'Somos Campeones Centroamericanos 2025 (República Dominicana), Academia Revelación ITF 2025, y obtuvimos el 3er lugar en Juegos Nacionales 2025. También campeones de Copa Súper Campeones 2024 y Copa Pelícano 2025.',
  },
  {
    question: '¿Dónde están ubicados en Popayán?',
    answer:
      'Estamos en Calle 5 #10-25, Popayán, Cauca. Puedes contactarnos por WhatsApp al +57 312 456 7890 o por email a info@academiacaucana.com.',
  },
  {
    question: '¿Qué incluye la clase de prueba gratis?',
    answer:
      'La clase de prueba incluye una sesión completa de entrenamiento (60 minutos), conocer a los instructores, recorrido por nuestras instalaciones, y asesoría sobre el programa más adecuado según edad y objetivos. No requiere uniforme, solo ropa cómoda.',
  },
  {
    question: '¿Cuál es la diferencia entre Taekwondo ITF y WTF?',
    answer:
      'El Taekwondo ITF (International Taekwon-Do Federation) enfatiza el arte marcial tradicional, defensa personal y formas (tul). Es más completo en técnicas de mano y autodefensa, ideal para formación integral de carácter y disciplina.',
  },
  {
    question: '¿Ofrecen clases de Kickboxing y acondicionamiento físico?',
    answer:
      'Sí, además de Taekwondo ITF, ofrecemos clases de Kickboxing y Acondicionamiento Físico. Estas modalidades están diseñadas tanto para complementar el entrenamiento de artes marciales como para personas enfocadas en fitness.',
  },
];
```

**Generar schema JSON-LD:**

```tsx
// src/lib/utils/seo.ts
import type { FAQItem } from '@/lib/types';

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
```

**Agregar en `index.html` (o componente Head):**

```html
<!-- Después del schema existente -->
<script type="application/ld+json" id="faq-schema">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuánto cuesta el Taekwondo ITF en Academia Caucana?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nuestros planes van desde $80,000 COP/mes (Básico) hasta $150,000 COP/mes (Premium). Clase de prueba gratis sin compromiso."
        }
      }
      // ... resto de preguntas
    ]
  }
</script>
```

---

## 📱 INTEGRACIONES RECOMENDADAS

### Google Analytics 4

**1. Crear cuenta GA4:** https://analytics.google.com/

**2. Agregar en `index.html`:**

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**3. Tracking de eventos:**

```tsx
// src/lib/utils/analytics.ts
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// Uso:
trackEvent('trial_form_submit', {
  name: data.name,
  phone: data.phone,
  // NO enviar PII como email directamente
});
```

---

### Calendly (Booking System)

**1. Crear cuenta:** https://calendly.com (Free tier)

**2. Configurar "Event Type":**
- Nombre: "Clase de Prueba Gratis - Taekwondo ITF"
- Duración: 60 min
- Buffer: 15 min antes/después
- Preguntas custom: Edad, experiencia previa

**3. Integrar widget:**

```tsx
// src/components/features/CalendlyButton.tsx
import { useEffect } from 'react';

export function CalendlyButton() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <a
      href="https://calendly.com/tu-usuario/clase-prueba"
      onClick={(e) => {
        e.preventDefault();
        // @ts-ignore
        if (window.Calendly) {
          // @ts-ignore
          window.Calendly.initPopupWidget({ url: 'https://calendly.com/tu-usuario/clase-prueba' });
        }
        return false;
      }}
      className="px-6 py-3 bg-blue-600 text-white rounded"
    >
      Agendar Clase
    </a>
  );
}
```

---

## 🔧 CONFIGURACIONES ADICIONALES

### robots.txt

**Crear `/public/robots.txt`:**

```
User-agent: *
Allow: /

Sitemap: https://academiacaucana.com/sitemap.xml

# Disallow admin areas (futuro)
Disallow: /admin/
Disallow: /api/
```

### sitemap.xml

**Crear `/public/sitemap.xml`:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://academiacaucana.com/</loc>
    <lastmod>2026-08-17</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://academiacaucana.com/clase-de-prueba</loc>
    <lastmod>2026-08-17</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- Agregar más URLs -->
</urlset>
```

---

## ✅ CHECKLIST DE VERIFICACIÓN

Antes de hacer push, verificar:

- [ ] WhatsAppButton renderiza correctamente en mobile
- [ ] ReviewsSection tiene testimonios reales (no lorem ipsum)
- [ ] Hero CTA dice "Clase de Prueba Gratis"
- [ ] Contraste de colores pasa WCAG AA (use https://webaim.org/resources/contrastchecker/)
- [ ] Skip link funciona con Tab
- [ ] Formularios tienen validación
- [ ] Build de producción sin errores (`npm run build`)
- [ ] Lighthouse score >85 en mobile y desktop

---

## 🚀 DEPLOYMENT

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### Netlify

```bash
# Build
npm run build

# Deploy carpeta dist/ en Netlify UI
# O usar Netlify CLI
netlify deploy --prod --dir=dist
```

---

## 📞 SOPORTE Y PREGUNTAS

Si tienes dudas durante la implementación:

1. **Documentación React:** https://react.dev
2. **Tailwind CSS:** https://tailwindcss.com/docs
3. **Motion (Framer Motion):** https://motion.dev
4. **Radix UI:** https://radix-ui.com

Para consultas específicas de Academia Caucana:
- **WhatsApp:** +57 312 456 7890
- **Email:** info@academiacaucana.com

---

**Última actualización:** Agosto 17, 2026  
**Versión:** 1.0
