import * as React from "react";
import { useState, useEffect } from "react";
import { graphql } from "gatsby";
import Layout from "../style/Layout";
import { CSSTransition } from "react-transition-group";

// *** styled components
import {
  appearDuration,
  classes,
  StyledInnerHtml,
  StyledTestimonialView,
  MainTitle,
  SubTitle,
} from "../style/pages/Testimonials.style";

const Testimonials = ({ data }) => {
  // *** specify when page has loaded
  const [pageReady, setPageReady] = useState(false);

  // *** set page ready when page has loaded
  useEffect(() => {
    if (typeof window !== undefined) setPageReady(true);
  }, []);

  const {
    title,
    content,
    metadata: { introduction_title },
  } = data.cosmicjsTestimonialPage;
  return (
    <Layout>
      <MainTitle
        element="h2"
        variant="h3"
        align="center"
        gradient
        color="primary"
      >
        {title}
      </MainTitle>
      <CSSTransition
        in={pageReady}
        timeout={appearDuration}
        classNames={classes.welcome}
        appear
      >
        <StyledInnerHtml html={content} align="center" />
      </CSSTransition>
      <SubTitle
        element="h3"
        variant="h4"
        align="center"
        gradient
        color="primary"
      >
        {introduction_title}
      </SubTitle>
      <CSSTransition
        in={pageReady}
        timeout={appearDuration}
        classNames={classes.testimonials}
        appear
      >
        <StyledTestimonialView pageReady={pageReady} />
      </CSSTransition>
    </Layout>
  );
};

export default Testimonials;

export const query = graphql`
  query {
    cosmicjsTestimonialPage {
      slug
      title
      content
      metadata {
        introduction_title
      }
    }
  }
`;
