import {
  DocumentScannerIcon,
  SignStampIcon,
  BatchScanningIcon,
  AdvancedFiltersIcon,
  ExportShareIcon,
} from '../assets/icons';
import type { Feature } from '../types/features';

import phoneDocumentScanner from '../assets/images/PhoneDocumentScanner.png';
import phoneSignAndStamp from '../assets/images/PhoneSignAndStamp.png';
import signatureOverlay from '../assets/images/Signature.png';
import completedStamp from '../assets/images/Completed.png';

export const FEATURES: Feature[] = [
  {
    id: 'document-scanner',
    label: 'Document Scanner',
    icon: DocumentScannerIcon,
    title: 'Scan with Ease',
    subtitle: 'DOCUMENT SCANNER',
    description:
      'Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format.',
    phoneImage: phoneDocumentScanner,
  },
  {
    id: 'sign-stamp',
    label: 'Sign & Stamp',
    icon: SignStampIcon,
    title: 'One-Tap Focus',
    subtitle: 'SIGN & STAMP',
    description:
      'Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!',
    phoneImage: phoneSignAndStamp,
    overlayImages: [
      {
        src: signatureOverlay,
        position: 'signature',
        delay: 600,
      },
      {
        src: completedStamp,
        position: 'stamp',
        delay: 900,
      },
    ],
  },
  {
    id: 'batch-scanning',
    label: 'Batch Scanning',
    icon: BatchScanningIcon,
    title: 'Batch Scanning',
    subtitle: 'BATCH SCANNING',
    description:
      'Scan multiple pages at once and combine them into a single document. Save time with our efficient batch processing.',
    phoneImage: phoneDocumentScanner,
  },
  {
    id: 'advanced-filters',
    label: 'Advanced Filters',
    icon: AdvancedFiltersIcon,
    title: 'Advanced Filters',
    subtitle: 'ADVANCED FILTERS',
    description:
      'Enhance your scanned documents with powerful filters. Adjust brightness, contrast, and apply automatic corrections.',
    phoneImage: phoneDocumentScanner,
  },
  {
    id: 'export-share',
    label: 'Export & Share',
    icon: ExportShareIcon,
    title: 'Export & Share',
    subtitle: 'EXPORT & SHARE',
    description:
      'Export your documents in multiple formats and share them instantly via email, cloud storage, or messaging apps.',
    phoneImage: phoneDocumentScanner,
  },
];
