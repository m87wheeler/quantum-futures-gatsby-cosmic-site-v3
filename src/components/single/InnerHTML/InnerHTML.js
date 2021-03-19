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

  p {
    margin-bottom: 1.5rem;
  }

  img {
    display: block;
    max-width: 100%;
    max-height: 50vh;
    margin: 0 auto;
  }
`;

const InnerHTML = ({ html, align, lineHeight, font, ...props }) => {
  return (
    <Wrapper
      align={align}
      lineHeight={lineHeight}
      font={font}
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
};

InnerHTML.propTypes = {
  html: PropTypes.string.isRequired,
  align: PropTypes.oneOf(["left", "center", "right", "justify"]),
  lineHeight: PropTypes.number,
  font: PropTypes.oneOf(["default", "header", "mono"]),
};

export default InnerHTML;
