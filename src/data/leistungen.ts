export interface Leistung {
  id: 'foerderung' | 'technologie' | 'geschaeftsmodell';
  name: string;
  href: string;
  wasWirTun: string;
  fragestellungen: string[];
  ergebnis: string;
}

export const leistungen: Leistung[] = [
  {
    id: 'foerderung',
    name: 'Förderung',
    href: '/foerderungen',
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
