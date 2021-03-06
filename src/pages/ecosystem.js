import * as React from "react";
import { useState, useEffect } from "react";
import { graphql } from "gatsby";
import { CSSTransition } from "react-transition-group";

// *** data, hooks & context

// *** components
import Layout from "../style/Layout";
import Helmet from "../components/single/Helmet/Helmet";
import PhilosophyPrinciple from "../components/views/PhilosophyPrinciple/PhilosophyPrinciple";

// *** styled components
import {
  appearDuration,
  classes,
  Title,
  Content,
  Wrapper,
  LandingWrapper,
} from "../style/pages/About.style";

const Ecosystem = ({ data }) => {
  const [pageReady, setPageReady] = useState(false);

  // *** set page ready when page has loaded
  useEffect(() => {
    if (typeof window !== undefined) setPageReady(true);
  }, []);

  const {
    title: main_title,
    content: intro_content,
  } = data.cosmicjsEcosystemPage;

  const {
    page_title,
    description,
    keywords,
  } = data.cosmicjsPageMetadata.metadata;

  // *** destructure site metadata
  const { title_prefix, canonical } = data.cosmicjsSiteMetadata.metadata;

  // *** destructure ecosystems
  const ecosystems = data.allCosmicjsEcosystems.edges;

  return (
    <>
      <Helmet
        title={`${title_prefix} | ${page_title}`}
        canonical={canonical}
        description={description}
        keywords={keywords}
      />
      <Layout>
        <LandingWrapper style={{ paddingBottom: "3rem" }}>
          <CSSTransition
            in={pageReady}
            timeout={appearDuration}
            classNames={classes.hero}
            appear
          >
            <Title
              element="h2"
              variant="h1"
              gradient
              color="primary"
              transform="uppercase"
              delay={0}
            >
              {main_title}
            </Title>
          </CSSTransition>
          <CSSTransition
            in={pageReady}
            timeout={appearDuration}
            classNames={classes.hero}
            appear
          >
            <Content html={intro_content} delay={1} />
          </CSSTransition>
        </LandingWrapper>
        <Wrapper>
          {ecosystems.map(({ node }, i) => (
            <PhilosophyPrinciple
              key={node.id}
              background={i % 2 === 0 ? "black" : "white"}
              title={node.title}
              content={node.content}
              backgroundImage={node.metadata.background_image.imgix_url}
            />
          ))}
        </Wrapper>
      </Layout>
    </>
  );
};

export default Ecosystem;

export const query = graphql`
  query {
    cosmicjsEcosystemPage {
      title
      content
    }
    allCosmicjsEcosystems {
      edges {
        node {
          id
          title
          content
          metadata {
            background_image {
              imgix_url
            }
          }
        }
      }
    }
    cosmicjsPageMetadata(title: { eq: "Ecosystem" }) {
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
