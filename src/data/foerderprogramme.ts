export interface Foerderprogramm {
  id: string;
  name: string;
  purpose: string;
  phase: string;
  fundingType: string;
  sourceLabel: string;
  sourceUrl: string;
}

/**
 * Bewusst ohne konkrete Fördersummen, -quoten oder Fristen — diese ändern sich
 * laufend und müssten sonst permanent nachgepflegt werden. Nur Zweck,
 * Zielphase und Finanzierungsart, wie öffentlich auf den Seiten der
 * jeweiligen Förderstelle dargestellt.
 */
export const foerderprogramme: Foerderprogramm[] = [
  {
    id: 'ffg',
    name: 'FFG',
    purpose:
      'Forschungsförderungsgesellschaft des Bundes für Forschung, Entwicklung und Innovation — technologieoffen, von grundlagennahen bis marktnahen Projekten.',
    phase: 'Unternehmen jeder Größe und Phase, inklusive Unternehmen in Gründung.',
    fundingType:
      'Mischfinanzierung aus Zuschuss und zinsgünstigem Darlehen, je nach Programm; bei Großprojekten zusätzlich Kredit-Haftungen möglich.',
    sourceLabel: 'ffg.at',
    sourceUrl: 'https://www.ffg.at/foerderungen',
  },
  {
    id: 'aws',
    name: 'aws',
    purpose:
      'Förderbank des Bundes (Austria Wirtschaftsservice) für Unternehmensfinanzierung — u. a. Gründung, Investitionen, Innovation und Kapitalstärkung.',
    phase: 'Breites Spektrum von Start-ups (z. B. in der Pre-Seed-Phase) bis zu etablierten KMU.',
    fundingType: 'Zuschüsse, Kredite/Darlehen und Garantien im Einsatz, je nach Programm.',
    sourceLabel: 'aws.at',
    sourceUrl: 'https://www.aws.at/',
  },
  {
    id: 'wirtschaftsagentur-wien',
    name: 'Wirtschaftsagentur Wien',
    purpose:
      'Förder-, Beratungs- und Vernetzungsstelle der Stadt Wien für Wiener Unternehmen und Gründer:innen — u. a. Innovation, Digitalisierung, Standort.',
    phase:
      'Gründer:innen sowie bestehende Klein- und Mittelunternehmen mit Sitz bzw. Betriebsstätte in Wien.',
    fundingType: 'Nicht rückzahlbare Zuschüsse.',
    sourceLabel: 'wirtschaftsagentur.at',
    sourceUrl: 'https://wirtschaftsagentur.at/',
  },
  {
    id: 'eu-programme',
    name: 'EU-Programme',
    purpose:
      'Forschungs- und Innovationsförderung auf EU-Ebene für Projekte mit europäischer Dimension, u. a. über den European Innovation Council (EIC) im Rahmen von Horizon Europe.',
    phase:
      'Von forschungsnahen Projekten bis zu marktreifen, skalierenden Start-ups und KMU (z. B. EIC Accelerator).',
    fundingType:
      'Je nach Programm Zuschuss, Beteiligung (Eigenkapital) oder eine Mischform aus beidem.',
    sourceLabel: 'eic.ec.europa.eu',
    sourceUrl: 'https://eic.ec.europa.eu/',
  },
];
