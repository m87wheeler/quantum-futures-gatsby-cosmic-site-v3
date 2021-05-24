import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";

// ***

// ***
import Layout from "../style/Layout";
import RSSCard from "../components/composite/RSSCard/RSSCard";

// ***

const RSSPage = ({ data }) => {
  return (
    <Layout>
      <div
        style={{
          padding: "1rem",
          display: "flex",
          flexFlow: "column nowrap",
          gap: ".5rem",
        }}
      >
        <h1>RSS Feed</h1>
        {data.allQuantumDailyPost.edges.map(({ node }) => (
          <RSSCard
            key={node.id}
            href={node.link[0]}
            title={node.title[0]}
            created={node.pubDate[0]}
            type={node.category[0]}
            author={node.dc_creator}
            content={node.description[0]}
          />
        ))}
      </div>
    </Layout>
  );
};

export default RSSPage;

export const query = graphql`
  query {
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
      }
    }
  }
`;
