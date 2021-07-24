import { Link } from 'gatsby';
import React from 'react';
import * as styles from '../../styles/components/admin/nav.module.scss';

/**
 *
 *
 * @return {*}
 */
function Nav() {
  return (
    <nav className={styles.navigationPanel}>
      <div className={styles.navItem}>
        <Link to="/admin/" activeClassName={styles.active}>
          <img src="/sidebar/dashboard-ico.svg" alt="dashboard-ico" />
          <p>Dashboard</p>
        </Link>
      </div>
      <div className={styles.navItem}>
        <Link to="/admin/books/" activeClassName={styles.active}>
          <img src="/sidebar/books-ico.svg" alt="books-ico" />
          <p>Books</p>
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
  );
}

export default Nav;
