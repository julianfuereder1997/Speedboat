export interface RoadmapStage {
  number: number;
  title: string;
  teaser: string;
  whatHappens: string;
  whatWeDo: string;
  whatClientContributes: string;
  duration: string;
  /** Nur gesetzt, wenn die Dauer nicht unsere Leistungszeit ist, sondern von einer externen Stelle abhängt. */
  durationNote?: string;
}

export const roadmapStages: RoadmapStage[] = [
  {
    number: 1,
    title: 'Förder-Check',
    teaser: 'Passt das Vorhaben? Welche Programme kommen infrage?',
    whatHappens:
      'Wir prüfen Ihr Vorhaben gegen die aktuell relevanten Programme von FFG, aws, Wirtschaftsagentur Wien und der EU.',
    whatWeDo: 'Grobprüfung der Förderfähigkeit und erste Einschätzung passender Programme.',
    whatClientContributes:
      'Kurzbeschreibung des Vorhabens und der aktuellen Unternehmenssituation.',
    duration: '1–2 Wochen',
  },
  {
    number: 2,
    title: 'Förder-Roadmap',
    teaser: 'Zeitachse, Programmkombination, Budgetlogik',
    whatHappens:
      'Aus dem Förder-Check wird eine schriftliche Roadmap mit Zeitachse und Programmkombination.',
    whatWeDo: 'Wir legen Zeitachse, Programmkombination und Budgetlogik fest.',
    whatClientContributes:
      'Budget- und Projektplanungsdaten sowie Rückmeldung zur vorgeschlagenen Roadmap.',
    duration: '1–2 Wochen',
  },
  {
    number: 3,
    title: 'Framing & Antrag',
    teaser: 'Inhaltliche Ausarbeitung, Finanzplan, Konsortium',
    whatHappens:
      'Der Antrag wird inhaltlich ausgearbeitet — inklusive Finanzplan und, falls nötig, Konsortium.',
    whatWeDo: 'Ausarbeitung von Projektbeschreibung, Finanzplan und Konsortialstruktur.',
    whatClientContributes: 'Fachliche Inhalte und Zahlen sowie Feedback zu Zwischenständen.',
    duration: '2–4 Wochen',
  },
  {
    number: 4,
    title: 'Einreichung',
    teaser: 'Fristgerecht, formal sauber',
    whatHappens: 'Der fertige Antrag wird fristgerecht und formal korrekt eingereicht.',
    whatWeDo:
      'Finale formale Prüfung und fristgerechte Einreichung bei der zuständigen Förderstelle.',
    whatClientContributes: 'Finale Freigabe der Antragsunterlagen.',
    duration: 'fristgebunden',
  },
  {
    number: 5,
    title: 'Hearing & Review',
    teaser: 'Vorbereitung, Probelauf, Rückfragenmanagement',
    whatHappens: 'Die Förderstelle prüft den Antrag, häufig inklusive Hearing.',
    whatWeDo:
      'Vorbereitung und Probelauf für das Hearing sowie Beantwortung von Rückfragen der Förderstelle.',
    whatClientContributes:
      'Verfügbarkeit für Vorbereitung und Hearing sowie fachliche Antworten auf Rückfragen.',
    duration: '4–8 Wochen nach Einreichung',
    durationNote: 'Abhängig vom Fördergeber — nicht unsere Leistungszeit.',
  },
  {
    number: 6,
    title: 'Bewilligung & Reporting',
    teaser: 'Abrechnung, Berichtspflichten, Folgeanträge',
    whatHappens: 'Nach der Bewilligung folgen Abrechnung und laufende Berichtspflichten.',
    whatWeDo:
      'Unterstützung bei Abrechnung und Berichtspflichten sowie Vorbereitung möglicher Folgeanträge.',
    whatClientContributes: 'Laufende Projekt- und Kostendaten für die Abrechnung.',
    duration: 'laufend',
    durationNote: 'Abhängig vom Fördergeber und Projektlaufzeit — nicht unsere Leistungszeit.',
  },
];
