import type { Feature } from '../../../types/features';
import styles from './PhoneDisplay.module.css';

interface PhoneDisplayProps {
  feature: Feature;
}

export function PhoneDisplay({ feature }: PhoneDisplayProps) {
  return (
    <div className={styles.container}>
      <img
        key={feature.id}
        src={feature.phoneImage}
        alt={feature.title}
        className={styles.phoneImage}
      />
      {feature.overlayImages?.map((overlay, index) => (
        <img
          key={`${feature.id}-overlay-${index}`}
          src={overlay.src}
          alt=""
          className={`${styles.overlay} ${styles[overlay.position]}`}
          style={{ animationDelay: `${overlay.delay}ms` }}
        />
      ))}
    </div>
  );
}

