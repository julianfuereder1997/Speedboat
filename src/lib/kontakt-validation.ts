import { pakete } from '../data/pakete';

/**
 * Formular-Validierung für /kontakt — bewusst ohne DOM-Abhängigkeiten
 * geschrieben, damit dieselbe Funktion clientseitig (siehe KontaktForm.astro)
 * UND später serverseitig wiederverwendet werden kann.
 *
 * Anbindung an ein echtes Backend (noch nicht umgesetzt):
 * 1. src/pages/api/kontakt.ts anlegen mit `export const prerender = false;`
 *    (erfordert einen Astro-Adapter, z. B. @astrojs/node — aktuell nicht
 *    installiert, da noch kein Hosting-Ziel feststeht).
 * 2. Dort `validateKontaktForm(await request.json())` aufrufen.
 * 3. Bei Erfolg über Resend (https://resend.com) versenden, z. B.:
 *    `new Resend(import.meta.env.RESEND_API_KEY).emails.send({ ... })`.
 *    RESEND_API_KEY als Secret in der Deployment-Umgebung hinterlegen,
 *    niemals im Repository.
 */

export const PAKET_OPTIONS = [...pakete.map((paket) => paket.id), 'unsicher'] as const;
export type PaketOption = (typeof PAKET_OPTIONS)[number];

export const VORHABEN_MAX_LENGTH = 240;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface KontaktFormData {
  name: string;
  unternehmen: string;
  email: string;
  vorhaben: string;
  paket: PaketOption;
}

export type KontaktFormErrors = Partial<Record<keyof KontaktFormData, string>>;

export type KontaktValidationResult =
  { success: true; data: KontaktFormData } | { success: false; errors: KontaktFormErrors };

export function validateKontaktForm(input: Record<string, unknown>): KontaktValidationResult {
  const errors: KontaktFormErrors = {};

  const name = typeof input.name === 'string' ? input.name.trim() : '';
  if (!name) errors.name = 'Bitte geben Sie Ihren Namen an.';

  const unternehmen = typeof input.unternehmen === 'string' ? input.unternehmen.trim() : '';
  if (!unternehmen) errors.unternehmen = 'Bitte geben Sie Ihr Unternehmen an.';

  const email = typeof input.email === 'string' ? input.email.trim() : '';
  if (!email) {
    errors.email = 'Bitte geben Sie Ihre E-Mail-Adresse an.';
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = 'Das sieht nicht nach einer gültigen E-Mail-Adresse aus.';
  }

  const vorhaben = typeof input.vorhaben === 'string' ? input.vorhaben.trim() : '';
  if (!vorhaben) {
    errors.vorhaben = 'Bitte beschreiben Sie Ihr Vorhaben kurz.';
  } else if (vorhaben.length > VORHABEN_MAX_LENGTH) {
    errors.vorhaben = `Bitte kürzer fassen (max. ${VORHABEN_MAX_LENGTH} Zeichen).`;
  }

  const paket = typeof input.paket === 'string' ? input.paket : '';
  if (!(PAKET_OPTIONS as readonly string[]).includes(paket)) {
    errors.paket = 'Bitte wählen Sie ein Wunschpaket.';
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  return {
    success: true,
    data: { name, unternehmen, email, vorhaben, paket: paket as PaketOption },
  };
}
