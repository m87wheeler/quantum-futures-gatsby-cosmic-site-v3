require("dotenv").config();

const cosmicConfig = {
  bucket: process.env.COSMIC_BUCKET_SLUG,
  key: process.env.COSMIC_READ_KEY,
};

module.exports = {
  siteMetadata: {
    title: "Quantum Futures",
    siteUrl: `https://quantumfuturesgatsbycosmi81003.gatsbyjs.io`,
  },
  plugins: [
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://quantumfuturesgatsbycosmi81003.gatsbyjs.io",
        sitemap:
          "https://quantumfuturesgatsbycosmi81003.gatsbyjs.io/sitemap.xml",
        policy: [
          {
            userAgent: "Googlebot",
            allow: "/",
            crawlDelay: 2,
          },
          {
            userAgent: "OtherBot",
            allow: "/",
            crawlDelay: 2,
          },
          {
            userAgent: "*",
            allow: "/",
            crawlDelay: 2,
          },
        ],
      },
    },
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
          `about`,
          `testimonial-page`,
          `philosophy`,
          `contact-page`,
          `blog-posts`,
          `testimonials`,
          `philosophy-principles`,
          `ecosystems`,
          `social-media`,
          `newsfeed-categories`,
          `page-metadata`,
          `site-metadata`,
          `contact-form-configuration`,
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
