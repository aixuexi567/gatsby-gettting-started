import React from 'react';
import { Link } from 'gatsby';
const AboutPage = () => {
  return (
    <main>
      <h1>About me</h1>
      <Link to="/">Back to Home</Link>
      <p>
        Hi,everyone. I'm the proud creator of this site, which I build with
        Gatsby.
      </p>
      <p>
        Today, I'm very happy because of a girl, who is my high school
        classmate.{' '}
      </p>
      <p>We haven't see each other in 10 years, and I miss her very much.</p>
    </main>
  );
};
export const Head = () => (
  <>
    <title>About Me</title>
    <meta name="description" content="About Me!"></meta>
  </>
);
export default AboutPage;
