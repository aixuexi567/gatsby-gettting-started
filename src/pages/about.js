import React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';
const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle="About me">
        <p>
          Hi,everyone. I'm the proud creator of this site, which I build with
          Gatsby.
        </p>
        <p>
          Today, I'm very happy because of a girl, who is my high school
          classmate.{' '}
        </p>
        <p>We haven't see each other in 10 years, and I miss her very much.</p>
        <StaticImage
          alt="one gile"
          src="../images/1girl.png"
          width={400}
          height={400}
        />
      </Layout>
    </main>
  );
};
export const Head = () => (
  <>
    {/* <title>About Me</title>
    <meta name="description" content="About Me!"></meta> */}
    <Seo title="About me!!" />
  </>
);
export default AboutPage;
