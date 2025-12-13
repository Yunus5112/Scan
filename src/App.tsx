import { useState } from 'react';

import { FeatureTabs } from './components/features/FeatureTabs';
import { FEATURES } from './constants/features';
import styles from './App.module.css';

export function App() {
  const [activeFeatureId, setActiveFeatureId] = useState(FEATURES[0].id);

  const handleFeatureChange = (featureId: string) => {
    setActiveFeatureId(featureId);
  };

  return (
    <div className={styles.app}>
      <main className={styles.main}>
        {/* Feature content will be added here */}
        <div className={styles.contentPlaceholder}>
          <h2>Active Feature: {activeFeatureId}</h2>
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
