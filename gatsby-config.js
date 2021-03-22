require("dotenv").config();

const cosmicConfig = {
  bucket: process.env.COSMIC_BUCKET_SLUG,
  key: process.env.COSMIC_READ_KEY,
};

module.exports = {
  siteMetadata: {
    title: "quantum-futures-responsive-tests",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "12345",
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Lato`,
              variants: [`400`, `400i`, `700`, `800`],
            },
            {
              family: `Josefin Sans`,
              variants: [`400`, `700`],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-cosmicjs`,
      options: {
        bucketSlug: cosmicConfig.bucket,
        objectTypes: [
          `landing-page`,
          `testimonial-page`,
          `blog-posts`,
          `testimonials`,
          `newsfeed-categories`,
          `page-metadata`,
          `site-metadata`,
        ],
        apiAccess: {
          read_key: cosmicConfig.key,
        },
        localMedia: true,
        limit: 1000,
      },
    },
  ],
};
