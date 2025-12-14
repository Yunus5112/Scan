import type { ComponentType, SVGProps } from 'react';

/**
 * Feature ID'leri - yeni feature eklenirse buraya da ekle
 */
export type FeatureId =
  | 'document-scanner'
  | 'sign-stamp'
  | 'batch-scanning'
  | 'advanced-filters'
  | 'export-share';

/**
 * Overlay pozisyonları
 */
export type OverlayPosition =
  | 'signature'
  | 'stamp'
  | 'paper1'
  | 'paper2'
  | 'paper3'
  | 'leftBar'
  | 'rightBar'
  | 'arrow'
  | 'pdfFile'
  | 'jpgFile'
  | 'txtFile';

/**
 * Overlay image yapısı
 */
export interface OverlayImage {
  src: string;
  position: OverlayPosition;
  delay: number; // Animation delay in ms
}

/**
 * Feature yapısı
 */
export interface Feature {
  id: FeatureId;
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  subtitle: string;
  description: string;
  phoneImage: string;
  overlayImages?: OverlayImage[];
}

