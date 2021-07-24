import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { Router } from '@reach/router';
import Layout from '../../components/admin/app-layout';
import Dashboard from '../../page-components/admin/dashboard';
import Applications from '../../page-components/admin/applications';
import Books from '../../page-components/admin/books';
import Canidates from '../../page-components/admin/candidates';
import PrivateRoute from '../../components/PrivateRoute';

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/admin/" component={Dashboard} />
      <PrivateRoute path="/admin/books" component={Books} />
      <PrivateRoute path="/admin/applications" component={Applications} />
      <PrivateRoute path="/admin/candidates" component={Canidates} />
    </Router>
  </Layout>
);

export default App;
