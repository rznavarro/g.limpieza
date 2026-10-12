/**
 * Formats a number to Chilean Peso style with dots: $35.000
 */
export function formatCLP(amount: number): string {
  const parts = Math.round(amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return `$${parts}`;
}

export const PHONE_NUMBER = '+56 9 8550 0549';
export const PHONE_HREF = 'tel:+56985500549';
export const WHATSAPP_BASE = 'https://wa.me/56985500549';
export const EMAIL_PRIMARY = 'contacto@grupolimpieza.cl';
export const EMAIL_SECONDARY = 'grupolimpieza.rm@gmail.com';

/**
 * Builds a WhatsApp URL with URL-encoded text.
 */
export function buildWhatsAppLink(message: string): string {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}
