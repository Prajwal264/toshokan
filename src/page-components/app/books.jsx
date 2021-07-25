import React from 'react';
import * as styles from '../../styles/pages/books.module.scss';
import SearchBar from '../../components/searchbar';
import BookListing from '../../components/book-listing';
import BookDetails from '../../components/book-details';
import Seo from '../../components/seo';

function books() {
  return (
    <>
      <Seo
        title="Here are some Books you may like"
        description="Explore Book from top Artists Now!"
      />
      <SearchBar />
      <div className={styles.jobsWrapper}>
        <BookListing />
        <BookDetails />
      </div>
    </>
  );
}

export default books;
