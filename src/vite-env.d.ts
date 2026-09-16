/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Measurement ID de Google Analytics 4 (G-XXXXXXXXXX). Sin él, GA4 no se carga. */
  readonly VITE_GA4_ID?: string;
  /** Endpoint que recibe los leads del formulario de prueba. Sin él no se envía nada. */
  readonly VITE_LEADS_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.svg' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

declare module 'figma:asset/*' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

