import { Link } from 'gatsby';
import * as React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    Home
    <Link to="/admin/dashboard/">Admin Dashboard</Link>
  </Layout>
);

export default IndexPage;
