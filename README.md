# Quantum Futures Website

### Created By MWWDD

---

## NPM Packages

| NPM Package                       | Description                                           |
| --------------------------------- | ----------------------------------------------------- |
| @fortawesome/fontawesome-svg-core | Font Awesome icon package used for `Button` component |
| @fortawesome/free-solid-svg-icons | "                                                     |
| @fortawesome/react-fontawesome    | "                                                     |
| babel-plugin-styled-components    | Gatsby requirement for `styled-components`            |
| dotenv                            |                                                       |
| gatsby                            |                                                       |
| gatsby-cli                        |                                                       |
| gatsby-plugin-gatsby-cloud        |                                                       |
| gatsby-plugin-google-analytics    |                                                       |
| gatsby-plugin-image               |                                                       |
| gatsby-plugin-load-script         |                                                       |
| gatsby-plugin-mailchimp           |                                                       |
| gatsby-plugin-next-seo            |                                                       |
| gatsby-plugin-react-helmet        |                                                       |
| gatsby-plugin-react-leaflet       |                                                       |
| gatsby-plugin-robots-txt          |                                                       |
| gatsby-plugin-sharp               |                                                       |
| gatsby-plugin-sitemap             |                                                       |
| gatsby-plugin-social9-socialshare |                                                       |
| gatsby-plugin-styled-components   |                                                       |
| gatsby-plugin-webfonts            |                                                       |
| gatsby-source-cosmicjs            |                                                       |
| gatsby-source-filesystem          |                                                       |
| gatsby-transformer-sharp          |                                                       |
| leaflet                           |                                                       |
| node-fetch                        |                                                       |
| prop-types                        |                                                       |
| react                             |                                                       |
| react-dom                         |                                                       |
| react-helmet                      |                                                       |
| react-helmet-async                |                                                       |
| react-leaflet                     |                                                       |
| react-transition-group            |                                                       |
| rss-parser                        |                                                       |
| styled-components                 |                                                       |

## RESTful API For RSS/XML Conversion

The Quantum Daily RSS feed required a custom made server-side REST API to convert the XML into JSON - compatible with Gatsby's GraphQL implemenation. This API is currently hosted on `http://localhost:3001` and serves a single response.

`https://quantum-futures-tqd-rss.herokuapp.com?api_key=<API_KEY>`

```
{
  success: true,
  data: [XML Data Object]
}
```

Any unsuccesful responses will return `success: false` and an error message in the object's `message` key.

### Plugin: `gatsby-source-quantum-daily`

The custom `gatsby-source-quantum-daily` plugin located in `/plugins` allows Gatsby's GraphQL implementation to access the API result.

---
