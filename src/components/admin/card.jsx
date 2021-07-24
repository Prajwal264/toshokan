import React from 'react';
import PropTypes from 'prop-types';
import * as styles from '../../styles/components/admin/card.module.scss';

function Card({ type, updates, status }) {
  return (
    <div className={styles.card}>
      <div className={styles.typeWrapper}>
        <p className={styles.type}>{type}</p>
        {updates ? (
          <p className={styles.updates}>
            +
            {updates}
          </p>
        ) : ''}
      </div>
      <p className={styles.status}>{status}</p>
    </div>
  );
}

Card.defaultProps = {
  updates: 0,
};

Card.propTypes = {
  type: PropTypes.string.isRequired,
  updates: PropTypes.number,
  status: PropTypes.number.isRequired,
};

export default Card;
