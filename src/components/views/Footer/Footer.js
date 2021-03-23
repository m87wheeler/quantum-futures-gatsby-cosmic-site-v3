import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
// import PropTypes from 'prop-types'

// *** data, hooks & context

// *** components
import Typography from "../../../components/single/Typography/Typography";
import SocialMediaIcons from "../../composite/SocialMediaIcons/SocialMediaIcons";

// *** styled components
const List = styled.ul``;
const Wrapper = styled.footer`
  display: grid;
  grid-template-rows: auto auto;
  gap: 1rem;
  width: 100%;
  padding: 1rem 0;
  background: ${(p) => `rgba(${p.theme.common.black}, .9)`};
  color: ${(p) => `rgb(${p.theme.common.white})`};

  li {
    list-style-type: none;
  }

  ${List} {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 1rem;

    li {
      align-self: center;
    }

    ${List} {
      grid-column: 7 / 11;
    }
  }
`;

const StyledSocialIcons = styled(SocialMediaIcons)`
  @media (min-width: ${(p) => p.theme.media.md.min}) {
    grid-column: 2 / 6;
  }
`;

const Footer = ({ ...props }) => {
  return (
    <Wrapper {...props}>
      <StyledSocialIcons />
      <List>
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
      </List>
    </Wrapper>
  );
};

// Footer.defaultProps = {}

// Footer.propTypes = {}

export default Footer;
