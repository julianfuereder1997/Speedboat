export interface Paket {
  id: string;
  name: string;
  description: string;
  audience: string;
  priceHint: string;
  price: {
    label: string;
    detail: string;
  };
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
}

export const pakete: Paket[] = [
  {
    id: 'roadmap',
    name: 'Roadmap',
    description:
      'Förder-Check und schriftliche Förder-Roadmap: Programmauswahl, Zeitachse und eine realistische Einschätzung Ihrer Chancen.',
    audience: 'Für Unternehmen, die erst wissen wollen, ob und was überhaupt geht.',
    priceHint: 'Fixpreis',
    price: {
      label: 'EUR 2.100 netto',
      detail: 'einmalig',
    },
    ctaLabel: 'Termin buchen',
    ctaHref: '/#termin',
  },
  {
    id: 'einreichung',
    name: 'Einreichung',
    description:
      'Alles aus Roadmap, plus vollständige Ausarbeitung und Einreichung — inklusive Finanzplan, Hearing-Vorbereitung und Rückfragenmanagement.',
    audience: 'Für Unternehmen mit konkretem Vorhaben und Einreichfrist.',
    priceHint: 'Fixpreis + Erfolgshonorar',
    price: {
      label: 'EUR 2.100 netto Upfront + Erfolgshonorar',
      detail: '10 % auf bewilligte Zuschüsse, 3 % auf zugesagte Darlehen',
    },
    ctaLabel: 'Termin buchen',
    ctaHref: '/#termin',
    featured: true,
  },
  {
    id: 'begleitung',
    name: 'Begleitung',
    description:
      'Laufende Förderbetreuung über mehrere Programme und Jahre hinweg — inklusive monatlichem Kontingent an Public Funding Hours, Business Development und Unterstützung bei der Ausfinanzierung.',
    audience: 'Für Unternehmen mit mehrjähriger Förderstrategie oder Förderportfolio.',
    priceHint: 'monatlich',
    price: {
      label: 'Monatliche Fee',
      detail: 'auf Anfrage',
    },
    ctaLabel: 'Anfrage stellen',
    ctaHref: '/kontakt',
  },
];
