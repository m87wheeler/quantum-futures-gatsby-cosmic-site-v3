import styled from "styled-components";

export const ClockContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  gap: 1rem;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 3rem;

  * {
    text-align: center;
  }

  @media (min-width: ${(p) => p.theme.media.sm.min}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    ${ClockContainer} {
      justify-self: center;

      &:first-of-type {
        justify-self: flex-start;
      }
      &:last-of-type {
        justify-self: flex-end;
      }
    }
  }
`;
