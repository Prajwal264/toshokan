import { Link } from 'gatsby';
import * as React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    Home
    <br />
    <Link to="/admin/dashboard/">Admin Dashboard</Link>
    <br />
    <Link to="/jobs/">jobs</Link>
  </Layout>
);

export default IndexPage;
