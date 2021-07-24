import React from 'react';
import * as styles from '../styles/pages/register.module.scss';

/**
 *
 *
 * @return {*}
 */
function Register() {
  const register = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.register}>
        <form className={styles.form} onSubmit={register} autoComplete="off">
          <h3>Register to Toshokan.</h3>
          <label htmlFor="username">
            Username:
            <input type="text" id="username" name="username" required autoComplete="off" />
          </label>
          <label htmlFor="email">
            Email:
            <input type="email" id="email" name="email" require autoComplete="off" />
          </label>
          <label htmlFor="password">
            Password:
            <input type="password" id="password" name="password" required autoComplete="off" />
          </label>
          <div className="wrapper">
            <input type="radio" name="select" value="ADMIN" id="option-1" checked />
            <input type="radio" name="select" value="CONSUMER" id="option-2" />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="option-1" className="option option-1">
              <div className="dot" />
              <span>Admin</span>
            </label>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="option-2" className="option option-2">
              <div className="dot" />
              <span>Consumer</span>
            </label>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
