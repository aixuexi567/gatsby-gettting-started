import React from 'react';
import Layout from '../components/layout';
const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>I'm learning and making this by following the Gatsby Tutorial.</p>
    </Layout>
  );
};
export const Head = () => <title>Home Page</title>;
export default IndexPage;
