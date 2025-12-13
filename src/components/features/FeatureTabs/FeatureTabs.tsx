import type { Feature } from '../../../types/features';
import styles from './FeatureTabs.module.css';

interface FeatureTabsProps {
  features: Feature[];
  activeFeatureId: string;
  onFeatureChange: (featureId: string) => void;
}

export function FeatureTabs({
  features,
  activeFeatureId,
  onFeatureChange,
}: FeatureTabsProps) {
  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabsList} role="tablist" aria-label="Features">
        {features.map((feature) => {
          const IconComponent = feature.icon;
          const isActive = feature.id === activeFeatureId;

          return (
            <button
              key={feature.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${feature.id}`}
              id={`tab-${feature.id}`}
              className={`${styles.tab} ${isActive ? styles.tabActive : ''}`}
              onClick={() => onFeatureChange(feature.id)}
              type="button"
            >
              <span
                className={styles.tabIcon}
                key={isActive ? `${feature.id}-active` : feature.id}
              >
                <IconComponent aria-hidden="true" />
              </span>
              <span
                className={styles.tabLabel}
                key={isActive ? `${feature.id}-label-active` : `${feature.id}-label`}
              >
                {feature.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

