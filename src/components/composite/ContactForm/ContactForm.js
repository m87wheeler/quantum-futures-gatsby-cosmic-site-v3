import * as React from "react";
import { useState, useEffect } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";

// *** data, hooks & context
import { validateEmail } from "../../../assets/functions/validateEmail";

// *** components
import Input from "../../single/Input/Input";
import FlexStack from "../../single/FlexStack/FlexStack";
import Typography from "../../single/Typography/Typography";

// *** styled components
import { FormFeedback, SubmitSection, SubmitButton } from "./ContactForm.style";

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
  const [subscribe, setSubscribe] = useState("");
  const [subscribeSuccess, setSubscribeSuccess] = useState({
    result: "",
    msg: "",
  });

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
      <SubmitSection>
        <label>
          <input
            type="checkbox"
            name="subscribeConsent"
            checked={consent}
            onChange={handleChange}
          />
          <Typography element="span">
            {" "}
            Subscribe to the Quantum Futures Newsletter
          </Typography>
        </label>
        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
      </SubmitSection>
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
