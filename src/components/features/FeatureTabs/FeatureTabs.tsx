import type { Feature, FeatureId } from '../../../types/features';
import styles from './FeatureTabs.module.css';

interface FeatureTabsProps {
  features: Feature[];
  activeFeatureId: FeatureId;
  onFeatureChange: (featureId: FeatureId) => void;
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
            <div key={feature.id} className={styles.tabItem}>
              <button
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${feature.id}`}
                id={`tab-${feature.id}`}
                className={`${styles.tab} ${isActive ? styles.tabActive : ''}`}
                onClick={() => onFeatureChange(feature.id)}
                type="button"
              >
                <span className={styles.tabIcon}>
                  <IconComponent aria-hidden="true" />
                </span>
                <span className={styles.tabLabel}>{feature.label}</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
