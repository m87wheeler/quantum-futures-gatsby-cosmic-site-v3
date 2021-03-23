import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
// import PropTypes from 'prop-types'

// *** data, hooks & context

// *** components
import Typography from "../../../components/single/Typography/Typography";
import SocialMediaIcons from "../../composite/SocialMediaIcons/SocialMediaIcons";

// *** styled components
const Wrapper = styled.footer`
  display: grid;
  grid-template-rows: auto auto;
  gap: 1rem;
  width: 100%;
  padding: 1rem 0;
  background: ${(p) => `rgba(${p.theme.common.black}, .9)`};
  color: ${(p) => `rgb(${p.theme.common.white})`};

  ul {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    list-style: none;
  }

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 1rem;
  }
`;

const Footer = ({ ...props }) => {
  return (
    <Wrapper {...props}>
      <SocialMediaIcons />
      <ul>
        <li>
          <Typography size="sm">
            <Link to="/sitemap.xml">Sitemap</Link>
          </Typography>
        </li>
        <li>
          <Typography color="white" size="sm">
            &copy; 2021 Quantum Futures
          </Typography>
        </li>
        <li>
          <Typography color="white" size="sm">
            Designed and built by{" "}
            <Link to="https://martinwheelerweb.com" target="_blank">
              MWWDD
            </Link>
          </Typography>
        </li>
      </ul>
    </Wrapper>
  );
};

// Footer.defaultProps = {}

// Footer.propTypes = {}

export default Footer;
