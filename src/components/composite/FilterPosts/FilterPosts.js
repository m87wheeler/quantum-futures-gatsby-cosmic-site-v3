import * as React from "react";
import { useState, useRef } from "react";
// import PropTypes from 'prop-types'

// *** data, hooks & context
import { useClickOutside } from "../../../hooks/useClickOutside";

// *** components
import Typography from "../../single/Typography/Typography";
import Button from "../../single/Button/Button";

// *** styled components
import {
  Wrapper,
  StyledTypeCard,
  Dropdown,
  CatWrapper,
} from "./FilterPosts.style";

const FilterPosts = ({ cats, selected = [], onChange, onClick, ...props }) => {
  const [selectOpen, setSelectOpen] = useState(false);

  // ? close modal on click outisde
  const ref = useRef();
  useClickOutside(ref, () => setSelectOpen(false));

  // ?
  const toggleSelect = (e) => {
    e.stopPropagation();
    setSelectOpen(!selectOpen);
  };

  const categories = ["technology", "science", "news", "business", "careers"];

  return (
    <Wrapper ref={ref} {...props}>
      <Typography
        weight={600}
        gradient
        color="primary"
        style={{ cursor: "pointer" }}
        onClick={toggleSelect}
      >
        Filter
      </Typography>
      <Dropdown tabIndex="100" active={selectOpen}>
        <ul>
          {categories.map((cat) => (
            <CatWrapper key={cat}>
              <input
                type="checkbox"
                value={cat}
                checked={selected.includes(cat)}
                onChange={onChange}
              />
              <StyledTypeCard type={cat} active={selected.includes(cat)} />
            </CatWrapper>
          ))}
          <li>
            <Button variant="text" size="sm" onClick={onClick}>
              Clear
            </Button>
          </li>
        </ul>
      </Dropdown>
    </Wrapper>
  );
};

// FilterPosts.defaultProps = {}

// FilterPosts.propTypes = {}

export default FilterPosts;
