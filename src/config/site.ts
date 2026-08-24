export interface NavItem {
  label: string;
  href: string;
}

export const siteConfig = {
  name: 'Speedboat',
  tagline: 'Venture Development für Ihr Vorhaben — Förderung, Technologie, Geschäftsmodell.',
  description:
    'Speedboat begleitet Startups und etablierte Unternehmen bei drei ineinandergreifenden Aufgaben: öffentliche Förderungen einsammeln (FFG, aws, Wirtschaftsagentur Wien, EU-Programme), technische Machbarkeit und Architektur klären, und das Geschäftsmodell auf ein belastbares Fundament stellen.',
  locations: ['Wien', 'Linz'],

  nav: [
    { label: 'Förderung', href: '/foerderungen' },
    { label: 'Technologie', href: '/technologie' },
    { label: 'Geschäftsmodell', href: '/geschaeftsmodell' },
    { label: 'Pakete', href: '/pakete' },
    { label: 'Companion', href: '/companion' },
  ] satisfies NavItem[],

  ctaLabel: 'Termin buchen',
  ctaHref: '/#termin',

  /**
   * TODO: Noch kein Cal.com-Konto vorhanden. Sobald eines existiert, hier
   * den Cal-Link eintragen (das Format, das Cal.com als "calLink" nutzt,
   * z. B. "team-name/erstgespraech" — ohne https://cal.com/-Präfix).
   * Solange der Wert leer ist, zeigt die Terminbuchungs-Sektion einen
   * Mailto-Fallback statt des Kalender-Embeds.
   */
  bookingUrl: '',

  /**
   * TODO: Noch keine reale Kontakt-Mailadresse festgelegt. Platzhalter
   * (".example"-Domain, damit nichts Reales versehentlich adressiert
   * wird) — vor Go-Live durch die echte Adresse ersetzen.
   */
  contactEmail: 'kontakt@speedboat.example',

  /**
   * Externe Companion-Plattform (kugelblitz.ai). Login-pflichtig, daher kein
   * iFrame-Embed — nur ein direkter Link. Zentral hier, damit ein Wechsel auf
   * ein echtes Embed später nicht die ganze Seite durchsucht werden muss.
   *
   * TODO (Widerspruch): Der Link führt zu einem Profil mit Klarnamen
   * (".../p/normann_cowork") — das widerspricht der Personenanonymität der
   * übrigen Seite (keine Namen, keine Fotos, keine Lebensläufe). Vorerst
   * bewusst so belassen; vor Go-Live klären, ob ein neutraler Einstiegspunkt
   * bei kugelblitz.ai möglich ist oder der Klarname im Profil entfernt wird.
   */
  companionUrl: 'https://kugelblitz.ai/p/normann_cowork',
} as const;
