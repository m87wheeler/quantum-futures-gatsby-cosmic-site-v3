import styled, { css } from "styled-components";

export const backgroundCSS = css`
  width: 8rem;
  height: 8rem;
  background-image: ${(p) => p.theme.primary.gradient};
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

export const Container = styled.div`
  ${backgroundCSS};
  position: relative;
  width: 8rem;
  height: 8rem;
  border-radius: 100%;
`;

export const Face = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  width: 7rem;
  height: 7rem;
  background: ${(p) => `rgb(${p.theme.common.white})`};
  border-radius: 100%;
`;

export const Hand = styled.div`
  ${backgroundCSS};
  position: absolute;
  transform-origin: 0 0;
  top: 50%;
  left: 50%;
  width: 0.5rem;
  border-radius: 0.25rem;
`;

export const MinuteHand = styled(Hand)`
  height: 3.5rem;
  transform: ${(p) =>
    `rotate(${p.deg}deg) translate(calc(-50%), calc(-50% - 1.615rem))`};
`;

export const HourHand = styled(Hand)`
  height: 2.75rem;
  transform: ${(p) =>
    `rotate(${p.deg}deg) translate(calc(-50%), calc(-50% - 1.125rem))`};
`;
