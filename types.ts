
export interface TableData {
  title: string;
  headers: string[];
  rows: (string | number)[][];
  analysis: string;
}

export interface DemographicItem {
  label: string;
  value: string;
  icon: React.ElementType;
  percentage: number;
}

export interface ChartItem {
  title:string;
  data: { name: string; value: number }[];
  color: string;
}

export interface Suggestion {
  title: string;
  point: string;
  icon: React.ElementType;
}

export interface SlideContent {
  type: 'title' | 'content' | 'tables' | 'demographics' | 'charts' | 'suggestions';
  title: string;
  subtitle?: string;
  author?: string;
  supervisor?: string;
  points?: { title?: string, text: string }[];
  description?: string;
  tables?: TableData[];
  data?: DemographicItem[];
  charts?: ChartItem[];
  suggestions?: Suggestion[];
}