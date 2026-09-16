/**
 * Google Analytics 4.
 *
 * Para activarlo basta con definir el Measurement ID; no hay que tocar código:
 *
 *   echo 'VITE_GA4_ID=G-XXXXXXXXXX' >> .env.local     # local
 *   (o la variable de entorno equivalente en el hosting)
 *
 * Sin esa variable `initAnalytics()` no carga nada y `trackEvent()` solo escribe
 * en consola durante el desarrollo, así que el sitio funciona igual sin GA4.
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * Track custom event
 * @param eventName - Name of the event
 * @param eventParams - Event parameters
 */
export const GA4_ID: string = import.meta.env.VITE_GA4_ID ?? '';

/**
 * Inyecta gtag.js una sola vez. Se llama desde main.tsx.
 * Sin `VITE_GA4_ID` no hace nada: ni script, ni cookies, ni peticiones.
 */
export function initAnalytics(): void {
  if (!GA4_ID || typeof window === 'undefined') return;
  if (document.getElementById('ga4')) return;

  const tag = document.createElement('script');
  tag.id = 'ga4';
  tag.async = true;
  tag.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
  document.head.appendChild(tag);

  const dataLayer = (window.dataLayer = window.dataLayer || []);
  // gtag.js empuja el objeto `arguments` crudo, no un array: es lo que espera leer
  // del otro lado. Por eso `function` y no una flecha con rest params.
  const gtag = function () {
    // eslint-disable-next-line prefer-rest-params
    dataLayer.push(arguments);
  } as NonNullable<Window['gtag']>;

  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA4_ID);
}

export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  } else if (import.meta.env.DEV) {
    // `process.env` no existe en el navegador con Vite; DEV sí.
    console.log('[Analytics]', eventName, eventParams);
  }
};

/**
 * Track page view
 * @param pagePath - Page path
 * @param pageTitle - Page title
 */
export const trackPageView = (pagePath: string, pageTitle?: string) => {
  trackEvent('page_view', {
    page_path: pagePath,
    page_title: pageTitle || document.title,
  });
};

// Eventos predefinidos para Academia Caucana
export const analytics = {
  // CTA Clicks
  ctaClick: (ctaName: string, location: string) => {
    trackEvent('cta_click', {
      cta_name: ctaName,
      location,
    });
  },

  // WhatsApp Click
  whatsappClick: (source: string) => {
    trackEvent('whatsapp_click', {
      source,
    });
  },

  // Trial Form Submit
  trialFormSubmit: (_formData: { name: string; phone: string }) => {
    trackEvent('trial_form_submit', {
      value: 1, // Valor estimado de lead
      currency: 'COP',
      // NO enviar PII como email directamente a menos que sea necesario
    });
  },

  // Newsletter Subscription
  newsletterSubscribe: () => {
    trackEvent('newsletter_subscribe', {
      value: 0.5,
      currency: 'COP',
    });
  },

  // Phone Call Click
  phoneClick: (source: string) => {
    trackEvent('phone_click', {
      source,
    });
  },

  // Social Media Click
  socialClick: (platform: string, url: string) => {
    trackEvent('social_click', {
      platform,
      url,
    });
  },

  // Scroll Depth
  scrollDepth: (percentage: number) => {
    trackEvent('scroll_depth', {
      percent: percentage,
    });
  },

  // Video Play
  videoPlay: (videoTitle: string) => {
    trackEvent('video_play', {
      video_title: videoTitle,
    });
  },
};
