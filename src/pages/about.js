import * as React from "react";
import { useState, useEffect } from "react";
import { graphql } from "gatsby";
import { CSSTransition } from "react-transition-group";

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

const PhilosophyPage = ({ data }) => {
  const [pageReady, setPageReady] = useState(false);
  // *** destructure philosophy data
  const { title, content } = data.cosmicjsPhilosophy;
  const philosophies = data.allCosmicjsPhilosophyPrinciples.edges;

  // *** set page ready when page has loaded
  useEffect(() => {
    if (typeof window !== undefined) {
      setPageReady(true);
    }
  }, []);

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
              align="left"
              delay={0}
            >
              About
            </Title>
          </CSSTransition>
          <CSSTransition
            in={pageReady}
            timeout={appearDuration}
            classNames={classes.hero}
            appear
          >
            <Content html={data.cosmicjsAbout.content} delay={1} />
          </CSSTransition>
        </LandingWrapper>
        <LandingWrapper>
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
              align="left"
              delay={2}
            >
              {title}
            </Title>
          </CSSTransition>
          <CSSTransition
            in={pageReady}
            timeout={appearDuration}
            classNames={classes.hero}
            appear
          >
            <Content html={content} delay={3} />
          </CSSTransition>
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
