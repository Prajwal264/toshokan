import React from 'react';
import * as styles from '../../styles/components/admin/overview.module.scss';

function Overview() {
  return (
    <div className={styles.overview}>
      <p className={styles.heading}>Overview</p>
      <div className={styles.infoSection}>
        <div className={styles.infoItem}>
          <p className={styles.info}>45</p>
          <p className={styles.label}>Applications</p>
        </div>
        <div className={styles.infoItem}>
          <p className={styles.info}>24</p>
          <p className={styles.label}>Candidates</p>
        </div>
        <div className={styles.infoItem}>
          <p className={styles.info}>88%</p>
          <p className={styles.label}>Hire Rate</p>
        </div>
      </div>
      <div className={styles.detailSection}>
        <div className={styles.detailedItem}>
          <p className={styles.name}>
            Total Position Views
          </p>
          <p className={styles.detail}>
            11, 457
          </p>
        </div>
        <div className={styles.detailedItem}>
          <p className={styles.name}>
            Avg responses per poistion
          </p>
          <p className={styles.detail}>
            14
          </p>
        </div>
        <div className={styles.detailedItem}>
          <p className={styles.name}>
            Avg Time to recruit
          </p>
          <p className={styles.detail}>
            14 Days
          </p>
        </div>
        <div className={styles.detailedItem}>
          <p className={styles.name}>
            Avg candidate success rate
          </p>
          <p className={styles.detail}>
            45%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Overview;
