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
  result.data.allCosmicjsBlogPosts.edges.forEach(({ node }) => {
    createPage({
      path: `/newsfeed/${node.slug}`,
      component: path.resolve(
        `src/templates/NewsfeedTemplate/NewsfeedTemplate.js`
      ),
      context: {
        id: node.id,
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
      },
    });
  });
};
