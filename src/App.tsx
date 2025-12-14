import { useState } from 'react';

import { FeatureContent } from './components/features/FeatureContent';
import { FeatureTabs } from './components/features/FeatureTabs';
import { PhoneDisplay } from './components/features/PhoneDisplay';
import { FEATURES } from './constants/features';
import type { FeatureId } from './types/features';
import styles from './App.module.css';

export function App() {
  const [activeFeatureId, setActiveFeatureId] = useState<FeatureId>(FEATURES[0].id);

  const handleFeatureChange = (featureId: FeatureId) => {
    setActiveFeatureId(featureId);
  };

  const activeFeature = FEATURES.find((f) => f.id === activeFeatureId) || FEATURES[0];

  return (
    <div className={styles.app}>
      <main className={styles.main}>
        <div className={styles.phoneContainer} key={activeFeature.id}>
          <PhoneDisplay feature={activeFeature} />
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
