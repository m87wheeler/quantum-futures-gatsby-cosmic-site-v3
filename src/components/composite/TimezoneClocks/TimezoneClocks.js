import * as React from "react";

// *** data, hooks & context

// *** components
import InnerHTML from "../../single/InnerHTML/InnerHTML";
import Clock from "../../single/Clock/Clock";
import Typography from "../../single/Typography/Typography";

// *** styled components
import { Wrapper, ClockContainer } from "./TimezoneClocks.style";

const TimezoneClocks = ({ timezoneArr, ...props }) => {
  return (
    <Wrapper {...props}>
      {timezoneArr &&
        timezoneArr.map(({ node }, i) => (
          <ClockContainer
            key={node.id}
            style={{
              justifySelf:
                i === 0
                  ? "flex-start"
                  : i === timezoneArr.length - 1
                  ? "flex-end"
                  : "center",
            }}
          >
            <Typography
              weight="600"
              color="primary"
              family="header"
              transform="uppercase"
            >
              {node.title} Office
            </Typography>
            <Clock
              locale={node.metadata.locale}
              timezone={node.metadata.timezone}
            />
            <InnerHTML html={node.content} collapse />
            <Typography>
              <a href={`tel:${node.metadata.contact_number}`}>
                {node.metadata.contact_number}
              </a>
            </Typography>
          </ClockContainer>
        ))}
    </Wrapper>
  );
};

export default TimezoneClocks;
