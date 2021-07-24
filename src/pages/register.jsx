import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import * as styles from '../styles/pages/register.module.scss';

/**
 *
 *
 * @return {*}
 */
function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'CONSUMER',
  });

  /**
   *
   *
   * @param {*} e
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateFormElements = () => {
    let isFormValid = true;
    if (!formData.username) {
      toast.error('Please Enter username');
      isFormValid = false;
    }
    if (!formData.email) {
      toast.error('Please Enter email');
      isFormValid = false;
    }
    if (!formData.password) {
      toast.error('Please Enter password');
      isFormValid = false;
    }
    return isFormValid;
  };

  /**
   *
   *
   * @param {*} e
   */
  const register = async (e) => {
    e.preventDefault();
    if (validateFormElements()) {
      // const registerPromise = await registerUser({variables: formData})
      // toast.promise(registerPromise, {
      //   loading: 'Registering',
      //   success: `User Registered`,
      //   error: 'Error while registering user',
      // });
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.register}>
        <form className={styles.form} onSubmit={register} autoComplete="off">
          <h3>Register to Toshokan.</h3>
          <label htmlFor="username">
            Username:
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              require
              autoComplete="off"
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </label>
          <div className="wrapper">
            <input
              type="radio"
              name="role"
              value="ADMIN"
              id="option-1"
              onChange={handleChange}
            />
            <input
              type="radio"
              name="role"
              value="CONSUMER"
              onChange={handleChange}
              id="option-2"
              checked
            />
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
      <Toaster />
    </div>
  );
}

export default Register;
