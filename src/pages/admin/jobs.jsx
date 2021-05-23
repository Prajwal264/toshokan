import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Nav, Tab } from 'react-bootstrap';
import * as styles from '../../styles/pages/admin/jobs.module.scss';
import AppLayout from '../../components/admin/app-layout';
import JobsTab from '../../components/admin/jobs-tab';

/**
 *
 *
 * @return {*}
 */
function Jobs() {
  return (
    <AppLayout>
      <div className={styles.jobsWrapper}>
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
        <div className={styles.tabContainer}>
          <Tab.Container defaultActiveKey="active">
            <div className={styles.navSwitcher}>
              <p className={styles.pageTitle}>Jobs</p>
              <Nav>
                <Nav.Item>
                  <Nav.Link eventKey="active">
                    Active
                    <p className="info">7</p>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="closed">
                    Closed
                    <p className="info">12</p>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <Tab.Content>
              <Tab.Pane eventKey="active">
                <JobsTab status="active" />
              </Tab.Pane>
              <Tab.Pane eventKey="closed">
                <JobsTab status="closed" />
              </Tab.Pane>
            </Tab.Content>

          </Tab.Container>
        </div>
      </div>
    </AppLayout>
  );
}

export default Jobs;
