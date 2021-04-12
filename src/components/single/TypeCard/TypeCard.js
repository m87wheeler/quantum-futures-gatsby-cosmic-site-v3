import * as React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const colorOption = css`
  ${(p) =>
    p.type === "science" || p.type === "technology"
      ? `rgb(${p.theme.primary.dark})`
      : `rgb(${p.theme.secondary.main})`}
`;

const Element = styled.div`
  padding: 0.5rem 0.5rem 0.3rem 0.5rem;
  background: ${colorOption};
  color: white;
  /* border: none; */
  /* border-radius: 0; */
  text-transform: uppercase;
  font-family: ${(p) => p.theme.font.family.header};
  font-size: ${(p) => p.theme.font.size.xs};
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.05em;
  text-align: center;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: ${(p) => p.theme.shadow.main};
  }
`;

const TypeCard = ({ type, ...props }) => {
  return (
    <Element type={type} {...props}>
      {type}
    </Element>
  );
};

TypeCard.propTypes = {
  type: PropTypes.string.isRequired,
};

export default TypeCard;
