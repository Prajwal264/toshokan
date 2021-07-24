import React from 'react';
import * as styles from '../../styles/components/admin/job-card.module.scss';

function JobCard() {
  return (
    <div className={styles.jobCard}>
      <div className={styles.jobInfoSection}>
        <h4 className={styles.name}>Senior Product Designer at a Product Based Company</h4>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eius ut quae optio molestias. Nostrum harum aliquid voluptatibus itaque at neque!
        </p>
      </div>
      <div className={styles.jobStatusSection}>
        <div className={styles.status}>
          <p className={styles.info}>
            45
          </p>
          <p className={styles.label}>
            Applications
          </p>
        </div>
        <div className={styles.status}>
          <p className={styles.info}>
            24
          </p>
          <p className={styles.label}>
            Canditates
          </p>
        </div>
        <div className={styles.status}>
          <p className={styles.info}>
            10
          </p>
          <p className={styles.label}>
            Closed
          </p>
        </div>
        <div className={styles.status}>
          <p className={styles.info}>
            45%
          </p>
          <p className={styles.label}>
            Hire rate
          </p>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
