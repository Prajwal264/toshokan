import React from 'react';
import Layout from '../components/layout';
import * as styles from '../styles/pages/books.module.scss';
import SearchBar from '../components/searchbar';
import BookListing from '../components/book-listing';
import BookDetails from '../components/book-details';
import Seo from '../components/seo';

function books() {
  return (
    <Layout>
      <Seo
        title="Here are some Books you may like"
        description="Explore Book from top Artists Now!"
      />
      <SearchBar />
      <div className={styles.jobsWrapper}>
        <BookListing />
        <BookDetails />
      </div>
    </Layout>
  );
}

export default books;
