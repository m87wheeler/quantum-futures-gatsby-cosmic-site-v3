import * as React from "react";
import { useState, useEffect } from "react";

// *** styled components
import { Container, Face, MinuteHand, HourHand } from "./Clock.style";

const Clock = ({ timezone, ...props }) => {
  const [degrees, setDegrees] = useState({
    hour: 0,
    min: 0,
  });

  useEffect(() => {
    let interval = setInterval(() => {
      let hr = +new Date().toLocaleTimeString("en-GB", {
        timeZone: timezone,
        hour: "numeric",
      });
      let min = +new Date().toLocaleTimeString("en-GB", {
        timeZone: timezone,
        minute: "numeric",
      });
      let sec = +new Date().toLocaleTimeString("en-GB", {
        timeZone: timezone,
        second: "numeric",
      });

      let hrPosition = (hr * 360) / 12 + (min * 360) / 60 / 12;
      let minPosition = (min * 360) / 60 + (sec * 360) / 60 / 60;

      setDegrees({
        hour: hrPosition,
        min: minPosition,
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container {...props}>
      <Face />
      <MinuteHand deg={degrees.min} />
      <HourHand deg={degrees.hour} />
    </Container>
  );
};

export default Clock;
