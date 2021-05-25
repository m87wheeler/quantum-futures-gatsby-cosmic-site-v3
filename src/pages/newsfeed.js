import * as React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { graphql } from "gatsby";
import { CSSTransition } from "react-transition-group";

// *** components
import Layout from "../style/Layout";
import ListDisplayToggle from "../components/single/ListDisplayToggle/ListDisplayToggle";
import Helmet from "../components/single/Helmet/Helmet";

// *** styled components
import {
  appearDuration,
  classes,
  DisplayToggleWrapper,
  StyledNewsfeedList,
  Title,
} from "../style/pages/Newsfeed.style";
import { getCookie, setCookie } from "../functions/cookieFunctions";
import Button from "../components/single/Button/Button";
import Typography from "../components/single/Typography/Typography";
const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1rem;
  padding: 1rem;
  align-items: center;
  justify-items: center;
  grid-column: 5 / span 4;
`;

const NewsfeedPage = ({ data }) => {
  const [pageReady, setPageReady] = useState(false);
  const [layout, setLayout] = useState("grid");
  const [posts, setPosts] = useState([]);
  const [pageNavigate, setPageNavigate] = useState({
    current: 1,
    total: null,
    maxPerPage: 9,
  });

  // *** set page ready when page has loaded
  useEffect(() => {
    if (typeof window !== undefined) {
      setPageReady(true);
      window.scrollTo(0, 0);
      const layoutCookie = getCookie("newsfeedlayout");
      setLayout(layoutCookie ? layoutCookie : "grid");
    }
  }, []);

  // ?
  useEffect(() => {
    setPageNavigate((pageNavigate) => ({
      ...pageNavigate,
      total: Math.ceil(posts.length / pageNavigate.maxPerPage),
    }));
  }, [posts]);

  // ? setPosts on page load
  useEffect(() => {
    if (typeof window === undefined) return;
    const qfPosts = data.allCosmicjsBlogPosts.edges;
    const tqdPosts = data.allQuantumDailyPost.edges;
    const allPosts = [...qfPosts, ...tqdPosts]
      .map(({ node }) => ({
        ...node,
        type: node.slug ? "CosmicJS" : "TQD",
        created: new Date(node.created ? node.created : node.pubDate[0]),
      }))
      .sort((a, b) => b.created - a.created);
    setPosts(allPosts);
  }, []);

  // ? toggle page layout state
  const handleLayout = (e) => {
    let value = e.target.value;
    if (value) {
      setLayout(value);
      setCookie("newsfeedlayout", value);
    }
  };

  // ? iterate through newfeed items
  const iteratePage = (val) => {
    if (val > 0 && pageNavigate.current === pageNavigate.total) {
      setPageNavigate((pageNavigate) => ({
        ...pageNavigate,
        current: 1,
      }));
    } else if (val < 0 && pageNavigate.current === 1) {
      setPageNavigate((pageNavigate) => ({
        ...pageNavigate,
        current: pageNavigate.total,
      }));
    } else {
      setPageNavigate((pageNavigate) => ({
        ...pageNavigate,
        current: pageNavigate.current + val,
      }));
    }
    window.scrollTo(0, 0);
  };

  // *** destructure metadata
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
        <Title
          element="h2"
          gradient
          color="primary"
          transform="uppercase"
          style={{ paddingTop: "1.5rem", gridColumn: "1 / span 12" }}
        >
          Newsfeed
        </Title>
        <CSSTransition
          in={pageReady}
          timeout={appearDuration}
          classNames={classes.hero}
          appear
        >
          <DisplayToggleWrapper delay={0}>
            <ListDisplayToggle onChange={handleLayout} layout={layout} />
          </DisplayToggleWrapper>
        </CSSTransition>
        <CSSTransition
          in={pageReady}
          timeout={appearDuration}
          classNames={classes.hero}
          appear
        >
          <StyledNewsfeedList
            posts={posts.slice(
              (pageNavigate.current - 1) * pageNavigate.maxPerPage,
              (pageNavigate.current - 1) * pageNavigate.maxPerPage +
                pageNavigate.maxPerPage
            )}
            layout={layout}
            style={{ padding: "0 1rem" }}
            delay={1}
          />
        </CSSTransition>
        <ButtonContainer>
          <Button onClick={() => iteratePage(-1)}>-</Button>
          <Typography weight={500}>
            Page {pageNavigate.current} of {pageNavigate.total}
          </Typography>
          <Button onClick={() => iteratePage(1)}>+</Button>
        </ButtonContainer>
      </Layout>
    </>
  );
};

export default NewsfeedPage;

export const query = graphql`
  query {
    allCosmicjsBlogPosts(sort: { order: DESC, fields: created_at }) {
      totalCount
      edges {
        node {
          id
          created
          slug
          title
          content
          metadata {
            post_type
            cover_image {
              imgix_url
            }
          }
        }
      }
    }
    cosmicjsPageMetadata(title: { eq: "Newsfeed" }) {
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
    allQuantumDailyPost(sort: { order: DESC, fields: pubDate }) {
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
