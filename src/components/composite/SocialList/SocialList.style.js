import styled, { css } from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  gap: 0.75rem;
  list-style-type: none;
  font-family: ${(p) => p.theme.font.family.header};

  li {
    ${(p) =>
      p.underline &&
      css`
        border-bottom: ${(p) =>
          `.1rem solid rgb(${
            p.background === "white"
              ? p.theme.common.black
              : p.theme.common.white
          } )`};
        transition: border 0.2s ease-in-out;

        &:hover {
          border-bottom: ${(p) => `.1rem solid rgb(${p.theme.primary.main})`};
        }
      `}

    a {
      font-weight: 500;
      text-transform: uppercase;
      text-decoration: none;
      color: ${(p) =>
        p.background === "white"
          ? `rgb(${p.theme.common.black})`
          : `rgb(${p.theme.common.white})`};
      transition: color 0.2s ease-in-out;
    }

    &:hover {
      a {
        color: ${(p) => `rgb(${p.theme.primary.main})`};
      }
    }
  }
`;
