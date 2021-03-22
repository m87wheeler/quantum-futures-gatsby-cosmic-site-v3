import * as React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
// import PropTypes from 'prop-types'

// *** data, hooks & context
import Layout from "../style/Layout";

// *** components
import ContactForm from "../components/composite/ContactForm/ContactForm";
import Typography from "../components/single/Typography/Typography";
import InnerHTML from "../components/single/InnerHTML/InnerHTML";
import FlexStack from "../components/single/FlexStack/FlexStack";

// *** styled components
const StyledFlexStack = styled(FlexStack)`
  @media (min-width: ${(p) => p.theme.media.md.min}) {
    grid-column: 1 / 13;
  }
  @media (min-width: ${(p) => p.theme.media.xl.min}) {
    grid-column: 2 / 12;
  }
`;

const ContactPage = ({ data }) => {
  const { endpoint } = data.cosmicjsContactFormConfiguration.metadata;
  const { title, content } = data.cosmicjsContactPage;

  return (
    <Layout>
      <StyledFlexStack padding={4} gap={2} color="black">
        <Typography
          element="h2"
          variant="h3"
          gradient
          color="primary"
          align="center"
        >
          {title}
        </Typography>
        {content ? (
          <InnerHTML html={content} color="white" align="center" />
        ) : null}
        <ContactForm endpoint={endpoint} />
      </StyledFlexStack>
    </Layout>
  );
};

// ContactPage.defaultProps = {}

// ContactPage.propTypes = {}

export default ContactPage;

export const query = graphql`
  query {
    cosmicjsContactPage {
      title
      content
    }
    cosmicjsContactFormConfiguration {
      metadata {
        endpoint
      }
    }
  }
`;
