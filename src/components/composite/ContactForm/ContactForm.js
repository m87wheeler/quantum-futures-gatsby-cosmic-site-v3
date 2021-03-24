import * as React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
// import PropTypes from 'prop-types'

// *** data, hooks & context

// *** components
import Input from "../../single/Input/Input";
import Button from "../../single/Button/Button";
import Typography from "../../single/Typography/Typography";
import FlexStack from "../../single/FlexStack/FlexStack";
import { validateEmail } from "../../../assets/functions/validateEmail";

// *** styled components
const FormFeedback = styled(Typography)`
  display: grid;
  align-items: center;
  justify-items: center;
  min-height: 2rem;
`;

const ContactForm = ({ endpoint, ...props }) => {
  const initialFormState = {
    name: "",
    email: "",
    message: "",
  };
  const initialFormStatus = {
    loading: false,
    success: false,
    error: [false, ""],
  };
  const [formState, setFormState] = useState(initialFormState);
  const [formStatus, setFormStatus] = useState(initialFormStatus);

  // ? reset state after interval
  useEffect(() => {
    setFormStatus((initialFormStatus) => ({
      ...initialFormStatus,
      succeess: false,
      error: [false, ""],
    }));
  }, [formState]);

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
    if (!validateEmail(formState.email)) {
      return setFormStatus((formStatus) => ({
        ...formStatus,
        error: [true, "Invalid email address"],
      }));
    }
    setFormStatus((formStatus) => ({ ...formStatus, loading: true }));
    try {
      const req = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });
      if (req.status === 200) {
        setFormState(initialFormState);
        setFormStatus((formStatus) => ({ ...formStatus, loading: false }));
        setFormStatus((formStatus) => ({ ...formStatus, success: true }));
      } else {
        setFormStatus((formStatus) => ({ ...formStatus, loading: false }));
        setFormStatus((formStatus) => ({ ...formStatus, success: false }));
      }
    } catch (error) {
      console.log(error);
    }
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
      <FormFeedback
        color={
          formStatus.error[0]
            ? "danger"
            : formStatus.success
            ? "confirm"
            : "white"
        }
      >
        {formStatus.loading
          ? "Sending your message..."
          : formStatus.success
          ? "Message sent!"
          : formStatus.error[0]
          ? formStatus.error[1]
          : ""}
      </FormFeedback>
    </FlexStack>
  );
};

// ContactForm.defaultProps = {}

// ContactForm.propTypes = {}

export default ContactForm;
