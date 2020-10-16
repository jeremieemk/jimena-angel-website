import React, { useState } from "react";
import styled from "styled-components";
import Layout from "./components/Layout";
import Pixel from "./components/Pixel";
import MailchimpWithDownload from "./components/MailchimpWithDownload";
import LinkButton from "./components/LinkButton";

export default function Component(props) {
  const [showSignUp, setShowSignup] = useState(false);
  const buttonProps = [
    [
      "SPOTIFY",
      "/img/spotify.png",
      "https://open.spotify.com/album/1JbNjRvlyLvDQHSUW0y8oW?si=3SDaF3s7TLya7FaiJXcWCA",
    ],
    [
      "APPLE MUSIC",
      "/img/apple.png",
      "https://music.apple.com/us/album/aire-ep/1534395433",
    ],
    // [
    //   "BANDCAMP",
    //   "/img/bandcamp-small.png",
    //   "https://buffer.com/resources/facebook-instagram-stories-ads/",
    // ],
    [
      "YOUTUBE",
      "/img/youtube-small.png",
      "https://www.youtube.com/playlist?list=PLf-h3ocuPvanUpkEVXWsfKrzB6P198aja",
    ],
    [
      "DEEZER",
      "/img/deezer-small.png",
      "https://www.deezer.com/br/album/177171542",
    ],
  ];
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
          <img src="/img/aire.jpg" alt="" />
        </div>

        <h1>JIMENA ANGEL</h1>
        <h2>Listen to her new EP "Aire"</h2>
        <div className="streaming-buttons">
          {buttonProps.map((buttonProps) => (
            <LinkButton
              streamingService={buttonProps[0]}
              streamingServiceLogo={buttonProps[1]}
              streamingServiceLink={buttonProps[2]}
            />
          ))}
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
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 1.3rem;
    font-family: apercu;
    margin-bottom: 2rem;
    @media (max-height: 640px) {
      font-size: 1rem;
    }
  }
  width: 100%;
  @media (max-height: 640px) {
    height: 100%;
    padding-top: 2rem;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  margin-bottom: 4rem;
  .picture-container {
    width: 100%;
    display: flex;
    justify-content: center;
    img {
      margin-top: 2rem;
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
  }

  .mailchimp {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 2rem;
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
      margin: 1rem 0.5rem 0.5rem;
      font-family: taki;
      display: flex;
      font-size: 0.8rem;
      justify-content: center;
      @media (max-width: 800px) {
        font-size: 0.5rem;
      }
    }
  }
  .download-icon {
    padding: 0.5rem;
    height: 1.5rem;
  }
  .free-download-link {
    margin-bottom: 2rem;
  }
`;
