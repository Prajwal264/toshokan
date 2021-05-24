import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import * as styles from '../../styles/components/admin/application-card.module.scss';

function ApplicationCard() {
  return (
    <div className={styles.applicationCard}>
      <div className={styles.applicationInfoSection}>
        <StaticImage
          placeholder="blurred"
          src="../../images/dashboard/interviews/interviewee-2.jpg"
          alt="Gretchen Bergson"
        />
        <div className={styles.applicantDetails}>
          <h4 className={styles.name}>Gretchen Bergson</h4>
          <p className={styles.jobTitle}>
            Graphic Designer
          </p>
          <p className={styles.experience}>
            3 years
          </p>
        </div>
      </div>
      <div className={styles.applicationStatusSection}>
        <div className={styles.status}>
          <p className={styles.label}>
            Id
          </p>
          <p className={styles.info}>
            #1
          </p>
        </div>
        <div className={styles.status}>
          <p className={styles.label}>
            Email
          </p>
          <p className={styles.info}>
            GretchenBergson@gmail.com
          </p>
        </div>
        <div className={styles.status}>
          <p className={styles.label}>
            Status
          </p>
          <p className={`${styles.info} ${styles.applicantStatus}`}>
            Selected
          </p>
        </div>
      </div>
    </div>
  );
}

export default ApplicationCard;
