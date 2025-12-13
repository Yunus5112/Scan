import type { Feature } from '../../../types/features';
import styles from './FeatureContent.module.css';

interface FeatureContentProps {
  feature: Feature;
}

export function FeatureContent({ feature }: FeatureContentProps) {
  return (
    <div className={styles.content}>
      <span className={styles.subtitle}>{feature.subtitle}</span>
      <h2 className={styles.title}>{feature.title}</h2>
      <p className={styles.description}>{feature.description}</p>
      <button type="button" className={styles.learnMoreButton}>
        Learn More
      </button>
    </div>
  );
}

