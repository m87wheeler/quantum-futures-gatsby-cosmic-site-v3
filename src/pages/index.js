import * as React from "react";
import { useState, useEffect } from "react";
import { graphql } from "gatsby";
import { CSSTransition } from "react-transition-group";

// import PropTypes from 'prop-types'

// *** data, hooks & context
import { mediaFormat } from "../assets/functions/mediaFormat";

// *** components
import Layout from "../style/Layout";
import Helmet from "../components/single/Helmet/Helmet";

// *** styled components
import {
  appearDuration,
  classes,
  Background,
  VideoWrapper,
  LandingSection,
  Title,
  StyledNewsfeed,
} from "../style/pages/Index.style";

const Index = ({ data }) => {
  // *** specify when page has loaded
  const [pageReady, setPageReady] = useState(false);

  // *** set page ready when page has loaded
  useEffect(() => {
    if (typeof window !== undefined) setPageReady(true);
  }, []);

  // *** destructure landing data
  const {
    title,
    metadata: { hero_media, text_color },
  } = data.cosmicjsLandingPage;

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
        {/** Background Media */}
        <Background>
          <VideoWrapper>{mediaFormat(hero_media.imgix_url)}</VideoWrapper>
        </Background>
        {/** Title Section */}
        <LandingSection>
          <CSSTransition
            in={pageReady}
            timeout={appearDuration}
            classNames={classes.hero}
            appear
          >
            <Title
              element="h2"
              variant="h1"
              color={text_color === "dark" ? "black" : "white"}
              align="center"
            >
              {title}
            </Title>
          </CSSTransition>
        </LandingSection>
        {/** Newsfeed Section */}
        <StyledNewsfeed
          posts={data.allCosmicjsBlogPosts.edges}
          background="black"
        />
      </Layout>
    </>
  );
};

// Index.defaultProps = {}

// Index.propTypes = {}

export default Index;

export const query = graphql`
  query {
    allCosmicjsBlogPosts(limit: 4) {
      edges {
        node {
          id
          slug
          title
          created(formatString: "Do MMMM YYYY")
          content
          metadata {
            cover_image {
              imgix_url
            }
            post_type
          }
        }
      }
    }
    cosmicjsLandingPage {
      title
      metadata {
        hero_media {
          imgix_url
        }
        text_colour
      }
    }
    cosmicjsPageMetadata(title: { eq: "Homepage" }) {
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
