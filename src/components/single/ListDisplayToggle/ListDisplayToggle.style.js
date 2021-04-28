import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 0.5rem;
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
        ? `${
            p.color === "secondary"
              ? `rgb(${p.theme.secondary.main})`
              : `rgb(${p.theme.primary.main})`
          }`
        : `rgb(${p.theme.common.grey[300]})`};
    transition: background 0.3s ease-in-out;

    &:before,
    &:after {
      background: ${(p) =>
        p.active
          ? `${
              p.color === "secondary"
                ? `rgb(${p.theme.secondary.main})`
                : `rgb(${p.theme.primary.main})`
            }`
          : `rgb(${p.theme.common.grey[300]})`};
      transition: background 0.3s ease-in-out;
    }
  }

  input {
    position: absolute;
    opacity: 0;
  }
`;

export const CardOption = styled(Option)`
  flex-flow: row wrap;
  row-gap: 0.125rem;
  gap: 0.125rem;

  span {
    width: calc(50% - 0.0625rem);
    height: calc(50% - 0.0625rem);
  }
`;

export const ListOption = styled(Option)`
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
