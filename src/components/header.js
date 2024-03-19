import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { headerTitle } from './header.module.css';
const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
          description
        }
      }
      siteBuildMetadata {
        buildTime
      }
    }
  `);
  return (
    <header className={headerTitle}>
      <h1>{data.site.siteMetadata.title}</h1>
      {/* <h3>buildTime: {data.siteBuildMetadata.buildTime}</h3> */}
    </header>
  );
};

export default Header;
