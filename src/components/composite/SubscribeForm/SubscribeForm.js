import * as React from "react";

// *** data, hooks & context

// *** components
import Button from "../../single/Button/Button";
import InnerHTML from "../../single/InnerHTML/InnerHTML";
import Input from "../../single/Input/Input";

// *** styled components
import { Wrapper, Contact, CallToAction } from "./SubscribeForm.style";

const SubscribeForm = ({
  onClick,
  onInput,
  inputName,
  inputValue,
  success,
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
          placeholder="Email address"
          name={inputName}
          value={inputValue}
          onInput={onInput}
        />
        <Button onClick={onClick}>Subscribe</Button>
      </Contact>
      <InnerHTML
        html={success.result ? success.msg : `<div />`}
        color="white"
        collapse
        style={{ minHeight: "3rem" }}
      />
    </Wrapper>
  );
};

export default SubscribeForm;
