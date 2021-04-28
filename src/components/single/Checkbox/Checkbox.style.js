import styled, { css } from "styled-components";

export const Label = styled.label`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.75rem;
  align-items: center;
`;

export const Element = styled.input`
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    background: white;
    outline: ${(p) => `.15rem solid rgb(${p.theme.primary.main})`};
  }

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: calc(50% + 0.125rem);
    transform: translate(-50%, -50%);
    width: 0.75rem;
    height: 0.75rem;
    background: none;
    z-index: 3;
    transition: background 0.2s ease-in-out;
  }

  ${(p) =>
    p.checked &&
    css`
      &:before {
        background: ${(p) => `rgb(${p.theme.primary.main})`};
      }
    `}
`;
