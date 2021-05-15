import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import AppLayout from '../../components/app-layout';
import * as styles from '../../styles/pages/dashboard.module.scss';

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
          <StaticImage src="../../images\dashboard\admin-avatar.png" alt="admin-avatar" />
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

function Card({ type, updates, status }) {
  return (
    <div className={styles.card}>
      <div className={styles.typeWrapper}>
        <p className={styles.type}>{type}</p>
        {updates ? (
          <p className={styles.updates}>
            +
            {updates}
          </p>
        ) : ''}
      </div>
      <p className={styles.status}>{status}</p>
    </div>
  );
}

Card.defaultProps = {
  updates: 0,
};

Card.propTypes = {
  type: PropTypes.string.isRequired,
  updates: PropTypes.number,
  status: PropTypes.number.isRequired,
};

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

/**
 *
 *
 * @return {*}
 */
function UpcomingInterviews() {
  return (
    <div className={styles.upcomingInterviews}>
      <div className={styles.headingSection}>
        <p className={styles.heading}>Upcoming Interviews</p>
        <Link to="/app/interviews/">View all</Link>
      </div>
      <div className={styles.interviewList}>
        <div className={styles.interviewItem}>
          <div className={styles.intervieweeDetails}>
            <StaticImage
              placeholder="blurred"
              src="../../images\dashboard\interviews/interviewee-1.jpg"
              alt="Gretchen Bergson"
            />
            <div className={styles.details}>
              <p className={styles.name}>Gretchen Bergson</p>
              <p className={styles.bio}>Creative Director</p>
            </div>
          </div>
          <div className={styles.interviewDate}>
            <p className={styles.month}>Jan</p>
            <p className={styles.day}>13</p>
          </div>
        </div>
        <div className={styles.interviewItem}>
          <div className={styles.intervieweeDetails}>
            <StaticImage
              placeholder="blurred"
              src="../../images\dashboard\interviews/interviewee-2.jpg"
              alt="Gretchen Bergson"
            />
            <div className={styles.details}>
              <p className={styles.name}>Jaylon Fanci</p>
              <p className={styles.bio}>Senior Product Designer</p>
            </div>
          </div>
          <div className={styles.interviewDate}>
            <p className={styles.month}>Jan</p>
            <p className={styles.day}>16</p>
          </div>
        </div>
        <div className={styles.interviewItem}>
          <div className={styles.intervieweeDetails}>
            <StaticImage
              placeholder="blurred"
              src="../../images\dashboard\interviews/interviewee-3.jpg"
              alt="Gretchen Bergson"
            />
            <div className={styles.details}>
              <p className={styles.name}>Pooja Jain</p>
              <p className={styles.bio}>Product Designer</p>
            </div>
          </div>
          <div className={styles.interviewDate}>
            <p className={styles.month}>Jan</p>
            <p className={styles.day}>16</p>
          </div>
        </div>
        <div className={styles.interviewItem}>
          <div className={styles.intervieweeDetails}>
            <StaticImage
              placeholder="blurred"
              src="../../images\dashboard\interviews/interviewee-4.jpg"
              alt="Gretchen Bergson"
            />
            <div className={styles.details}>
              <p className={styles.name}>James Norman</p>
              <p className={styles.bio}>Creative Director</p>
            </div>
          </div>
          <div className={styles.interviewDate}>
            <p className={styles.month}>Jan</p>
            <p className={styles.day}>21</p>
          </div>
        </div>
      </div>
    </div>
  );
}
