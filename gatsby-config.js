module.exports = {
  siteMetadata: {
    title: "quantum-futures-responsive-tests",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "12345",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
  ],
};
