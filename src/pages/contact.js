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
import SubscribeForm from "../components/composite/SubscribeForm/SubscribeForm";
import SocialList from "../components/composite/SocialList/SocialList";

// *** styled components
import { LandingWrapper } from "../style/pages/About.style";

const ContactPage = ({ data }) => {
  const { endpoint } = data.cosmicjsContactFormConfiguration.metadata;
  const { title, content } = data.cosmicjsContactPage;
  const socialArr = data.allCosmicjsSocialMedia.edges;

  console.log(socialArr);

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
          Contact Us
        </Typography>
        <InnerHTML html={content} />
      </LandingWrapper>
      <LandingWrapper style={{ gridArea: "contact-form", paddingTop: "1rem" }}>
        <ContactForm />
      </LandingWrapper>
      <LandingWrapper style={{ gridArea: "social", paddingTop: "1rem" }}>
        <SocialList socialArr={socialArr} background="white" underline />
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
  }
`;
