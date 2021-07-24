import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import * as styles from '../styles/components/header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logoSection}>
      Toskokan.
    </div>
    <div className={styles.navigationSection}>
      <div className={styles.navItem}>
        <img src="/header/icon-notif.svg" alt="icon-notif" />
      </div>
      <div className={styles.navItem}>
        <StaticImage className={styles.img} src="../images/dashboard/admin-avatar.png" />
      </div>
    </div>
  </header>
);

Header.propTypes = {
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
