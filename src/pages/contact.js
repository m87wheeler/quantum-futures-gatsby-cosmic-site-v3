import * as React from "react";
import { graphql } from "gatsby";

// *** data, hooks & context
import Layout from "../style/Layout";

// *** components
import Helmet from "../components/single/Helmet/Helmet";
import ContactForm from "../components/composite/ContactForm/ContactForm";
import Typography from "../components/single/Typography/Typography";
import InnerHTML from "../components/single/InnerHTML/InnerHTML";
import SocialList from "../components/composite/SocialList/SocialList";
import TimezoneClocks from "../components/composite/TimezoneClocks/TimezoneClocks";

// *** styled components
import {
  IntroWrapper,
  FormWrapper,
  SocialWrapper,
  MapWrapper,
  TempMap,
  OfficesWrapper,
} from "../style/pages/Contact.style";

const ContactPage = ({ data }) => {
  const { endpoint } = data.cosmicjsContactFormConfiguration.metadata;
  const { title, content } = data.cosmicjsContactPage;
  const socialArr = data.allCosmicjsSocialMedia.edges;
  const officeArr = data.allCosmicjsOfficeDetails.edges;

  return (
    <Layout>
      <IntroWrapper>
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
      </IntroWrapper>
      <FormWrapper>
        <ContactForm endpoint={endpoint} />
      </FormWrapper>
      <SocialWrapper>
        <SocialList socialArr={socialArr} background="white" underline />
      </SocialWrapper>
      <MapWrapper>
        <TempMap />
      </MapWrapper>
      <OfficesWrapper>
        <TimezoneClocks timezoneArr={officeArr} />
      </OfficesWrapper>
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
