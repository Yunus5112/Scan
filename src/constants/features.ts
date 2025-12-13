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
import phoneBatchScanning from '../assets/images/PhoneBatchScanning.png';
import signatureOverlay from '../assets/images/Signature.png';
import completedStamp from '../assets/images/Completed.png';
import paper from '../assets/images/Paper.png';

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
    title: 'Multiple Page Scan',
    subtitle: 'BATCH SCANNING',
    description:
      'Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.',
    phoneImage: phoneBatchScanning,
    overlayImages: [
      {
        src: paper,
        position: 'paper1',
        delay: 600,
      },
      {
        src: paper,
        position: 'paper2',
        delay: 800,
      },
      {
        src: paper,
        position: 'paper3',
        delay: 1000,
      },
    ],
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
