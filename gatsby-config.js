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
          `ecosystem-page`,
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
          `office-details`,
        ],
        apiAccess: {
          read_key: cosmicConfig.key,
        },
        localMedia: true,
        limit: 1000,
      },
    },
    {
      resolve: "gatsby-plugin-react-leaflet",
      options: {
        linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://gmail.us1.list-manage.com/subscribe/post?u=73afe87eb5c79b477bce642cb&amp;id=c5df02ccf6",
        timeout: 3500,
      },
    },
  ],
};
