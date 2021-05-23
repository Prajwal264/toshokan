import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import AppLayout from '../../components/admin/app-layout';
import * as styles from '../../styles/pages/admin/dashboard.module.scss';
import Card from '../../components/admin/card';
import Overview from '../../components/admin/overview';
import UpcomingInterviews from '../../components/admin/upcoming-interview';
import Seo from '../../components/seo';

/**
 *
 *
 * @return {*}
 */
function dashboard() {
  return (
    <AppLayout>
      <Seo
        title="Dashboard | Admin"
        description="Here is the status of your hiring pipeline"
      />
      <div className={styles.dashboardWrapper}>
        <div className={styles.adminWelcomeWrapper}>
          <StaticImage
            src="../../images/dashboard/admin-avatar.png"
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
