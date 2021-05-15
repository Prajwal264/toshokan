import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import * as styles from '../styles/components/upcominginterviews.module.scss';
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
              src="../images/dashboard/interviews/interviewee-1.jpg"
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
              src="../images/dashboard/interviews/interviewee-2.jpg"
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
              src="../images/dashboard/interviews/interviewee-3.jpg"
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
              src="../images/dashboard/interviews/interviewee-4.jpg"
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

export default UpcomingInterviews;
