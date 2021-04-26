import * as React from "react";
import { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
// import PropTypes from 'prop-types'

// *** data, hooks & context

// *** components
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

// *** styled components
import { Icon, List, Collapse, ListItem, Wrapper } from "./NavMenu.style";
const NavLink = styled((props) => <Link {...props} />)`
  color: ${(p) => `rgb(${p.theme.common.white})`};
  text-decoration: none;
  font-weight: 500;
`;

const NavMenu = ({ active, ...props }) => {
  const [subOpen, setSubOpen] = useState("");

  // ?
  const toggleSub = (str) =>
    setSubOpen((subOpen) => (subOpen === str ? "" : str));

  return (
    <Wrapper active={active} {...props}>
      <List>
        <ListItem onClick={() => toggleSub("")}>
          <NavLink to="/">Home</NavLink>
        </ListItem>
        <ListItem onClick={() => toggleSub("")}>
          <NavLink to="/about">About Us</NavLink>
        </ListItem>
        <ListItem onClick={() => toggleSub()}>
          <NavLink to="/newsfeed">Newsfeed</NavLink>
        </ListItem>
        <ListItem onClick={() => toggleSub("")}>
          <NavLink to="/ecosystem">Ecosystem</NavLink>
        </ListItem>
        <ListItem onClick={() => toggleSub()}>
          <NavLink to="/contact">Contact</NavLink>
        </ListItem>
      </List>
    </Wrapper>
  );
};

// NavMenu.defaultProps = {}

// NavMenu.propTypes = {}

export default NavMenu;
