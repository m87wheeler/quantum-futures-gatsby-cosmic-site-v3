import * as React from "react";
import { useState, useEffect } from "react";
import { graphql } from "gatsby";
import { CSSTransition } from "react-transition-group";

// *** data, hooks & context
import Layout from "../style/Layout";

// *** components
import ContactForm from "../components/composite/ContactForm/ContactForm";
import Typography from "../components/single/Typography/Typography";
import InnerHTML from "../components/single/InnerHTML/InnerHTML";
import SocialList from "../components/composite/SocialList/SocialList";
import TimezoneClocks from "../components/composite/TimezoneClocks/TimezoneClocks";
import LeafletMap from "../components/single/LeafletMap/LeafletMap";

// *** styled components
import {
  appearDuration,
  classes,
  IntroWrapper,
  FormWrapper,
  SocialWrapper,
  MapWrapper,
  OfficesWrapper,
} from "../style/pages/Contact.style";

const ContactPage = ({ data }) => {
  const [pageReady, setPageReady] = useState(false);
  const { endpoint } = data.cosmicjsContactFormConfiguration.metadata;
  const { title, content } = data.cosmicjsContactPage;
  const socialArr = data.allCosmicjsSocialMedia.edges;
  const officeArr = data.allCosmicjsOfficeDetails.edges;
  const {
    title: mapTitle,
    content: mapContent,
    metadata: { longitude, latitude, mapzoom },
  } = data.allCosmicjsOfficeDetails.edges[0].node;

  // *** set page ready when page has loaded
  useEffect(() => {
    if (typeof window !== undefined) {
      setPageReady(true);
    }
  }, []);

  return (
    <Layout>
      <CSSTransition
        in={pageReady}
        timeout={appearDuration}
        classNames={classes.hero}
        appear
      >
        <IntroWrapper delay={0}>
          <Typography
            element="h2"
            variant="h1"
            gradient
            color="primary"
            transform="uppercase"
          >
            {title}
          </Typography>
          <InnerHTML html={content} />
        </IntroWrapper>
      </CSSTransition>
      <CSSTransition
        in={pageReady}
        timeout={appearDuration}
        classNames={classes.hero}
        appear
      >
        <FormWrapper delay={0}>
          <ContactForm endpoint={endpoint} />
        </FormWrapper>
      </CSSTransition>
      <CSSTransition
        in={pageReady}
        timeout={appearDuration}
        classNames={classes.hero}
        appear
      >
        <SocialWrapper>
          <SocialList
            socialArr={socialArr}
            background="white"
            underline
            delay={0}
          />
        </SocialWrapper>
      </CSSTransition>
      <CSSTransition
        in={pageReady}
        timeout={appearDuration}
        classNames={classes.hero}
        appear
      >
        <MapWrapper delay={0}>
          <LeafletMap
            latitude={latitude}
            longitude={longitude}
            zoom={mapzoom}
            title={`${mapTitle} Office`}
            description={mapContent}
          />
        </MapWrapper>
      </CSSTransition>
      <CSSTransition
        in={pageReady}
        timeout={appearDuration}
        classNames={classes.hero}
        appear
      >
        <OfficesWrapper>
          <TimezoneClocks timezoneArr={officeArr} delay={0} />
        </OfficesWrapper>
      </CSSTransition>
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
            timezone
            locale
            latitude
            longitude
            mapzoom
          }
        }
      }
    }
  }
`;
