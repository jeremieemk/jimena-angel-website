import React from "react";
import Mailchimp from "react-mailchimp-form";
import styled from "styled-components";

function NewsletterSignUp(props) {
  return (
    <Container>
      <h1>Keep in touch!</h1>
      <Mailchimp
        action="https://facebook.us15.list-manage.com/subscribe/post?u=cef5e2d57bfb301e0ec0176fb&amp;id=1f708c5fed"
        fields={[
          {
            name: "FNAME",
            placeholder: "Your Name",
            type: "text",
            required: false,
          },
          {
            name: "EMAIL",
            placeholder: "Your Email",
            type: "email",
            required: true,
          },
        ]}
        className="mailchimp"
      />
    </Container>
  );
}

const Container = styled.div`
  h1 {
    margin-left: 1rem;
    margin-block-start: 0.5rem;
    margin-block-end: 0.5rem;
  }
  .mailchimp {
    input {
      margin: 1rem;
      border: 1px solid black;
      width: 14rem;
      height: 1.8rem;
      border-radius: 6px;
      padding: 0.3rem;
      text-indent: 10px;
      font-family: apercu;
    }
    button {
      margin: 1rem;
      padding: 0.6rem;
      background-color: #dbdfcf;
      border: none;
      border-radius: 6px;
      font-family: apercu;
    }
  }
`;

export default NewsletterSignUp;
