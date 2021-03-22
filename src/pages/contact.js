import * as React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
// import PropTypes from 'prop-types'

// *** data, hooks & context
import Layout from "../style/Layout";

// *** components
import ContactForm from "../components/composite/ContactForm/ContactForm";
import Typography from "../components/single/Typography/Typography";

// *** styled components
const Wrapper = styled.div`
  padding: 1rem;
  background: ${(p) => `rgb(${p.theme.common.black})`};
`;

const ContactPage = ({ data }) => {
  const { endpoint } = data.cosmicjsContactFormConfiguration.metadata;

  return (
    <Layout>
      <Wrapper>
        <Typography element="h2" variant="h3" gradient color="primary">
          Contact Us
        </Typography>
        <ContactForm endpoint={endpoint} />
      </Wrapper>
    </Layout>
  );
};

// ContactPage.defaultProps = {}

// ContactPage.propTypes = {}

export default ContactPage;

export const query = graphql`
  query {
    cosmicjsContactFormConfiguration {
      metadata {
        endpoint
      }
    }
  }
`;
