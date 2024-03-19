import React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';
const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>I'm learning and making this by following the Gatsby Tutorial.</p>
      <StaticImage
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        width={400}
        height={400}
      />
    </Layout>
  );
};
export const Head = () => <Seo title="Home !!! " />;
export default IndexPage;
