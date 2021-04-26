import * as React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { graphql } from "gatsby";
import { CSSTransition } from "react-transition-group";

// *** data, hooks & context

// *** components
import Layout from "../style/Layout";
import Helmet from "../components/single/Helmet/Helmet";
import PhilosophyPrinciple from "../components/views/PhilosophyPrinciple/PhilosophyPrinciple";

// *** styled components
const Wrapper = styled.div``;

const Ecosystem = ({ data }) => {
  const [pageReady, setPageReady] = useState(false);

  // *** set page ready when page has loaded
  useEffect(() => {
    if (typeof window !== undefined) setPageReady(true);
  }, []);

  return <Wrapper></Wrapper>;
};

export default Ecosystem;

export const query = graphql`
  query {
    allCosmicjsEcosystems {
      edges {
        node {
          id
          title
          content
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
