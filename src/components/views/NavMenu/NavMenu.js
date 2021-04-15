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
  color: white;
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
        <ListItem
          active={subOpen === "about"}
          onClick={() => toggleSub("about")}
        >
          <Icon icon={faChevronLeft} />
          About Us
          <Collapse>
            <ListItem onClick={() => toggleSub()}>
              <NavLink to="/philosophy">Our Philosophy</NavLink>
            </ListItem>
            <ListItem onClick={() => toggleSub()}>
              <NavLink to="/testimonials">Testimonials</NavLink>
            </ListItem>
          </Collapse>
        </ListItem>
        <ListItem onClick={() => toggleSub()}>
          <NavLink to="/newsfeed">Newsfeed</NavLink>
        </ListItem>
        <ListItem
          active={subOpen === "partnerships"}
          onClick={() => toggleSub("partnerships")}
        >
          <Icon icon={faChevronLeft} />
          Ecosystem
          <Collapse>
            <ListItem onClick={() => toggleSub()}>
              <NavLink to="/partnerships">Business Partnerships</NavLink>
            </ListItem>
            <ListItem onClick={() => toggleSub()}>
              <NavLink to="/community">Community</NavLink>
            </ListItem>
          </Collapse>
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
