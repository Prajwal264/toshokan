import React from 'react';
import * as styles from '../styles/components/searchbar.module.scss';

function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <div className={styles.searchContainer}>
        <img src="/header/icon-search.svg" alt="ico-search" />
        <input type="text" />
      </div>
      <div className={styles.ctaSection}>
        <button type="button">Find Jobs</button>
      </div>
    </div>
  );
}

export default SearchBar;
