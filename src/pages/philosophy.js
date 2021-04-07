import * as React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

// *** components
import Layout from "../style/Layout";
import Helmet from "../components/single/Helmet/Helmet";
import InnerHTML from "../components/single/InnerHTML/InnerHTML";
import PhilosophyPrinciple from "../components/views/PhilosophyPrinciple/PhilosophyPrinciple";

const PhilosophyPage = ({ data }) => {
  // *** destructure philosophy data
  const { title, content } = data.cosmicjsPhilosophy;
  const philosophies = data.allCosmicjsPhilosophyPrinciples.edges;

  // *** destructure page metadata
  const {
    page_title,
    description,
    keywords,
  } = data.cosmicjsPageMetadata.metadata;

  // *** destructure site metadata
  const { title_prefix, canonical } = data.cosmicjsSiteMetadata.metadata;

  // ?
  useEffect(() => {
    console.log(philosophies);
  }, [philosophies]);

  return (
    <>
      <Helmet
        title={`${title_prefix} | ${page_title}`}
        canonical={canonical}
        description={description}
        keywords={keywords}
      />
      <Layout>
        <h1>{title}</h1>
        <InnerHTML html={content} />
        <div>
          {philosophies.map(({ node }, i) => (
            <PhilosophyPrinciple
              key={node.id}
              background={i % 2 === 0 ? "black" : "white"}
              title={node.title}
              icon={node.metadata.icon.imgix_url}
              subtitle={node.metadata.subtitle}
              content={node.content}
            />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default PhilosophyPage;

export const query = graphql`
  query {
    cosmicjsPhilosophy {
      title
      content
    }
    allCosmicjsPhilosophyPrinciples {
      edges {
        node {
          id
          title
          content
          metadata {
            subtitle
            icon {
              imgix_url
            }
          }
        }
      }
    }
    cosmicjsPageMetadata(title: { eq: "Philosophy" }) {
      metadata {
        page_title
        canonical
        description
        keywords
      }
    }
    cosmicjsSiteMetadata {
      metadata {
        title_prefix
        canonical
      }
    }
  }
`;
