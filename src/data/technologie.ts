export interface TechnologieBlock {
  id: string;
  title: string;
  description: string;
}

export const technologieBloecke: TechnologieBlock[] = [
  {
    id: 'cloud',
    title: 'Cloud-Architektur und Cloud-Transformation',
    description:
      'Wir entwickeln die Zielarchitektur für Ihre Cloud-Umgebung und legen den Migrationspfad dorthin fest. Dazu gehört auch das Betriebsmodell — wer welche Verantwortung nach der Migration trägt.',
  },
  {
    id: 'data-science',
    title: 'Data Science und Machine Learning',
    description:
      'Wir bewerten die fachliche und technische Machbarkeit von Data-Science- und ML-Vorhaben und prüfen, ob die vorhandene Datengrundlage trägt. Die Umsetzung begleiten wir von der ersten Modellierung bis zum produktiven Einsatz.',
  },
  {
    id: 'automatisierung',
    title: 'Automatisierung und Software Development',
    description:
      'Wir automatisieren wiederkehrende Prozesse und strukturieren Eigenentwicklungen so, dass sie wartbar bleiben. Das reicht von einzelnen Automatisierungen bis zu vollständigen Softwarelösungen.',
  },
  {
    id: 'security',
    title: 'Security und Managed Services',
    description:
      'Wir entwickeln die Sicherheitsstrategie für Ihre IT-Landschaft und übernehmen auf Wunsch die laufende Betriebsverantwortung. Compliance-Anforderungen werden dabei von Anfang an mitgedacht, nicht nachträglich aufgesetzt.',
  },
];
