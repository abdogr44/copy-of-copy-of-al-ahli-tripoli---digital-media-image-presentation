
import React from 'react';

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

// Legacy SlideContent interface removed in favor of discriminated union types below.

export type TitleSlideContent = {
  type: 'title';
  title: string;
  subtitle?: string;
  author?: string;
  supervisor?: string;
};

export type IntroSlideContent = {
  type: 'intro';
  title: string;
  description?: string;
  highlights?: { title: string; text: string; icon?: 'sparkles' | 'check' | 'chart' }[];
};

export type ContentSlideContent = {
  type: 'content';
  title: string;
  points: string[];
};

export type TablesSlideContent = {
  type: 'tables';
  title: string;
  description?: string;
  tables: {
    title: string;
    headers: string[];
    rows: (string | number)[][];
  }[];
};

export type DemographicsSlideContent = {
  type: 'demographics';
  title: string;
  description?: string;
  data: {
    label: string;
    value: number;
  }[];
};

export type ChartsSlideContent = {
  type: 'charts';
  title: string;
  description?: string;
  charts: {
    title: string;
    value: number;
  }[];
};

export type SuggestionsSlideContent = {
  type: 'suggestions';
  title: string;
  suggestions: {
    icon: 'trendUp' | 'shieldCheck' | 'sparkles';
    title: string;
    text: string;
  }[];
};

export type ConclusionSlideContent = {
  type: 'conclusion';
  title: string;
  points: string[];
};

export type SlideContent =
  | TitleSlideContent
  | IntroSlideContent
  | ContentSlideContent
  | TablesSlideContent
  | DemographicsSlideContent
  | ChartsSlideContent
  | SuggestionsSlideContent
  | ConclusionSlideContent;