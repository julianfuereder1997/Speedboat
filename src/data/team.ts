export interface TeamMember {
  id: string;
  name: string;
  lastNameTodo?: boolean;
  focus: string[];
  bio: string;
}

export const team: TeamMember[] = [
  {
    id: 'normann',
    name: 'Normann Lindner',
    focus: ['Förderstrategie', 'Netzwerk', 'Antrags-Review'],
    bio: 'Verantwortet die Förderstrategie bei Speedboat, bringt sein Netzwerk in der österreichischen Förderlandschaft ein und übernimmt das Review von Anträgen vor der Einreichung.',
  },
  {
    id: 'christian',
    name: 'Christian',
    lastNameTodo: true,
    focus: ['KPMG-Hintergrund', 'Betriebswirtschaftliche Strukturierung', 'Operative Führung'],
    bio: 'Bringt seinen Hintergrund bei KPMG in die betriebswirtschaftliche Strukturierung von Förderprojekten ein und verantwortet die operative Führung bei Speedboat.',
  },
  {
    id: 'julian',
    name: 'Julian Füreder-Kitzmüller',
    focus: ['Finanzplanung', 'Automatisierung', 'Umsetzungsgeschwindigkeit'],
    bio: 'Verantwortet Finanzplanung und den Einsatz von Automatisierung bei Speedboat — und damit die Geschwindigkeit, mit der Vorhaben von der Roadmap zur Einreichung kommen.',
  },
];
