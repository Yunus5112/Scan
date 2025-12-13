import {
  DocumentScannerIcon,
  SignStampIcon,
  BatchScanningIcon,
  AdvancedFiltersIcon,
  ExportShareIcon,
} from '../assets/icons';
import type { Feature } from '../types/features';

export const FEATURES: Feature[] = [
  {
    id: 'document-scanner',
    label: 'Document Scanner',
    icon: DocumentScannerIcon,
    title: 'Scan with Ease',
    subtitle: 'DOCUMENT SCANNER',
    description:
      'Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format.',
  },
  {
    id: 'sign-stamp',
    label: 'Sign & Stamp',
    icon: SignStampIcon,
    title: 'Sign & Stamp',
    subtitle: 'SIGN & STAMP',
    description:
      'Add your signature or stamp to any document quickly and securely. Perfect for contracts and official documents.',
  },
  {
    id: 'batch-scanning',
    label: 'Batch Scanning',
    icon: BatchScanningIcon,
    title: 'Batch Scanning',
    subtitle: 'BATCH SCANNING',
    description:
      'Scan multiple pages at once and combine them into a single document. Save time with our efficient batch processing.',
  },
  {
    id: 'advanced-filters',
    label: 'Advanced Filters',
    icon: AdvancedFiltersIcon,
    title: 'Advanced Filters',
    subtitle: 'ADVANCED FILTERS',
    description:
      'Enhance your scanned documents with powerful filters. Adjust brightness, contrast, and apply automatic corrections.',
  },
  {
    id: 'export-share',
    label: 'Export & Share',
    icon: ExportShareIcon,
    title: 'Export & Share',
    subtitle: 'EXPORT & SHARE',
    description:
      'Export your documents in multiple formats and share them instantly via email, cloud storage, or messaging apps.',
  },
];

