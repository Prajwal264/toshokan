/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/_utils/_global.scss';
import SideBar from './sidebar';
import * as styles from '../../styles/components/admin/app-layout.module.scss';

const AppLayout = ({ children }) => (
  <>
    <div className={styles.app}>
      <div className={styles.flexWrapper}>
        <SideBar />
        <main className={styles.mainWrapper}>{children}</main>
      </div>
    </div>
  </>
);
AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
