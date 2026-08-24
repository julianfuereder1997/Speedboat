export interface Leistung {
  id: 'foerderung' | 'technologie' | 'geschaeftsmodell';
  name: string;
  href: string;
  satz: string;
  stichworte: [string, string, string];
  wasWirTun: string;
  fragestellungen: string[];
  ergebnis: string;
}

export const leistungen: Leistung[] = [
  {
    id: 'foerderung',
    name: 'Förderung',
    href: '/foerderungen',
    satz: 'Wir sammeln öffentliche Fördermittel für Ihr Vorhaben ein — von der Roadmap bis zur Auszahlung.',
    stichworte: ['FFG & aws', 'Antragserstellung', 'Hearing-Vorbereitung'],
    wasWirTun:
      'Wir sammeln öffentliche Fördermittel für Ihr Vorhaben ein — von FFG über aws und Wirtschaftsagentur Wien bis zu EU-Programmen. Förder-Roadmap, Antragserstellung, Einreichung, Hearing, Reporting.',
    fragestellungen: [
      'Welche Programme passen zu unserem Vorhaben?',
      'Wie kombinieren wir mehrere Förderquellen sinnvoll?',
      'Wie bereiten wir uns auf ein Hearing vor?',
    ],
    ergebnis:
      'Ein eingereichter, formal sauberer Antrag — im Idealfall innerhalb eines Monats nach Projektstart.',
  },
  {
    id: 'technologie',
    name: 'Technologie',
    href: '/technologie',
    satz: 'Wir bewerten technische Machbarkeit und begleiten Architektur bis zur Umsetzung.',
    stichworte: ['Cloud-Architektur', 'Data Science & ML', 'Automatisierung'],
    wasWirTun:
      'Wir bewerten die technische Machbarkeit Ihres Vorhabens, treffen Architekturentscheidungen und begleiten die Umsetzung — Cloud-Architektur und -Transformation, Automatisierung, Data Science und Machine Learning, Security.',
    fragestellungen: [
      'Ist die Idee technisch umsetzbar?',
      'Welche Architektur trägt langfristig?',
      'Wo automatisieren wir zuerst?',
    ],
    ergebnis:
      'Eine belastbare technische Einschätzung und Architekturentscheidung, auf der Förderantrag und Geschäftsmodell aufbauen können.',
  },
  {
    id: 'geschaeftsmodell',
    name: 'Geschäftsmodell',
    href: '/geschaeftsmodell',
    satz: 'Wir entwickeln Geschäftsmodell, Finanzplanung und Skalierungslogik.',
    stichworte: ['Geschäftsmodell', 'Finanzplanung', 'Skalierungslogik'],
    wasWirTun:
      'Wir entwickeln das Geschäftsmodell, planen die Finanzen, begleiten die Ausfinanzierung und arbeiten die Skalierungslogik aus.',
    fragestellungen: [
      'Wo kann das Vorhaben hin?',
      'Welches Erlösmodell trägt?',
      'Wie sieht der Kapitalbedarf über drei Jahre aus?',
    ],
    ergebnis: 'Ein belastbarer Plan von der Vision zur finanzierbaren Umsetzung.',
  },
];
