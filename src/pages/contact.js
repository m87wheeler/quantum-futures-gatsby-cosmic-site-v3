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
import Helmet from "../components/single/Helmet/Helmet";
import SocialList from "../components/composite/SocialList/SocialList";
import TimezoneClocks from "../components/composite/TimezoneClocks/TimezoneClocks";

// *** styled components
import { LandingWrapper } from "../style/pages/About.style";

const ContactPage = ({ data }) => {
  const { endpoint } = data.cosmicjsContactFormConfiguration.metadata;
  const { title, content } = data.cosmicjsContactPage;
  const socialArr = data.allCosmicjsSocialMedia.edges;
  const officeArr = data.allCosmicjsOfficeDetails.edges;

  return (
    <Layout>
      <LandingWrapper style={{ gridArea: "intro", minHeight: "0" }}>
        <Typography
          element="h2"
          variant="h2"
          gradient
          color="primary"
          transform="uppercase"
        >
          {title}
        </Typography>
        <InnerHTML html={content} />
      </LandingWrapper>
      <LandingWrapper style={{ gridArea: "contact-form", paddingTop: "1rem" }}>
        <ContactForm endpoint={endpoint} />
      </LandingWrapper>
      <LandingWrapper
        style={{ gridArea: "social", paddingTop: "1rem", minHeight: 0 }}
      >
        <SocialList socialArr={socialArr} background="white" underline />
      </LandingWrapper>
      <LandingWrapper style={{ gridArea: "offices", paddingTop: "1rem" }}>
        <TimezoneClocks timezoneArr={officeArr} />
      </LandingWrapper>
    </Layout>
  );
};

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
    allCosmicjsSocialMedia {
      edges {
        node {
          id
          title
          metadata {
            profile_active
            profile_link
          }
        }
      }
    }
    allCosmicjsOfficeDetails {
      edges {
        node {
          id
          title
          content
          metadata {
            contact_number
            locale
            timezone
          }
        }
      }
    }
  }
`;
