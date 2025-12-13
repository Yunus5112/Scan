import type { ComponentType, SVGProps } from 'react';

export interface Feature {
  id: string;
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  subtitle: string;
  description: string;
  phoneImage: string;
}

export type FeatureId =
  | 'document-scanner'
  | 'sign-stamp'
  | 'batch-scanning'
  | 'advanced-filters'
  | 'export-share';

