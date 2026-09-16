/**
 * Registro de leads de la clase de prueba.
 *
 * El formulario abre WhatsApp con el mensaje ya escrito, pero si la persona no pulsa
 * enviar —se arrepiente, cierra la pestaña, no tiene WhatsApp Web— el dato se pierde y
 * la academia ni siquiera se entera de que alguien lo llenó. Esto lo guarda antes.
 *
 * Para activarlo basta con definir el endpoint; no hay que tocar código:
 *
 *   VITE_LEADS_ENDPOINT=https://script.google.com/macros/s/<ID>/exec
 *
 * Sin esa variable no se envía nada y el formulario sigue funcionando igual.
 * El Apps Script que lo recibe está documentado en docs/LEADS.md.
 */

export const LEADS_ENDPOINT: string = import.meta.env.VITE_LEADS_ENDPOINT ?? '';

export interface TrialLead {
  name: string;
  phone: string;
  group: string;
  program: string;
}

/**
 * Envía el lead sin bloquear. Devuelve de inmediato: quien llama necesita abrir
 * WhatsApp dentro del mismo gesto del usuario, y esperar una respuesta de red haría
 * que el bloqueador de ventanas emergentes cancelara la apertura.
 */
export function saveLead(lead: TrialLead): void {
  if (typeof window === 'undefined') return;

  if (!LEADS_ENDPOINT) {
    if (import.meta.env.DEV) console.log('[Leads] sin VITE_LEADS_ENDPOINT:', lead);
    return;
  }

  const payload = JSON.stringify({
    ...lead,
    source: 'web_clase_prueba',
    submittedAt: new Date().toISOString(),
    page: window.location.href,
  });

  // text/plain a propósito: convierte la petición en "simple" y evita el preflight
  // CORS, que los web apps de Apps Script no responden. No se lee la respuesta.
  const type = 'text/plain;charset=utf-8';

  try {
    // sendBeacon está hecho justo para esto: sobrevive a que la pestaña pierda el
    // foco cuando se abre WhatsApp, cosa que un fetch normal no garantiza.
    if (navigator.sendBeacon?.(LEADS_ENDPOINT, new Blob([payload], { type }))) return;
  } catch {
    // sendBeacon puede fallar por cuota; cae al fetch de abajo.
  }

  void fetch(LEADS_ENDPOINT, {
    method: 'POST',
    mode: 'no-cors',
    keepalive: true,
    headers: { 'Content-Type': type },
    body: payload,
  }).catch(() => {
    // Nada que hacer desde el navegador: el lead sigue su camino por WhatsApp.
  });
}
