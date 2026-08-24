export interface GeschaeftsmodellBlock {
  id: string;
  title: string;
  description: string;
}

export const geschaeftsmodellBloecke: GeschaeftsmodellBlock[] = [
  {
    id: 'entwicklung',
    title: 'Geschäftsmodellentwicklung',
    description:
      'Wir arbeiten Zielgruppe, Wertversprechen, Erlösmodell und Kostenstruktur heraus und prüfen sie auf Konsistenz. Ergebnis ist ein Geschäftsmodell, das intern trägt und sich extern — gegenüber Förderstellen, Investoren oder Banken — nachvollziehbar darstellen lässt.',
  },
  {
    id: 'finanzplanung',
    title: 'Finanzplanung und Kapitalbedarf',
    description:
      'Wir erstellen den Finanzplan für die kommenden Jahre und leiten daraus den konkreten Kapitalbedarf ab. Annahmen zu Umsatz, Kosten und Liquidität werden transparent dokumentiert, damit sie in Förderanträgen und Finanzierungsgesprächen bestehen.',
  },
  {
    id: 'ausfinanzierung',
    title: 'Ausfinanzierung',
    description:
      'Wir begleiten die Ausfinanzierung des Vorhabens — von der Einschätzung, welche Finanzierungsquellen zum Kapitalbedarf passen, bis zur Vorbereitung auf Gespräche mit Investoren, Banken oder Förderstellen.',
  },
  {
    id: 'skalierung',
    title: 'Skalierungslogik',
    description:
      'Wir arbeiten heraus, welche Hebel Umsatz und Marge in der Skalierung treiben und wo strukturelle Grenzen liegen. So wird aus dem Geschäftsmodell ein Plan, der auch über die erste Phase hinaus trägt.',
  },
];
