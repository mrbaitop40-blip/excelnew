export type CategoryName = 
  | "Math & Statistics"
  | "Lookup & Reference"
  | "Text Functions"
  | "Date & Time"
  | "Logical"
  | "Financial"
  | "Array & Dynamic Array"
  | "Database Functions";

export interface FormulaParameter {
  name: string;
  description: string;
}

export interface FormulaData {
  id: string;
  name: string;
  category: CategoryName;
  definition: string;
  syntax: string;
  parameters: FormulaParameter[];
  exampleScenario: string;
  // First row is headers. 
  exampleTable: string[][]; 
  exampleCode: string;
  expectedResult: string;
  tips: string[];
}

export interface CategoryData {
  name: CategoryName;
  description: string;
  icon: string; // Icon name reference
}