export interface NavItem {
  label: string;
  href: string;
}

export const siteConfig = {
  name: 'Speedboat',
  tagline: 'Öffentliche Förderungen. Erste Einreichung innerhalb eines Monats.',
  description:
    'Speedboat begleitet Startups und etablierte Unternehmen von der Idee bis zur Auszahlung öffentlicher Förderungen (FFG, aws, Wirtschaftsagentur Wien, EU-Programme) — und danach bei Ausfinanzierung und Business Development.',
  locations: ['Wien', 'Linz'],

  nav: [
    { label: 'Förderungen', href: '/foerderungen' },
    { label: 'Pakete', href: '/pakete' },
    { label: 'Companion', href: '/companion' },
    { label: 'Über uns', href: '/ueber-uns' },
  ] satisfies NavItem[],

  ctaLabel: 'Erstgespräch buchen',
  ctaHref: '/kontakt',

  /**
   * Externe Companion-Plattform (kugelblitz.ai). Login-pflichtig, daher kein
   * iFrame-Embed — nur ein direkter Link. Zentral hier, damit ein Wechsel auf
   * ein echtes Embed später nicht die ganze Seite durchsucht werden muss.
   */
  companionUrl: 'https://kugelblitz.ai/p/normann_cowork',
} as const;
