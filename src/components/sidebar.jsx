import { Link } from 'gatsby';
import * as React from 'react';
import * as styles from '../styles/components/sidebar.module.scss';

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
    <nav className={styles.navigationPanel}>
      <div className={styles.navItem}>
        <Link to="/admin/dashboard/" activeClassName={styles.active}>
          <img src="/sidebar/dashboard-ico.svg" alt="dashboard-ico" />
          <p>Dashboard</p>
        </Link>
      </div>
      <div className={styles.navItem}>
        <Link to="/admin/jobs/" activeClassName={styles.active}>
          <img src="/sidebar/jobs-ico.svg" alt="jobs-ico" />
          <p>Jobs</p>
        </Link>
      </div>
      <div className={styles.navItem}>
        <Link to="/admin/applications/" activeClassName={styles.active}>
          <img src="/sidebar/applications-ico.svg" alt="applications-ico" />
          <p>Applications</p>
        </Link>
      </div>
      <div className={styles.navItem}>
        <Link to="/admin/candidates/" activeClassName={styles.active}>
          <img src="/sidebar/user-ico.svg" alt="user-ico" />
          <p>Candidates</p>
        </Link>
      </div>
    </nav>
  </div>
);

SideBar.propTypes = {
};

SideBar.defaultProps = {
};

export default SideBar;
