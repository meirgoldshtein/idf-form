
interface CombatPreferences {
    golani: number;
    armor: number;
    artillery: number;
    searchAndRescue: number;
  }
  
  interface SupportPreferences {
    targetingNCO: number;
    nimrodiSergeant: number;
    cook: number;
    sandwichFiller: number;
  }
  
  interface TechPreferences {
    fullstack: number;
    data: number;
    devops: number;
    duty: number;
  }
  
  interface IMilitaryForm {
    name: string;
    personalNote: string;
    combatPreferences: CombatPreferences;
    supportPreferences: SupportPreferences;
    techPreferences: TechPreferences;
    submissionDate: Date | null;
    lastModified: Date | null;
    status: 'draft' | 'submitted' | 'processed';
    version: number;
    [key: string]: any;
  }
  