export type PersonaId = 'creator' | 'entrepreneur' | 'fresher';

export interface Persona {
  id: PersonaId;
  caseStudyNumber: string;
  name: string;
  age: string;
  tagline: string;
  category: string;
  profile: string;
  goal: string;
  budget: string;
  experience: string;
  startingEquipment: string;
  actualObjective: string;
  acquisitionSource: string;
  customerType: string;
  avatarUrl: string;
  subtitle: string;
  quote: string;
  invisibleRisk: string;
}

export type StageKey = 'discover' | 'contact' | 'intent' | 'purchase' | 'after';

export interface StageInfo {
  key: StageKey;
  label: string;
  stepIndex: number;
}
