import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import PropTypes from 'prop-types';
import * as styles from '../styles/components/book-item.module.scss';

function JobItem({ data }) {
  const img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU_POIuBNOEuOLob3qd0dMQ8uPa8wiMThfRtBfa5c&s';
  return (
    <div className={styles.jobItem}>
      <div className={styles.jobInfoSection}>
        <StaticImage placeholder="blurred" className={styles.img} src={img} />
        <div className={styles.jobDetails}>
          <h5 className={styles.name}>
            {data.name}
          </h5>
          <p className={styles.location}>{data.location}</p>
        </div>
      </div>
      <div className={styles.jobStatusSection}>
        <div className={styles.status}>
          {data.labels.map((label) => (<span>{label}</span>))}
        </div>
        <div className={styles.posted}>
          <div className={styles.tag}>
            New
          </div>
          <div className={styles.day}>
            {data.posted}
          </div>
        </div>
      </div>
    </div>
  );
}

JobItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    location: PropTypes.string,
    labels: PropTypes.arrayOf(PropTypes.string),
    logo: PropTypes.string,
    posted: PropTypes.string,
  }).isRequired,
};

export default JobItem;
