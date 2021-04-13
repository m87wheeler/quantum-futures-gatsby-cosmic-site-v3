import * as React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  row-gap: 1rem;

  ${(p) =>
    p.layout === "grid" &&
    css`
      display: grid;
      gap: 1rem;
      grid-template-columns: 1fr;

      @media (min-width: ${(p) => p.theme.media.sm.min}) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (min-width: ${(p) => p.theme.media.lg.min}) {
        grid-template-columns: repeat(3, 1fr);
      }
    `}
`;

const ListContainer = ({ layout, children, ...props }) => {
  return (
    <Wrapper layout={layout} {...props}>
      {children}
    </Wrapper>
  );
};

ListContainer.defaultProps = {
  layout: "grid",
};

ListContainer.propTypes = {
  layout: PropTypes.oneOf(["list", "grid"]),
  children: PropTypes.node,
};

export default ListContainer;
