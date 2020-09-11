import React from "react";
import styled from "styled-components";
import LinkButton from "./components/LinkButton";
import Layout from "./components/Layout";
import Pixel from "./components/Pixel";

export default function Component(props) {
  const buttonProps = [
    [
      "SPOTIFY",
      "/img/spotify.png",
      "https://open.spotify.com/track/5GXDGIDBKExQB53nfWcBaz?si=u3pG2CDNQXuSDR2y_3VU3A",
    ],
    [
      "APPLE MUSIC",
      "/img/apple.png",
      "https://music.apple.com/us/album/llamameya-single/1527268347",
    ],
    // [
    //   "BANDCAMP",
    //   "/img/bandcamp-small.png",
    //   "https://buffer.com/resources/facebook-instagram-stories-ads/",
    // ],
    // ["YOUTUBE", "/img/youtube-small.png", ""],
    [
      "DEEZER",
      "/img/deezer-small.png",
      "https://www.deezer.com/fr/album/166378242",
    ],
  ];
  return (
    <Layout title={"Jimena Angel - Llamameya"}>
      <Pixel name="FACEBOOK_PIXEL_1" />
      <Container>
        <h1>JIMENA ANGEL - Llamameya</h1>
        <img src="/img/llamameya.jpg" alt="" />
        {buttonProps.map((buttonProps) => (
          <LinkButton
            streamingService={buttonProps[0]}
            streamingServiceLogo={buttonProps[1]}
            streamingServiceLink={buttonProps[2]}
          />
        ))}
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  h1,
  h2 {
    color: black;
    font-family: apercu-bold;
  }
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    height: auto;
    width: 10rem;
  }
`;
