/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import '../styles/_utils/_global.scss';
import SideBar from './header';
import * as styles from '../styles/components/layout.module.scss';

const Layout = ({ children }) => (
  <>
    <div className={styles.app}>
      <div className={styles.flexWrapper}>
        <SideBar />
        <main className={styles.mainWrapper}>{children}</main>
      </div>
    </div>
  </>
);
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
