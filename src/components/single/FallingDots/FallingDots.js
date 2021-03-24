import * as React from "react";
import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
// import PropTypes from 'prop-types'

// *** data, hooks & context

// *** components

// *** styled components
const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 4.5rem);
  background: ${(p) => `rgba(${p.theme.common.black}, .9)`};
`;

const fadeOut = keyframes`
  from { filter: brightness(1) blur(2px); opacity: 1; }
  to { filter: brightness(0) blur(2px); opacity: 0; }
`;
const fadeIn = keyframes`
  from { filter: brightness(1) blur(2px) }
  to { filter: brightness(0) blur(2px) }
`;

const Dot = styled.div`
  position: relative;
  top: ${(p) => `${p.top}px`};
  left: ${(p) => `${p.left}px`};
  width: ${(p) => (p.scale === 1 ? "10px" : p.scale === 2 ? "15px" : "18px")};
  height: ${(p) => (p.scale === 1 ? "10px" : p.scale === 2 ? "15px" : "18px")};
  background: ${(p) =>
    p.color === "primary"
      ? `rgb(${p.theme.primary.main})`
      : `rgb(${p.theme.secondary.main})`};
  border-radius: 100%;
  transition: top 30s ease-in-out;
  filter: brightness(1) blur(2px);
  animation: ${fadeOut} 3s ease-in-out forwards;
  z-index: ${(p) => (p.scale === 1 ? "-1" : p.scale === 2 ? "1" : "2")};
`;

const FallingDots = ({ ...props }) => {
  const dotsTotal = 150;
  const [dotsArr, setDotsArr] = useState([]);
  const container = useRef(null);

  // ?
  useEffect(() => {
    if (typeof window !== undefined && container.current) {
      // get container element dimensions
      const containerParams = {
        width: container.current.getBoundingClientRect().width,
        height: container.current.getBoundingClientRect().height,
      };

      console.log(containerParams.width, containerParams.height);

      // random number from 1 - n
      const random = (max = 3) => {
        const rand = Math.floor(Math.random() * max);
        return parseInt(rand, 10);
      };

      // generate random co-ordinates
      const generateCoords = (maxTop, maxLeft) => {
        const top = Math.round(Math.random() * parseInt(maxTop, 10));
        const left = Math.round(Math.random() * parseInt(maxLeft, 10));
        return { top, left };
      };

      // primary or secondary
      const colorProfile = () => {
        const rand = random(2);
        return rand === 0 ? "primary" : "secondary";
      };

      // generate array for total number of dots
      let dotTotalArr = Array(dotsTotal)
        .join()
        .split(",")
        .map(
          function (a) {
            return this.i++;
          },
          { i: 1 }
        );

      // generate dots array
      let dotArr = dotTotalArr.map((_) => {
        const pos = generateCoords(
          containerParams.height,
          containerParams.width
        );
        const scale = random() + 1;
        const color = colorProfile();
        return {
          top: pos.top,
          left: pos.left,
          scale,
          color,
        };
      });
      setDotsArr(dotArr);
    }
  }, []);

  return (
    <Wrapper ref={container} {...props}>
      {dotsArr.map((dot, i) => (
        <Dot
          key={i}
          top={dot.top}
          left={dot.left}
          color={dot.color}
          scale={dot.scale}
        />
      ))}
    </Wrapper>
  );
};

// FallingDots.defaultProps = {}

// FallingDots.propTypes = {}

export default FallingDots;
