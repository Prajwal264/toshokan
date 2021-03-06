import React from 'react';
import IdentityModal, { useIdentityContext } from 'react-netlify-identity-widget';
import { navigate } from 'gatsby';
import * as styles from '../../styles/pages/admin/login.module.scss';
import 'react-netlify-identity-widget/styles.css'; // delete if you want to bring your own CSS
import Seo from '../../components/seo';

function login() {
  const identity = useIdentityContext();
  const isLoggedIn = identity && identity.isLoggedIn;
  if (isLoggedIn) {
    navigate('/admin/dashboard/');
  }
  return (
    <div className={styles.loginWrapper}>
      <Seo
        title="books | Admin"
        description="Login to  your Profile Now!"
      />
      <div className={styles.loginContainer}>
        <IdentityModal showDialog={!isLoggedIn} />
      </div>
    </div>
  );
}

export default login;
