/**
 * Google Analytics 4 Utilities
 * 
 * Para activar:
 * 1. Crear cuenta en https://analytics.google.com/
 * 2. Obtener Measurement ID (G-XXXXXXXXXX)
 * 3. Agregar gtag script en index.html (ver comentario)
 * 4. Llamar trackEvent() en acciones importantes
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
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  } else {
    // En desarrollo, log a consola
    if (process.env.NODE_ENV === 'development') {
      console.log('[Analytics]', eventName, eventParams);
    }
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
  trialFormSubmit: (formData: { name: string; phone: string }) => {
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
