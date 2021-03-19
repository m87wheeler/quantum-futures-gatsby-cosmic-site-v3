import * as React from "react";
import styled from "styled-components";
import { useState } from "react";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

const Option = styled.label`
  position: relative;
  width: 2rem;
  height: 1.5rem;
  display: flex;
  cursor: pointer;

  span {
    background: ${(p) =>
      p.active
        ? `${p.color === "secondary" ? "rgb(233,22,255)" : "rgb(0,163,163)"}`
        : "rgb(200, 200, 200)"};
    transition: background 0.3s ease-in-out;

    &:before,
    &:after {
      background: ${(p) =>
        p.active
          ? `${p.color === "secondary" ? "rgb(233,22,255)" : "rgb(0,163,163)"}`
          : "rgb(200, 200, 200)"};
      transition: background 0.3s ease-in-out;
    }
  }

  input {
    position: absolute;
    opacity: 0;
  }
`;

const CardOption = styled(Option)`
  flex-flow: row wrap;
  gap: 0.125rem;

  span {
    width: calc(50% - 0.0625rem);
    height: calc(50% - 0.0625rem);
  }
`;

const ListOption = styled(Option)`
  flex-flow: column nowrap;
  justify-content: space-between;

  span {
    margin-left: 0.5rem;
    width: 1.5rem;
    height: 0.25rem;

    &:before {
      content: "";
      display: block;
      margin-left: -0.5rem;
      width: 0.25rem;
      height: 0.25rem;
      border-radius: 100%;
    }
  }
`;

const ListDisplayToggle = ({ color, children, ...props }) => {
  const [layout, setLayout] = useState("grid");

  const handleInput = (e) => setLayout(e.target.value);

  return (
    <Wrapper {...props}>
      <CardOption color={color} active={layout === "grid"}>
        <input
          type="radio"
          checked={layout === "grid"}
          value="grid"
          onChange={handleInput}
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
          onChange={handleInput}
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
  children: PropTypes.node,
};

export default ListDisplayToggle;
