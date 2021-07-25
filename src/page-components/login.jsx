import { useMutation } from '@apollo/client';
import { navigate } from 'gatsby';
import cookie from 'react-cookies';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { User } from '../services/api';
import * as styles from '../styles/pages/login.module.scss';

const user = new User();
const LOGIN_MUTATION = user.login();

/**
 *
 *
 * @return {*}
 */
function Login() {
  const [loginUser] = useMutation(LOGIN_MUTATION);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const validateFormElements = () => {
    let isFormValid = true;
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
  const login = async (e) => {
    e.preventDefault();
    if (validateFormElements()) {
      try {
        const loginPromise = loginUser({
          variables: {
            email: formData.email,
            password: formData.password,
          },
        });
        toast.promise(loginPromise, {
          loading: 'Logging in',
          success: 'Login Success',
          error: 'Error while logging in',
        });
        const {
          data: {
            login: {
              token, user: {
                role,
              },
            },
          },
        } = await loginPromise;
        cookie.save('tid', token);
        const ACCOUNT_TYPE = {
          ADMIN: 'ADMIN',
          CONSUMER: 'CONSUMER',
        };
        if (role === ACCOUNT_TYPE.ADMIN) {
          navigate('/admin/');
        } else {
          navigate('/app/');
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

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

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.login}>
        <form className={styles.form} onSubmit={login} autoComplete="off">
          <h3>Login to Toshokan.</h3>
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
          <button type="submit">Login</button>
        </form>
      </div>
      <Toaster />
    </div>
  );
}

export default Login;
