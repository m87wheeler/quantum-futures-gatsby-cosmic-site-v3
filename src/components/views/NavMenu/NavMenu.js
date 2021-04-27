import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
// import PropTypes from 'prop-types'

// *** data, hooks & context

// *** components

// *** styled components
import { List, ListItem, Wrapper } from "./NavMenu.style";
const NavLink = styled((props) => <Link {...props} />)`
  color: ${(p) => `rgb(${p.theme.common.white})`};
  text-decoration: none;
  font-weight: 500;
`;

const NavMenu = ({ active, ...props }) => {
  return (
    <Wrapper active={active} tabIndex={-1} {...props}>
      <List>
        <ListItem>
          <NavLink to="/">Home</NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/about">About Us</NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/newsfeed">Newsfeed</NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/ecosystem">Ecosystem</NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/contact">Contact</NavLink>
        </ListItem>
      </List>
    </Wrapper>
  );
};

// NavMenu.defaultProps = {}

// NavMenu.propTypes = {}

export default NavMenu;
