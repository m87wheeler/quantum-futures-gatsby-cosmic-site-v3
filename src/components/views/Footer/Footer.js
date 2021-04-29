import * as React from "react";
import { useState } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import addToMailchimp from "gatsby-plugin-mailchimp";

// *** data, hooks & context

// *** components
import SubscribeForm from "../../composite/SubscribeForm/SubscribeForm";
import SocialList from "../../composite/SocialList/SocialList";
import InnerHTML from "../../single/InnerHTML/InnerHTML";

// *** styled components
import {
  Wrapper,
  FootSection,
  NavigationList,
  Creators,
  Address,
  ContactDetail,
} from "./Footer.style";

const Footer = ({ ...props }) => {
  const [subscribe, setSubscribe] = useState("");
  const [subscribeSuccess, setSubscribeSuccess] = useState({
    result: "",
    msg: "",
  });

  // *** data query
  const data = useStaticQuery(graphql`
    query {
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
      cosmicjsContactPage {
        metadata {
          main_contact_number
          main_contact_address
        }
      }
      cosmicjsSiteMetadata {
        metadata {
          canonical
        }
      }
    }
  `);
  const socialArr = data.allCosmicjsSocialMedia.edges;
  const {
    main_contact_number,
    main_contact_address,
  } = data.cosmicjsContactPage.metadata;
  const { canonical } = data.cosmicjsSiteMetadata.metadata;

  // ? handle subscription input
  const handleInput = (e) => {
    setSubscribe(e.target.value);
    setSubscribeSuccess({
      result: "",
      msg: "",
    });
  };

  // ? handle subscription submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addToMailchimp(subscribe);
    setSubscribeSuccess(result);
    setSubscribe("");
  };

  return (
    <Wrapper {...props}>
      <SubscribeForm
        style={{ gridArea: "contact" }}
        inputName="email"
        inputValue={subscribe}
        onInput={handleInput}
        onClick={handleSubmit}
        success={subscribeSuccess}
      />
      <FootSection style={{ gridArea: "navigation" }}>
        <NavigationList>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/newsfeed">Newsfeed</Link>
          </li>
          <li>
            <Link to="/ecosystem">Ecosystem</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </NavigationList>
      </FootSection>
      <FootSection style={{ gridArea: "social" }}>
        <SocialList socialArr={socialArr} />
      </FootSection>
      <FootSection style={{ gridArea: "creator", justifyContent: "flex-end" }}>
        <Creators>
          <p>&copy; 2021 Quantum Futures</p>
          <p>
            Website Designed by <a href="website">MWWDD</a> &{" "}
            <a href="website">RWD2</a>
          </p>
          <p>
            Website Built by <a href="website">MWWDD</a>
          </p>
        </Creators>
      </FootSection>
      <FootSection style={{ gridArea: "address", justifyContent: "flex-end" }}>
        <Address>
          <InnerHTML
            html={`<p>${main_contact_address.replace(/\n/g, "<br />")}</p>`}
            color="white"
            collapse
            style={{ lineHeight: 1.5 }}
          />
        </Address>
        <ContactDetail href={`tel:${main_contact_number}`}>
          {main_contact_number}
        </ContactDetail>
      </FootSection>
      <FootSection style={{ gridArea: "other", justifyContent: "flex-end" }}>
        <a href={`${canonical}/sitemap.xml`}>Sitemap</a>
        {/* <a href="privacy">Privacy Policy</a> */}
      </FootSection>
    </Wrapper>
  );
};

export default Footer;
