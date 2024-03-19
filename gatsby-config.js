/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My First Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`,
    description: 'first gatsby stie for learning',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
  ],
};
