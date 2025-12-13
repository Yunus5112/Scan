import type { ComponentType, SVGProps } from 'react';

export interface Feature {
  id: string;
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  subtitle: string;
  description: string;
  phoneImage: string;
  overlayImages?: {
    src: string;
    position: 'signature' | 'stamp' | 'paper1' | 'paper2' | 'paper3' | 'leftBar' | 'rightBar';
    delay: number; // Animation delay in ms
  }[];
}

export type FeatureId =
  | 'document-scanner'
  | 'sign-stamp'
  | 'batch-scanning'
  | 'advanced-filters'
  | 'export-share';

