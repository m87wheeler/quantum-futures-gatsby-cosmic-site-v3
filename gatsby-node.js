const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allCosmicjsBlogPosts {
        edges {
          node {
            id
            slug
            title
            created(formatString: "Do MMMM YYYY")
            metadata {
              post_type
              cover_image {
                imgix_url
              }
              metadata_description
              metadata_keywords
            }
          }
          next {
            slug
            title
          }
          previous {
            slug
            title
          }
        }
      }
      allQuantumDailyPost {
        edges {
          node {
            id
            title
            link
            dc_creator
            pubDate
            category
            description
          }
          next {
            id
            title
          }
          previous {
            id
            title
          }
        }
      }
      cosmicjsSiteMetadata {
        metadata {
          title_prefix
          canonical
        }
      }
    }
  `);
  result.data.allCosmicjsBlogPosts.edges.forEach(({ node, next, previous }) => {
    createPage({
      path: `/newsfeed/${node.slug}`,
      component: path.resolve(
        `src/templates/NewsfeedTemplate/NewsfeedTemplate.js`
      ),
      context: {
        id: node.id,
        type: "CosmicJS",
        slug: node.slug,
        title: node.title,
        created: node.created,
        post_type: node.metadata.post_type,
        cover_image: node.metadata.cover_image.imgix_url,
        metadata: {
          title_prefix: result.data.cosmicjsSiteMetadata.metadata.title_prefix,
          canonical: result.data.cosmicjsSiteMetadata.metadata.canonical,
          description: node.metadata.metadata_description,
          keywords: node.metadata.metadata_keywords,
        },
        next,
        previous,
      },
    });
  });
  result.data.allQuantumDailyPost.edges.forEach(({ node, next, previous }) => {
    createPage({
      path: `/newsfeed/${node.id}`,
      component: path.resolve(`src/templates/RSSTemplate/RSSTemplate.js`),
      context: {
        id: node.id,
        type: "QuantumDaily",
        title: node.title[0],
        created: node.pubDate[0],
        author: node.dc_creator[0],
        post_type: node.category[0],
        cover_image: node.description[0],
        content: node.description,
        link: node.link[0],
        next,
        previous,
      },
    });
  });
};
