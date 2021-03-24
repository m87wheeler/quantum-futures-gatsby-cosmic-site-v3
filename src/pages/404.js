import * as React from "react";

// *** components
import Layout from "../style/Layout";

// *** styled components
import {
  Title,
  Message,
  BackButton,
  ButtonLink,
  FlexGrid,
} from "../style/pages/404.style";

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <FlexGrid
        style={{
          height: "calc(100vh - 4.5rem)",
          justifyContent: "center",
          justifyItems: "center",
          alignContent: "center",
        }}
      >
        <Title element="h2" gradient color="primary">
          404
        </Title>
        <Message
          element="p"
          variant="h5"
          gradient
          color="primary"
          align="center"
          weight="600"
        >
          Hmm...Looks Like It's Just Us
        </Message>
        <BackButton color="secondary" variant="outline">
          <ButtonLink to="/">Back Home</ButtonLink>
        </BackButton>
      </FlexGrid>
    </Layout>
  );
};

export default NotFoundPage;
