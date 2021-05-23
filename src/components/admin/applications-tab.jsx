import React from 'react';
import ApplicationCard from './application-card';
import * as styles from '../../styles/components/admin/applications-tab.module.scss';

function ApplicationsTab() {
  return (
    <div className={styles.applicationsTabWrapper}>
      <div className={styles.applicationsListing}>
        <ApplicationCard />
        <ApplicationCard />
        <ApplicationCard />
        <ApplicationCard />
      </div>
    </div>
  );
}

export default ApplicationsTab;
