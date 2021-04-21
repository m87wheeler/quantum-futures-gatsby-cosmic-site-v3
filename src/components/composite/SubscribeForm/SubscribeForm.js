import * as React from "react";
import styled from "styled-components";

// *** data, hooks & context

// *** components
import Button from "../../single/Button/Button";
import Input from "../../single/Input/Input";

// *** styled components
import { Wrapper, Contact, CallToAction } from "./SubscribeForm.style";

const SubscribeForm = ({
  onClick,
  onInput,
  inputName,
  inputValue,
  text = "white",
  ...props
}) => {
  return (
    <Wrapper {...props}>
      <CallToAction
        element="p"
        variant="h3"
        color={text === "black" ? "black" : "white"}
        family="header"
      >
        Subscribe to get the latest news and updates from Quantum Futures
      </CallToAction>
      <Contact>
        <Input
          type="email"
          name={inputName}
          value={inputValue}
          onInput={onInput}
        />
        <Button onClick={onClick}>Subscribe</Button>
      </Contact>
    </Wrapper>
  );
};

export default SubscribeForm;