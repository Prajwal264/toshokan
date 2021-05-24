import * as React from 'react';
import * as styles from '../../styles/components/admin/sidebar.module.scss';
import Nav from './nav';

/**
 *
 *
 */
const SideBar = () => (
  <div className={styles.sidebar}>
    <div className={styles.adminInfoSection}>
      <div className={styles.profile}>
        <img src="/sidebar/google-icon-logo.svg" alt="google-logo" />
      </div>
      <div className={styles.companyDetailsWrapper}>
        <p className={styles.companyName}>Company Co.</p>
        <p className={styles.role}>Hiring Manager</p>
      </div>
    </div>
    <button type="button" className={styles.createJobCta}>
      + Create New Job
    </button>
    <Nav />
  </div>
);

SideBar.propTypes = {
};

SideBar.defaultProps = {
};

export default SideBar;
