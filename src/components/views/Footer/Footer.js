import * as React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql, Link } from "gatsby";

// *** data, hooks & context

// *** components
import SubscribeForm from "../../composite/SubscribeForm/SubscribeForm";
import SocialList from "../../composite/SocialList/SocialList";

// *** styled components
const Wrapper = styled.footer`
  min-height: 100vh;
  width: 100%;
  padding: 7.5rem 2rem 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, auto);
  grid-template-areas:
    "contact contact"
    "navigation social"
    "navigation creator"
    "address other";
  gap: 10vh 1rem;
  background: ${(p) => `rgb(${p.theme.common.black})`};

  @media (min-width: ${(p) => p.theme.media.lg.min}) {
    padding: 30vh calc((100vw / 12) + 1rem) 5rem;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "contact navigation social"
      "creator address other";
    gap: 1rem;
  }
`;

const FootSection = styled.div`
  display: flex;
  flex-flow: column nowrap;
  color: ${(p) => `rgb(${p.theme.common.white})`};
  gap: 1.5rem;

  @media (min-width: ${(p) => p.theme.media.lg.min}) {
    gap: 0.5rem;
  }
`;

const NavigationList = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  gap: 0.75rem;
  list-style-type: none;
  font-family: ${(p) => p.theme.font.family.header};

  li {
    a {
      font-weight: 500;
      text-transform: uppercase;
      text-decoration: none;
      color: ${(p) => `rgb(${p.theme.common.white})`};
      transition: color 0.2s ease-in-out;
    }

    &:hover {
      a {
        color: ${(p) => `rgb(${p.theme.primary.main})`};
      }
    }
  }
`;

const Creators = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 0.5rem;

  p {
    padding-left: 0.5rem;
    border-left: ${(p) => `0.25rem solid rgb(${p.theme.primary.main})`};
  }
`;

const Address = styled.address`
  font-style: normal;

  span {
    display: block;
  }
`;
const ContactDetail = styled.a``;

const Footer = ({ ...props }) => {
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
    }
  `);
  const socialArr = data.allCosmicjsSocialMedia.edges;

  return (
    <Wrapper {...props}>
      <SubscribeForm
        style={{ gridArea: "contact" }}
        inputName="email"
        inputValue={"test.email@gmail.com"}
        onInput={(e) => console.log(e.target.value)}
        onClick={() => alert("subscribe!")}
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
      <FootSection style={{ gridArea: "creator" }}>
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
      <FootSection style={{ gridArea: "address" }}>
        <Address>
          <span>100 Alpha House</span>
          <span>Borough High Street</span>
          <span>London</span>
          <span>SE1 1LB</span>
        </Address>
        <ContactDetail href="tel:12345">0203 800 1450</ContactDetail>
      </FootSection>
      <FootSection style={{ gridArea: "other" }}>
        <a href="sitemap">Sitemap</a>
        <a href="privacy">Privacy Policy</a>
      </FootSection>
    </Wrapper>
  );
};

export default Footer;
