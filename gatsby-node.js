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
            }
          }
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
      },
    });
  });
};
