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

// *** styled components
const Title = styled(Typography)`
  padding-top: 1rem;
`;
const Text = styled(InnerHTML)``;
const StyledContactForm = styled(ContactForm)``;

const FlexGrid = styled.div`
  display: flex;
  flex-flow: column nowrap;
  column-gap: 1rem;
  gap: 1rem;
  padding: 1rem;

  @media (min-width: ${(p) => p.theme.media.sm.min}) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);

    ${Title}, ${Text}, ${StyledContactForm} {
      grid-column: 2 / 12;
    }
  }

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    grid-column: 1 / 13;
  }

  @media (min-width: ${(p) => p.theme.media.lg.min}) {
    ${Title}, ${Text}, ${StyledContactForm} {
      grid-column: 4 / 10;
    }
  }
`;

const ContactPage = ({ data }) => {
  const { endpoint } = data.cosmicjsContactFormConfiguration.metadata;
  const { title, content } = data.cosmicjsContactPage;

  return (
    <Layout>
      <FlexGrid>
        <Title
          element="h2"
          variant="h3"
          gradient
          color="primary"
          align="center"
        >
          {title}
        </Title>
        {content ? <Text html={content} align="center" /> : null}
        <StyledContactForm endpoint={endpoint} />
      </FlexGrid>
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
