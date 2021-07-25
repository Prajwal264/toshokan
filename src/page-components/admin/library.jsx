import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import * as styles from '../../styles/pages/library.module.scss';
/**
 *
 *
 * @return {*}
 */
function Library() {
  /**
   *
   *
   */
  const createLibrary = () => {

  };
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.libraryListWrapper}>
        <div className={styles.hello}>
          <StaticImage
            width={50}
            height={50}
            className={styles.image}
            src="../../../static/admin/avatar.jpg"
          />
          <div className={styles.content}>
            <h5>Hi, Test</h5>
            <p>Switch to your library here</p>
          </div>
        </div>
        <div className={styles.library}>
          <StaticImage
            width={50}
            height={50}
            className={styles.image}
            src="../../../static/admin/avatar.jpg"
          />
          <div className={styles.content}>
            <h5>Hi, Test</h5>
            <p>Switch to your library here</p>
          </div>
        </div>
        <button type="button" className={styles.addLibrarySection} onClick={createLibrary}>
          <div className={styles.addIcon}>
            +
          </div>
          <div className={styles.content}>
            <h5>Add Library</h5>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Library;
