import styled, { css } from "styled-components";
import TypeCard from "../../single/TypeCard/TypeCard";

export const Wrapper = styled.div`
  position: relative;
  padding-right: 4rem;
`;

export const StyledTypeCard = styled(TypeCard)`
  opacity: 0.5;
  transition: opacity 0.15s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  ${(p) =>
    p.active &&
    css`
      opacity: 1;

      &:hover {
        opacity: 1;
      }
    `}
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: ${(p) => `rgb(${p.theme.common.black})`};
  background: ${(p) => `rgba(${p.theme.common.black}, .9)`};
  backdrop-filter: blur(2px);
  overflow: hidden;

  ul {
    max-height: ${(p) => (p.active ? "50vh" : "0")};
    display: flex;
    flex-flow: column nowrap;
    gap: 0.25rem;
    padding: ${(p) => (p.active ? ".75rem" : "0 .75rem")};
    opacity: ${(p) => (p.active ? 1 : 0)};
    transition: max-height 0.3s ease-in-out, padding 0.3s ease-in-out,
      opacity 0.3s ease-in-out;

    li {
      list-style: none;
    }
  }
`;

export const CatWrapper = styled.label`
  position: relative;

  input {
    position: absolute;
    top: 0;
    left: -25%;
  }
`;
