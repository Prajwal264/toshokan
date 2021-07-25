import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { Router } from '@reach/router';
import AppLayout from '../components/layout';
import AdminLayout from '../components/admin/app-layout';
import Dashboard from '../page-components/admin/dashboard';
import Applications from '../page-components/admin/applications';
import ConsumerBooks from '../page-components/app/books';
import Books from '../page-components/admin/books';
import Canidates from '../page-components/admin/candidates';
import PrivateRoute from '../components/PrivateRoute';
import Register from '../page-components/register';

const IndexPage = () => (
  <Router>
    <Register path="/register" />
    <AppLayout path="/app">
      <ConsumerBooks path="/books" />
    </AppLayout>
    <AdminLayout path="/admin">
      <PrivateRoute path="/" component={Dashboard} />
      <PrivateRoute path="/books" component={Books} />
      <PrivateRoute path="/applications" component={Applications} />
      <PrivateRoute path="/candidates" component={Canidates} />
    </AdminLayout>
  </Router>
);

export default IndexPage;
