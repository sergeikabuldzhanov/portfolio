const dotenv = require("dotenv");

if (process.env.ENVIRONMENT !== "production") {
  dotenv.config();
}
dotenv.config();

const { spaceId, accessToken } = process.env;

module.exports = {
  siteMetadata: {
    title: `Sergei Kabuldzhanov`,
    description: `Personal Site`,
    author: `Sergei Kabuldzhanov`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId,
        accessToken,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sergei Kabuldzhanov`,
        short_name: `Sergei Kabuldzhanov`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#333`,
        icon: `src/images/fev_icon.png`, // This path is relative to the root of the site.
      },
    }, // To learn more, visit: https://gatsby.dev/offline // this (optional) plugin enables Progressive Web App + Offline functionality
    // `gatsby-plugin-offline`,
  ],
};
