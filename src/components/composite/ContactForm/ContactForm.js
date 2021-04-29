import * as React from "react";
import { useState, useEffect } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";

// *** data, hooks & context
import { validateEmail } from "../../../assets/functions/validateEmail";

// *** components
import Input from "../../single/Input/Input";
import FlexStack from "../../single/FlexStack/FlexStack";

// *** styled components
import { FormFeedback, SubmitSection, SubmitButton } from "./ContactForm.style";
import Checkbox from "../../single/Checkbox/Checkbox";

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

  // ? mailchimp state
  const [consent, setConsent] = useState(false);

  // ? reset state after interval
  useEffect(() => {
    setFormStatus((initialFormStatus) => ({
      ...initialFormStatus,
      succeess: false,
      error: [false, ""],
    }));
  }, [formState]);

  // ? handle contact form input
  const handleInput = (e) =>
    setFormState((formState) => ({
      ...formState,
      [e.target.name]: e.target.value,
    }));

  // ? handle newsletter consent
  const handleChange = () => setConsent(!consent);

  // ? handle contact form submit
  const handleSubmit = async () => {
    setFormStatus(initialFormStatus);
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
      if (consent) await addToMailchimp(formState.email);
      if (parseInt(req.status) === 200) {
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
      <SubmitSection>
        <Checkbox
          label="Subscribe to the Quantum Futures Newsletter"
          name="subscribeConsent"
          checked={consent}
          onChange={handleChange}
        />
        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      </SubmitSection>
      <FormFeedback
        color={
          formStatus.error[0]
            ? "danger"
            : formStatus.success
            ? "confirm"
            : "black"
        }
      >
        {formStatus.loading ? "Sending your message..." : null}
        {formStatus.error[0] ? formStatus.error[1] : null}
        {formStatus.success ? "Message sent!" : null}
      </FormFeedback>
    </FlexStack>
  );
};

// ContactForm.defaultProps = {}

// ContactForm.propTypes = {}

export default ContactForm;
