import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import addToMailchimp from "gatsby-plugin-mailchimp";

// *** data, hooks & context
import { GlobalStyle } from "../style/GlobalStyle";
import { Theme } from "../style/Theme";

// *** components
import Typography from "../components/single/Typography/Typography";
import QFLogo from "../assets/svg/QFLogo";
import SubscribeForm from "../components/composite/SubscribeForm/SubscribeForm";

// *** styled components
const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  padding: calc(100vw / 12) 0;
  background: #111;
`;
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    95.46% 179.49% at 89.76% 16.85%,
    rgba(23, 23, 23, 0.06) 0%,
    rgba(150, 63, 255, 0.095) 46.88%,
    rgba(34, 34, 34, 0.02) 100%
  );
`;
const StyledQFLogo = styled(QFLogo)`
  width: calc(100vw - 4rem);
  max-width: 30rem;
  height: auto;

  @media (min-width: ${(p) => p.theme.media.sm.min}) {
    width: 50vw;
  }
`;
const StyledTypography = styled(Typography)`
  width: calc(100vw - 2rem);
  text-align: center;

  @media (min-width: ${(p) => p.theme.media.sm.min}) {
    width: calc((100vw / 12) * 10);
  }
`;
const StyledSubscribeForm = styled(SubscribeForm)`
  width: auto;
  align-self: center;

  p {
    display: none;
  }
`;

const UnderConstruction = ({ ...props }) => {
  const [subscribe, setSubscribe] = useState("");
  const [subscribeSuccess, setSubscribeSuccess] = useState({
    result: "",
    msg: "",
  });

  // ? handle subscription input
  const handleInput = (e) => {
    setSubscribe(e.target.value);
    setSubscribeSuccess({
      result: "",
      msg: "",
    });
  };

  // ? handle subscription submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addToMailchimp(subscribe);
    setSubscribeSuccess(result);
    setSubscribe("");
  };

  return (
    <Theme>
      <GlobalStyle />
      <Wrapper>
        <Background />
        <StyledQFLogo />
        <StyledTypography
          element="h2"
          variant="h2"
          color="white"
          weight={500}
          transform="uppercase"
        >
          Website Coming Soon
        </StyledTypography>
        <StyledTypography color="white" variant="h5">
          While we get things ready, why not subscribe to our newsletter.
        </StyledTypography>
        <StyledSubscribeForm
          inputName="email"
          inputValue={subscribe}
          onInput={handleInput}
          onClick={handleSubmit}
          success={subscribeSuccess}
        />
      </Wrapper>
    </Theme>
  );
};

export default UnderConstruction;
