import * as React from "react";
import styled from "styled-components";

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
      {timezoneArr ? (
        timezoneArr.map(({ node }) => (
          <ClockContainer key={node.id}>
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
        ))
      ) : (
        <p>Loading...</p>
      )}
    </Wrapper>
  );
};

export default TimezoneClocks;
