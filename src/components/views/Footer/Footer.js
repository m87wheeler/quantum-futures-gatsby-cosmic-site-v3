import * as React from "react";
import styled from "styled-components";

// *** data, hooks & context

// *** components
import Input from "../../single/Input/Input";
import Button from "../../single/Button/Button";
import Typography from "../../single/Typography/Typography";

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

const Contact = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 0.5rem;

  @media (min-width: ${(p) => p.theme.media.sm.min}) {
    justify-items: flex-start;
  }

  @media (min-width: ${(p) => p.theme.media.lg.min}) {
    grid-template-columns: repeat(2, auto);
  }
`;

const CallToAction = styled(Typography)`
  @media (min-width: ${(p) => p.theme.media.lg.min}) {
    max-width: 25vw;
    line-height: 1.25;
    margin: -0.5rem 0 1rem;
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
  return (
    <Wrapper {...props}>
      <FootSection style={{ gridArea: "contact" }}>
        <CallToAction element="p" variant="h3" color="white" family="header">
          Subscribe to get the latest news and updates from Quantum Futures
        </CallToAction>
        <Contact>
          <Input type="email" />
          <Button>Subscribe</Button>
        </Contact>
      </FootSection>
      <FootSection style={{ gridArea: "navigation" }}>
        <NavigationList>
          <li>
            <a href="a">Home</a>
          </li>
          <li>
            <a href="a">Our Philosophy</a>
          </li>
          <li>
            <a href="a">Testimonials</a>
          </li>
          <li>
            <a href="a">Newsfeed</a>
          </li>
          <li>
            <a href="a">Community</a>
          </li>
          <li>
            <a href="a">Partnerships</a>
          </li>
          <li>
            <a href="a">Contact</a>
          </li>
        </NavigationList>
      </FootSection>
      <FootSection style={{ gridArea: "social" }}>
        <NavigationList>
          <li>
            <a href="website">LinkedIn</a>
          </li>
          <li>
            <a href="website">Facebook</a>
          </li>
          <li>
            <a href="website">Instagram</a>
          </li>
          <li>
            <a href="website">YouTube</a>
          </li>
        </NavigationList>
      </FootSection>
      <FootSection style={{ gridArea: "creator" }}>
        <Creators>
          <p>&copy; 2021 Quantum Futures</p>
          <p>
            Website Designed by <a href="website">MWWDD</a> &{" "}
            <a href="website">RW2D</a>
          </p>
          <p>
            Website Built by <a href="website">MWWDD</a>
          </p>
        </Creators>
      </FootSection>
      <FootSection style={{ gridArea: "address" }}>
        <Address>
          <span>201 Borough High Street</span>
          <span>London SE1 1JA</span>
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
