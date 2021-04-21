import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// *** styled components
const Wrapper = styled.div`
  text-align: ${(p) => p.align};
  line-height: ${(p) => p.lineHeight};
  font-family: ${(p) =>
    p.font === "header"
      ? p.theme.font.family.header
      : p.font === "mono"
      ? "monospace"
      : p.theme.font.family.sans};
  color: ${(p) => `rgb(${p.theme.common[p.color]})`};

  p {
    margin-bottom: ${(p) => (p.collapse ? "0" : "1.5rem")};
  }

  img {
    display: block;
    max-width: 100%;
    max-height: 50vh;
    margin: 0 auto;
  }

  @media (min-width: ${(p) => p.theme.media.md.min}) {
    columns: ${(p) => p.cols};
    column-gap: 1rem;
  }
`;

const InnerHTML = ({
  html,
  align,
  lineHeight,
  font,
  color = "black",
  cols,
  collapse = false,
  ...props
}) => {
  return (
    <Wrapper
      align={align}
      lineHeight={lineHeight}
      font={font}
      color={color}
      cols={cols}
      collapse={collapse}
      {...props}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

InnerHTML.defaultProps = {
  html: `<p>No Content Provided</p>`,
  align: "left",
  lineHeight: 1.5,
  font: "default",
  cols: 1,
};

InnerHTML.propTypes = {
  html: PropTypes.string.isRequired,
  align: PropTypes.oneOf(["left", "center", "right", "justify"]),
  lineHeight: PropTypes.number,
  font: PropTypes.oneOf(["default", "header", "mono"]),
  cols: PropTypes.number,
};

export default InnerHTML;
