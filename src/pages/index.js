import * as React from "react";
import { useState, useEffect } from "react";
import { graphql } from "gatsby";

// *** data, hooks & context
import { mediaFormat } from "../assets/functions/mediaFormat";
import { useScroll } from "../hooks/useScroll";

// *** components
import Layout from "../style/Layout";
import Helmet from "../components/single/Helmet/Helmet";
import LandingIntroduction from "../components/views/LandingIntroduction/LandingIntroduction";
import LandingSection from "../components/views/LandingSection/LandingSection";

// *** styled components
import {
  Background,
  VideoWrapper,
  StyledNewsfeed,
  StyledWorkWith,
} from "../style/pages/Index.style";

const Index = ({ data }) => {
  const [viewportHeight, setViewportHeight] = useState(0);
  const [backdropActive, setBackdropActive] = useState(false);
  const [latestPosts, setLatestPosts] = useState([]);
  const { scrollY } = useScroll();

  // *** set page ready when page has loaded
  useEffect(() => {
    if (typeof window !== undefined) setViewportHeight(window.innerHeight);
  }, []);

  // *** change opacity on scroll
  useEffect(() => {
    let innerHeight;
    if (window !== undefined) innerHeight = window.innerHeight;
    if (scrollY > innerHeight * 0.9) {
      setBackdropActive(true);
    } else {
      setBackdropActive(false);
    }
  }, [scrollY, viewportHeight]);

  // *** set latest posts
  useEffect(() => {
    let localPosts = data.allCosmicjsBlogPosts.edges;
    let rssPosts = data.allQuantumDailyPost.edges;
    let allPosts = [...localPosts, ...rssPosts];

    // normalise published date and limit return to 4
    let normalisedPosts = allPosts
      .map(({ node }) => ({
        ...node,
        normalisedDate: new Date(
          node.pubDate ? node.pubDate : node.created
        ).getTime(),
      }))
      .sort((a, b) => (a.normalisedDate > b.normalisedDate ? -1 : 1))
      .map((post) => ({
        ...post,
        type: post.slug ? "CosmicJS" : "TQD",
        created: new Date(post.created ? post.created : post.pubDate[0]),
      }));
    setLatestPosts(normalisedPosts.splice(0, 6));
  }, [data.allCosmicjsBlogPosts.edges, data.allQuantumDailyPost.edges]);

  // *** destructure landing data
  const {
    metadata: { hero_media, landing_introduction },
  } = data.cosmicjsLandingPage;

  // *** destructure page metadata
  const { page_title, description, keywords } =
    data.cosmicjsPageMetadata.metadata;

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
      <Layout backdropActive={backdropActive} hideLogo>
        <Background>
          <VideoWrapper style={{ transform: "translateZ(-2px)" }}>
            {mediaFormat(hero_media.imgix_url)}
          </VideoWrapper>
        </Background>
        <LandingSection />
        <LandingIntroduction text={landing_introduction} />
        <StyledWorkWith />
        <StyledNewsfeed posts={latestPosts} background="black" />
      </Layout>
    </>
  );
};

export default Index;

export const query = graphql`
  query {
    allCosmicjsBlogPosts(limit: 6, sort: { order: DESC, fields: created }) {
      edges {
        node {
          id
          slug
          title
          created
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
    allQuantumDailyPost(limit: 6, sort: { order: DESC, fields: pubDate }) {
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
    cosmicjsLandingPage {
      title
      metadata {
        hero_media {
          imgix_url
        }
        text_colour
        landing_introduction
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
