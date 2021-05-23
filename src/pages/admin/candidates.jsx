import React from 'react';
import AppLayout from '../../components/admin/app-layout';
import Seo from '../../components/seo';

/**
 *
 *
 * @return {*}
 */
function Candidates() {
  return (
    <AppLayout>
      <Seo
        title="Candidates | Admin"
        description="Here's a list of candidates"
      />
      <h2>Candidates</h2>
    </AppLayout>
  );
}

export default Candidates;
