import styled, { css } from "styled-components";

const colorOption = css`
  ${(p) =>
    p.color === "secondary"
      ? `rgb(${p.theme.secondary.main})`
      : p.color === "danger"
      ? `rgb(${p.theme.common.danger})`
      : p.color === "confirm"
      ? `rgb(${p.theme.common.confirm})`
      : p.color === "primary"
      ? `rgb(${p.theme.primary.main})`
      : p.color}
`;

export const Element = styled.button`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  padding: 0;
  width: 2rem;
  height: 1.5rem;
  border: none;
  background: transparent;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  span {
    position: absolute;
    left: 0;
    display: block;
    width: 100%;
    height: 0.2rem;
    background: ${(p) => `rgb(${p.theme.common.white})`};
    opacity: 1;
    transition: top 0.3s ease-in-out, transform 0.3s ease-in-out,
      opacity 0.3s ease-in-out 0.15s;

    &:nth-of-type(1) {
      top: 0;
    }
    &:nth-of-type(2) {
      top: 50%;
      transform: translateY(-50%);
    }
    &:nth-of-type(3) {
      top: calc(100% - 0.2rem);
    }
  }

  ${(p) =>
    p.active &&
    css`
      span {
        opacity: 0;

        &:nth-of-type(1) {
          top: 50%;
          transform: translateY(-50%);
        }
        &:nth-of-type(2) {
          top: 50%;
          transform: translateY(-50%);
        }
        &:nth-of-type(3) {
          top: 50%;
          transform: translateY(-50%);
        }
      }
    `}
`;

export const Cross = styled.div`
  position: relative;
  top: 0;
  left: 0.125rem;
  width: 1.75rem;
  height: 1.75rem;

  div {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1.75rem;
    height: 0.2rem;
    background: ${colorOption};
    transition: transform 0.3s ease-in-out 0.3s;

    &:first-of-type {
      transform: translate(-50%, -50%) rotate(45deg) scale(0);
    }

    &:last-of-type {
      transform: translate(-50%, -50%) rotate(-45deg) scale(0);
    }
  }

  ${(p) =>
    p.active &&
    css`
      div {
        &:first-of-type {
          transform: translate(-50%, -50%) rotate(45deg) scale(1);
        }

        &:last-of-type {
          transform: translate(-50%, -50%) rotate(-45deg) scale(1);
        }
      }
    `}
`;
