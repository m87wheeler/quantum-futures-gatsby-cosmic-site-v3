import * as React from "react";
import { useEffect } from "react";

// *** data, hooks & context
import Layout from "../../style/Layout";

// *** components

// *** styled components

const ContactPage = ({ pageContext }) => {
  useEffect(() => console.log(pageContext), []);

  return (
    <Layout>
      <h1>Contact - Created Page</h1>
    </Layout>
  );
};

export default ContactPage;
