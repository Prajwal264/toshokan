import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { Router } from '@reach/router';
import AppLayout from '../components/layout';
import AdminLayout from '../components/admin/app-layout';
import Dashboard from '../page-components/admin/dashboard';
import ConsumerBooks from '../page-components/app/books';
import Candidates from '../page-components/admin/candidates';
import PrivateRoute from '../components/PrivateRoute';
import Register from '../page-components/register';
import Login from '../page-components/login';
import Library from '../page-components/admin/library';

const IndexPage = () => (
  <Router>
    <Register path="/register" />
    <Login path="/login" />
    <AppLayout path="/app">
      <ConsumerBooks path="/books" />
    </AppLayout>
    <PrivateRoute path="/admin/library" component={Library} />
    <AdminLayout path="/admin">
      <PrivateRoute path="/" component={Dashboard} />
      <PrivateRoute path="/candidates" component={Candidates} />
    </AdminLayout>
  </Router>
);

export default IndexPage;
