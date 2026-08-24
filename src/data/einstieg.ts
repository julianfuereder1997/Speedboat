import type { Leistung } from './leistungen';
import type { Paket } from './pakete';

export interface PaketEmpfehlung {
  paketId: Paket['id'];
  bedingung?: string;
}

export interface EinstiegsOption {
  id: string;
  label: string;
  description: string;
  /** Erste Stelle = Schwerpunkt/Priorität. */
  schwerpunkt: [Leistung['id'], Leistung['id']];
  /** true = die zwei Leistungen sind zeitlich gestaffelt (erst/dann), nicht parallel. */
  sequentiell: boolean;
  begruendung: string;
  pakete: PaketEmpfehlung[];
}

export const einstiegsOptionen: EinstiegsOption[] = [
  {
    id: 'idee',
    label: 'Idee ohne Struktur',
    description: 'Eine Idee existiert, aber noch keine Struktur dahinter.',
    schwerpunkt: ['geschaeftsmodell', 'foerderung'],
    sequentiell: true,
    begruendung:
      'Ohne Struktur braucht es zuerst ein tragfähiges Geschäftsmodell — der Förder-Check folgt, sobald klar ist, wohin die Idee soll.',
    pakete: [{ paketId: 'roadmap' }],
  },
  {
    id: 'prototyp',
    label: 'Prototyp ohne Finanzierung',
    description: 'Ein Prototyp funktioniert, die Finanzierung fehlt noch.',
    schwerpunkt: ['foerderung', 'geschaeftsmodell'],
    sequentiell: false,
    begruendung:
      'Der Prototyp steht — jetzt zählen Fördermittel und eine tragfähige Finanzierung parallel.',
    pakete: [{ paketId: 'einreichung' }],
  },
  {
    id: 'umsatz',
    label: 'Umsatz und Skalierungsbedarf',
    description: 'Erste Umsätze stehen, jetzt geht es ums Skalieren.',
    schwerpunkt: ['geschaeftsmodell', 'technologie'],
    sequentiell: false,
    begruendung:
      'Skalierung braucht eine Architektur, die mitwächst, und eine Kapitalplanung, die mit ihr Schritt hält.',
    pakete: [{ paketId: 'begleitung' }],
  },
  {
    id: 'etabliert',
    label: 'Etabliert mit Innovationsvorhaben',
    description: 'Etabliertes Unternehmen mit einem konkreten Innovationsvorhaben.',
    schwerpunkt: ['foerderung', 'technologie'],
    sequentiell: false,
    begruendung:
      'Ein Innovationsvorhaben braucht in der Regel Forschungsförderung und eine belastbare technische Machbarkeitsbewertung.',
    pakete: [
      { paketId: 'einreichung', bedingung: 'bei einem einzelnen Vorhaben' },
      { paketId: 'begleitung', bedingung: 'bei mehreren parallelen Innovationsvorhaben' },
    ],
  },
];
