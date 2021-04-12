import styled, { css } from "styled-components";

const sharedStyles = css`
  color: ${(p) =>
    typeof p.color === "number"
      ? `rgb(${p.theme.common.grey[p.color]})`
      : p.color === "danger"
      ? `#CD594A`
      : p.color === "confirm"
      ? `#A3B86C`
      : p.color === "primary" || p.color === "secondary"
      ? `rgb(${p.theme[p.color].main})`
      : p.color === "primary-contrast" || p.color === "secondary-contrast"
      ? `rgb(${p.theme[p.color].contrast})`
      : `rgb(${p.theme.common[p.color]})`};
  font-weight: ${(p) => p.weight};
  text-transform: ${(p) => p.transform};
  text-align: ${(p) => p.align};
  font-family: ${(p) => p.theme.font.family[p.family]};

  ${(p) =>
    p.gradient &&
    css`
      background: ${(p) =>
        p.color === "secondary"
          ? p.theme.secondary.gradient
          : p.theme.primary.gradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `}
`;
const textStyles = css`
  font-size: ${(p) =>
    p.variant
      ? p.theme.font.size.header[p.variant]
      : p.theme.font.size[p.size]};
  line-height: 1.5;
`;
const headerStyles = css`
  line-height: 1.25;
  font-size: ${(p) =>
    p.variant
      ? p.theme.font.size.header[p.variant]
      : p.theme.font.size.header[p.element]} !important;
`;

export const Text = styled.p`
  ${sharedStyles};
  ${textStyles};
`;
export const Span = styled.span`
  ${sharedStyles};
  ${textStyles};
`;
export const H1 = styled.h1`
  ${sharedStyles};
  ${headerStyles};
`;
export const H2 = styled.h2`
  ${sharedStyles};
  ${headerStyles};
`;
export const H3 = styled.h3`
  ${sharedStyles};
  ${headerStyles};
`;
export const H4 = styled.h4`
  ${sharedStyles};
  ${headerStyles};
`;
export const H5 = styled.h5`
  ${sharedStyles};
  ${headerStyles};
`;
export const H6 = styled.h6`
  ${sharedStyles};
  ${headerStyles};
`;
