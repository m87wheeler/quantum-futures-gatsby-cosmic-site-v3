import * as React from "react";
import { useState, useEffect } from "react";
import { graphql } from "gatsby";
import { CSSTransition } from "react-transition-group";

// *** data, hooks & context
import { mediaFormat } from "../assets/functions/mediaFormat";
import { useScroll } from "../hooks/useScroll";

// *** components
import Layout from "../style/Layout";
import Helmet from "../components/single/Helmet/Helmet";
import Parallax from "../components/single/Parallax/Parallax";

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
  const [pageReady, setPageReady] = useState(false);
  const [backdropActive, setBackdropActive] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(0);
  const { scrollY } = useScroll();

  // *** set page ready when page has loaded
  useEffect(() => {
    if (typeof window !== undefined) {
      setPageReady(true);
      setViewportHeight(window.innerHeight);
    }
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

  // ?
  useEffect(() => {
    let innerHeight;
    if (window !== undefined) innerHeight = window.innerHeight;
    if (scrollY > innerHeight * 0.9) {
      setBackdropActive(true);
    } else {
      setBackdropActive(false);
    }
  }, [scrollY]);

  return (
    <>
      <Helmet
        title={`${title_prefix} | ${page_title}`}
        canonical={canonical}
        description={description}
        keywords={keywords}
      />
      <Layout backdropActive={backdropActive}>
        {/** Background Media */}
        <Background>
          <VideoWrapper>{mediaFormat(hero_media.imgix_url)}</VideoWrapper>
        </Background>
        {/** Title Section */}
        <LandingSection>
          <Parallax>
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
                style={{
                  opacity: (
                    (viewportHeight - scrollY * 2.5) /
                    viewportHeight
                  ).toFixed(1),
                }}
              >
                {title}
              </Title>
            </CSSTransition>
          </Parallax>
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
