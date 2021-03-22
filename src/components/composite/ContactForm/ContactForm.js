import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
// import PropTypes from 'prop-types'

// *** data, hooks & context

// *** components
import Input from "../../single/Input/Input";
import Button from "../../single/Button/Button";
import Typography from "../../single/Typography/Typography";
import FlexStack from "../../single/FlexStack/FlexStack";

// *** styled components

const ContactForm = ({ endpoint, ...props }) => {
  const initialState = {
    name: "",
    email: "",
    message: "",
  };
  const [formState, setFormState] = useState(initialState);
  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: [false, ""],
  });

  // ?
  const handleInput = (e) =>
    setFormState((formState) => ({
      ...formState,
      [e.target.name]: e.target.value,
    }));

  // ?
  const handleSubmit = async () => {
    if (!formState.name || !formState.email || !formState.message) {
      return setFormStatus((formStatus) => ({
        ...formStatus,
        error: [true, "Please complete all fields"],
      }));
    }
    setFormStatus((formStatus) => ({ ...formStatus, loading: true }));
    const req = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    });
    if (req.ok) {
      setFormState(initialState);
      setFormStatus((formStatus) => ({ ...formStatus, success: true }));
    } else {
      setFormStatus((formStatus) => ({ ...formStatus, success: false }));
    }
    setFormStatus((formStatus) => ({ ...formStatus, loading: false }));
  };

  return (
    <FlexStack gap={2} {...props}>
      <Input
        label="Name"
        color="primary"
        type="text"
        name="name"
        value={formState.name}
        onInput={handleInput}
      />
      <Input
        label="Email"
        color="primary"
        type="email"
        name="email"
        value={formState.email}
        onInput={handleInput}
      />
      <Input
        label="Message"
        color="primary"
        type="textarea"
        name="message"
        value={formState.message}
        onInput={handleInput}
      />
      <Button onClick={handleSubmit}>Submit</Button>
      <Typography color="white">
        {formStatus.loading ? "Sending your message..." : ""}
        {formStatus.success && !formStatus.error ? "Message sent!" : ""}
        {formStatus.error[0] ? formStatus.error[1] : ""}
      </Typography>
    </FlexStack>
  );
};

// ContactForm.defaultProps = {}

// ContactForm.propTypes = {}

export default ContactForm;
