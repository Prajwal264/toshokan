import React from 'react';
import * as styles from '../styles/components/books-listing.module.scss';
import BookItem from './book-item';

function BookListing() {
  const books = [{
    id: 'job1',
    name: 'Senior Software Engineer, iOS, Nest',
    location: 'Mountain View, CA, USA',
    labels: ['Full Time', 'Senior Level'],
    posted: '4d', // TODO: This should be the time when the book was posted.
  }, {
    id: 'job2',
    name: 'Senior Software Engineer',
    location: 'Bellevue, WA, USA',
    labels: ['Full Time', 'Senior Level'],
    posted: '4d',
  }, {
    id: 'job3',
    name: 'Software Engineer',
    location: 'Chicago, IL, USA',
    labels: ['Full Time', 'Senior Level'],
    posted: '4d',
  }, {
    id: 'job4',
    name: 'Senior Software Engineer',
    location: 'Bangalore, Karnataka, India',
    labels: ['Full Time', 'Senior Level'],
    posted: '5d',
  }, {
    id: 'job4',
    name: 'Junior Software Engineer',
    location: 'Noida, India',
    labels: ['Full Time', 'Senior Level'],
    posted: '5d',
  }, {
    id: 'job5',
    name: 'Junior Software Engineer',
    location: 'Hydrabad, India',
    labels: ['Full Time', 'Senior Level'],
    posted: '5d',
  }];
  return (
    <div className={styles.jobList}>
      {books.map((book) => (<BookItem key={book.id} data={book} />))}
    </div>
  );
}

export default BookListing;
