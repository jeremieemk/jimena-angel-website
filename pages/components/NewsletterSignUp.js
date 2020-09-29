import React from "react";
import styled from "styled-components";
import MailchimpForm from "./MailchimpForm";

function NewsletterSignUp(props) {
  return (
    <Container>
      <h1>Keep in touch!</h1>
      <MailchimpForm />
    </Container>
  );
}

const Container = styled.div`
  h1 {
    margin-left: 1rem;
    margin-block-start: 0.5rem;
    margin-block-end: 0.5rem;
  }
`;

export default NewsletterSignUp;
