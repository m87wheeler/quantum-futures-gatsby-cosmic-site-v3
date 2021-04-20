import * as React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

// *** components
import Layout from "../style/Layout";
import Helmet from "../components/single/Helmet/Helmet";
import Typography from "../components/single/Typography/Typography";
import InnerHTML from "../components/single/InnerHTML/InnerHTML";

// *** styled components
import { LandingWrapper } from "../style/pages/About.style";
const Wrapper = styled.div`
  padding: 0 2rem;

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    padding: 0 1rem;
    grid-column: 3 / 11;
  }
`;

const PartnershipsPage = ({ data }) => {
  // *** destructure philosophy data
  // const { title, content } = data.cosmicjsPhilosophy;
  const partnerships = data.allCosmicjsEcosystems.edges[0].node;

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
            align="center"
          >
            Partnerships
          </Typography>
        </LandingWrapper>
        <Wrapper>
          <InnerHTML html={partnerships.content} />
        </Wrapper>
      </Layout>
    </>
  );
};

export default PartnershipsPage;

export const query = graphql`
  query {
    cosmicjsPageMetadata(title: { eq: "Partnerships" }) {
      metadata {
        page_title
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
    allCosmicjsEcosystems(filter: { slug: { eq: "partnerships" } }) {
      edges {
        node {
          id
          title
          content
        }
      }
    }
  }
`;
