import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import AppLayout from '../../components/app-layout';
import * as styles from '../../styles/pages/dashboard.module.scss';
import Card from '../../components/card';
import Overview from '../../components/overview';
import UpcomingInterviews from '../../components/upcoming-interview';

/**
 *
 *
 * @return {*}
 */
function dashboard() {
  return (
    <AppLayout>
      <div className={styles.dashboardWrapper}>
        <div className={styles.adminWelcomeWrapper}>
          <StaticImage
            src="../../images\dashboard\admin-avatar.png"
            placeholder="blurred"
            width={50}
            alt="admin-avatar"
          />
          <p className={styles.welcomePhrase}>
            <strong>Hi John,&nbsp;</strong>
            here is the status of your hiring pipeline.
          </p>
        </div>
        <div className={styles.genericStatusWrapper}>
          <Card type="New" updates={11} status={11} />
          <Card type="In-Review" updates={4} status={4} />
          <Card type="Interview" updates={2} status={3} />
          <Card type="Offers" status={1} />
          <Card type="Hired" status={1} />
        </div>
        <div className={styles.content}>
          <div className={styles.leftSection}>
            <Overview />
            <UpcomingInterviews />
          </div>
          <div className={styles.rightSection} />
        </div>
      </div>
    </AppLayout>
  );
}

export default dashboard;
