import { useState } from 'react';

import { FeatureContent } from './components/features/FeatureContent';
import { FeatureTabs } from './components/features/FeatureTabs';
import { FEATURES } from './constants/features';
import styles from './App.module.css';

export function App() {
  const [activeFeatureId, setActiveFeatureId] = useState(FEATURES[0].id);

  const handleFeatureChange = (featureId: string) => {
    setActiveFeatureId(featureId);
  };

  const activeFeature = FEATURES.find((f) => f.id === activeFeatureId) || FEATURES[0];

  return (
    <div className={styles.app}>
      <main className={styles.main}>
        <div className={styles.phoneContainer}>
          <img
            key={activeFeature.id}
            src={activeFeature.phoneImage}
            alt={activeFeature.title}
            className={styles.phoneImage}
          />
        </div>
        <div className={styles.contentContainer}>
          <FeatureContent feature={activeFeature} />
        </div>
      </main>

      <FeatureTabs
        features={FEATURES}
        activeFeatureId={activeFeatureId}
        onFeatureChange={handleFeatureChange}
      />
    </div>
  );
}
