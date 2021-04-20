import * as React from "react";
import { Helmet as HelmetElement } from "react-helmet";

const Helmet = ({ title, canonical, description, keywords, children }) => {
  return (
    <HelmetElement
      htmlAttributes={{
        lang: "en-GB",
      }}
    >
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="canonical" href={canonical} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta
        name="author"
        content="MWWDD - Martin Wheeler Web Development & Design 2021"
      ></meta>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      {children}
    </HelmetElement>
  );
};

export default Helmet;
