/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
// You can delete this file if you're not using it

/**
 * You can uncomment the following line to verify that
 * your plugin is being loaded in your site.
 *
 * See: https://www.gatsbyjs.com/docs/creating-a-local-plugin/#developing-a-local-plugin-that-is-outside-your-project
 */
require("dotenv").config();
const fetch = require("node-fetch");
exports.onPreInit = () => console.log("Loaded gatsby-starter-plugin");

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const NODE_TYPE = "QuantumDailyPost";

  const url = `http://localhost:3001?api_key=${process.env.GATSBY_QUANTUM_DAILY_API}`;
  const req = await fetch(url);
  const res = await req.json();
  const data = JSON.parse(res.data);

  data.rss.channel[0].item.forEach((item) => {
    actions.createNode({
      ...item,
      id: createNodeId(`${NODE_TYPE}-${item.guid[0]["_"]}`),
      parent: null,
      children: [],
      internal: {
        type: NODE_TYPE,
        content: JSON.stringify(item),
        contentDigest: createContentDigest(item),
      },
    });
  });
};
