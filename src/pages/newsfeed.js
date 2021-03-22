import * as React from "react";
import { useState, useEffect } from "react";
import { graphql } from "gatsby";

// *** components
import Layout from "../style/Layout";
import ListDisplayToggle from "../components/single/ListDisplayToggle/ListDisplayToggle";
import FilterPosts from "../components/composite/FilterPosts/FilterPosts";

// *** styled components
import {
  DisplayToggleWrapper,
  StyledNewsfeedList,
} from "../style/pages/Newsfeed.style";
import Helmet from "../components/single/Helmet/Helmet";

const NewsfeedPage = ({ data }) => {
  // *** toggle between grid and list view
  const [layout, setLayout] = useState("grid");
  // *** hold the fetched post data for filtering
  const [posts, setPosts] = useState([]);
  // *** hold filtered posts
  const [filteredPosts, setFilteredPosts] = useState([]);
  // *** set post category types
  const [catTypes, setCatTypes] = useState([]);
  // *** select category type filter
  const [catSelected, setCatSelected] = useState([]);

  // ? setPosts on page load
  useEffect(() => {
    if (typeof window !== undefined) setPosts(data.allCosmicjsBlogPosts.edges);
  }, [data.allCosmicjsBlogPosts.edges]);

  useEffect(() => console.log("Posts: ", posts), [posts]);
  useEffect(() => console.log("Filtered: ", filteredPosts), [filteredPosts]);

  // ? setCatTypes on page load
  useEffect(() => {
    if (typeof window !== undefined && posts.length) {
      let catArr = posts.map((entry) => entry.node.metadata.post_type);
      let unique = Array.from(new Set(catArr));
      setCatTypes(unique);
    }
  }, [posts]);

  // ? filter and update posts based on user selection
  useEffect(() => {
    let filtered = [];
    if (catSelected.length && posts.length) {
      filtered = posts.filter(({ node }) =>
        catSelected.includes(node.metadata.post_type)
      );
    }
    setFilteredPosts(filtered);
  }, [catSelected, posts]);

  // ? toggle page layout state
  const handleLayout = (e) => {
    let value = e.target.value;
    if (value) setLayout(value);
  };

  // ? handle filter change
  const handleChange = (e) => {
    let cat = e.target.value;
    let updatedArr = [];
    if (catSelected.includes(cat)) {
      updatedArr = catSelected.filter((entry) => entry !== cat);
    } else {
      updatedArr = [...catSelected, cat];
    }
    setCatSelected(updatedArr);
  };

  // ? handle filter clear
  const handleClear = () => setCatSelected([]);

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
        <DisplayToggleWrapper>
          <FilterPosts
            cats={catTypes}
            selected={catSelected}
            onChange={handleChange}
            onClick={handleClear}
          />
          <ListDisplayToggle onClick={handleLayout} />
        </DisplayToggleWrapper>
        <StyledNewsfeedList
          posts={filteredPosts.length ? filteredPosts : posts}
          layout={layout}
          style={{ padding: "0 1rem" }}
        />
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
          created(formatString: "Do MMMM YYYY")
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
  }
`;
