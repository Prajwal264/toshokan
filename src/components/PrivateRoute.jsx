import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
// import { isLoggedIn } from '../utils/auth';

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (false && location.pathname !== '/app/login') {
    // If we’re not logged in, redirect to the home page.
    navigate('/app/login');
    return null;
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...rest} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.element.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default PrivateRoute;