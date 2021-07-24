import React from 'react';
import Layout from '../components/layout';
import * as styles from '../styles/pages/jobs.module.scss';
import SearchBar from '../components/searchbar';
import JobListing from '../components/job-listing';
import JobDetails from '../components/job-details';
import Seo from '../components/seo';

function Jobs() {
  return (
    <Layout>
      <Seo
        title="Jobs in your area"
        description="Explore Job Openings Across Top Companies Now!"
      />
      <SearchBar />
      <div className={styles.jobsWrapper}>
        <JobListing />
        <JobDetails />
      </div>
    </Layout>
  );
}

export default Jobs;
