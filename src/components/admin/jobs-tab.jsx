import React from 'react';
import JobCard from './job-card';
import * as styles from '../../styles/components/admin/jobs-tab.module.scss';

function JobsTab() {
  return (
    <div className={styles.jobsTabWrapper}>
      <div className={styles.jobsListing}>
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </div>
  );
}

export default JobsTab;
