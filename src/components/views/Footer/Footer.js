import * as React from "react";
import { Link } from "gatsby";
// import PropTypes from 'prop-types'

// *** data, hooks & context

// *** components
import Typography from "../../../components/single/Typography/Typography";

// *** styled components
import { List, Wrapper, StyledSocialIcons } from "./Footer.style";

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
