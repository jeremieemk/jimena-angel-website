import React, { useState } from "react";
import styled from "styled-components";
import Layout from "./components/Layout";
import Pixel from "./components/Pixel";
import MailchimpWithDownload from "./components/MailchimpWithDownload";

export default function Component(props) {
  const [showSignUp, setShowSignup] = useState(true);
  const buttonProps = [["DOWNLOAD", "/img/download2.png", ""]];
  function fireDownload() {
    const link = document.createElement("a");
    link.href = "/music/tengoloquetengo.mp3";
    link.setAttribute("download", "");
    link.click();
  }

  return (
    <Layout title={"Jimena Angel - Tengo Lo Que Tengo"}>
      <Pixel name="FACEBOOK_PIXEL_1" />
      <Container>
        <div className="picture-container">
          <img src="/img/tengo.jpg" alt="" />
        </div>

        <h1>JIMENA ANGEL</h1>
        <h2>
          Tengo Lo Que Tengo <span>(free download)</span>
        </h2>
        <div className="streaming-buttons">
          <MailchimpWithDownload
            fireDownload={fireDownload}
            action="https://facebook.us15.list-manage.com/subscribe/post?u=cef5e2d57bfb301e0ec0176fb&amp;id=1f708c5fed"
            className="mailchimp"
          />
        </div>
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  h1,
  h2 {
    color: white;
    font-family: taki;
    margin-block-start: 0;
    margin-block-end: 0;
    text-align: center;
    max-width: 95%;
  }
  h1 {
    font-size: 2rem;
    letter-spacing: 7px;
    margin-top: 2rem;
  }
  h2 {
    font-size: 1.3rem;
    font-family: apercu;
    margin-bottom: 1rem;
    span {
      font-size: 1rem;
    }
  }
  width: 100%;
  height: 100vh;
  @media (max-height: 640px) {
    height: 100%;
    padding-top: 2rem;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  .picture-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  img {
    height: 20rem;
    width: 20rem;
    max-width: 100%;
    object-fit: cover;
    border-radius: 5px;
    @media (max-height: 640px) {
      height: 18rem;
      width: 18rem;
    }
  }
  .mailchimp {
    font-family: taki;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
    input {
      margin: 0.5rem;
      border: 1px solid black;
      width: 14rem;
      height: 1.8rem;
      border-radius: 6px;
      padding: 0.3rem;
      text-indent: 10px;
    }
    button {
      border-radius: 1rem;
      margin: 1rem 0.5rem 0.5rem;
      font-family: apercu;
      color: white;
      background-color: black;
      border: none;
      outline: none;
      padding: 0 1rem;

      height: 2.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
      cursor: pointer;
      font-size: 1.2rem;
      border: 1px solid white;
    }
  }
`;
