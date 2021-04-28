import * as React from "react";
import PropTypes from "prop-types";

// ***
import { Wrapper, CardOption, ListOption } from "./ListDisplayToggle.style";

const ListDisplayToggle = ({ layout, onChange, color, ...props }) => {
  return (
    <Wrapper {...props}>
      <CardOption color={color} active={layout === "grid"}>
        <input
          type="radio"
          checked={layout === "grid"}
          value="grid"
          onChange={onChange}
        />
        <span />
        <span />
        <span />
        <span />
      </CardOption>
      <ListOption color={color} active={layout === "list"}>
        <input
          type="radio"
          checked={layout === "list"}
          value="list"
          onChange={onChange}
        />
        <span />
        <span />
        <span />
      </ListOption>
    </Wrapper>
  );
};

ListDisplayToggle.defaultProps = {
  color: "secondary",
};

ListDisplayToggle.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary"]),
};

export default ListDisplayToggle;
