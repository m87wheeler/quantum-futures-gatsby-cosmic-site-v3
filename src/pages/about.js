import * as React from "react";
import { graphql } from "gatsby";

// *** components
import Layout from "../style/Layout";
import Helmet from "../components/single/Helmet/Helmet";
import PhilosophyPrinciple from "../components/views/PhilosophyPrinciple/PhilosophyPrinciple";
import Typography from "../components/single/Typography/Typography";

// *** styled components
import { Wrapper, LandingWrapper } from "../style/pages/About.style";
import InnerHTML from "../components/single/InnerHTML/InnerHTML";

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

  return (
    <>
      <Helmet
        title={`${title_prefix} | ${page_title}`}
        canonical={canonical}
        description={description}
        keywords={keywords}
      />
      <Layout>
        <LandingWrapper style={{ minHeight: "0" }}>
          <Typography
            element="h2"
            variant="h1"
            gradient
            color="primary"
            align="left"
          >
            About
          </Typography>
          <InnerHTML html={data.cosmicjsAbout.content} />
        </LandingWrapper>
        <LandingWrapper>
          <Typography
            element="h2"
            variant="h1"
            gradient
            color="primary"
            align="left"
          >
            {title}
          </Typography>
          <InnerHTML html={content} />
        </LandingWrapper>
        <Wrapper>
          {philosophies.map(({ node }, i) => (
            <PhilosophyPrinciple
              key={node.id}
              background={i % 2 === 0 ? "black" : "white"}
              title={node.title}
              backgroundImage={node.metadata.background_image.imgix_url}
              subtitle={node.metadata.subtitle}
              content={node.content}
            />
          ))}
        </Wrapper>
      </Layout>
    </>
  );
};

export default PhilosophyPage;

export const query = graphql`
  query {
    cosmicjsAbout {
      content
    }
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
            background_image {
              imgix_url
            }
          }
        }
      }
    }
    cosmicjsPageMetadata(title: { eq: "About" }) {
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
