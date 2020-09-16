import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LinkButton from "./components/LinkButton";
import Layout from "./components/Layout";
import Pixel from "./components/Pixel";
import { motion } from "framer-motion";

export default function Component(props) {
  const [pictureIndex, setPictureIndex] = useState(0);
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
    [
      "YOUTUBE",
      "/img/youtube-small.png",
      "https://www.youtube.com/watch?v=ZU9KGwSrkOggit add .",
    ],
    [
      "DEEZER",
      "/img/deezer-small.png",
      "https://www.deezer.com/fr/album/166378242",
    ],
  ];

  useEffect(() => {
    let i = 0;
    const loop = setInterval(function () {
      if (i < 3) {
        i++;
      } else {
        i = 0;
      }
      setPictureIndex(i);
    }, 1500);
    return () => {
      clearInterval(loop);
    };
  }, []);

  const imageSource = `/img/carousel${pictureIndex + 1}.jpg`;
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  return (
    <Layout title={"Jimena Angel - Llamameya"}>
      <Pixel name="FACEBOOK_PIXEL_1" />
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ ease: "easeOut", duration: 1 }}
          key={pictureIndex}
          className="picture-container"
        >
          <img src={imageSource} alt="" />
        </motion.div>

        <h1>JIMENA ANGEL</h1>
        <h2>Listen to her new single "Llamameya"</h2>
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
  }
  h2 {
    font-size: 1.3rem;
    font-family: apercu;
    margin-bottom: 2rem;
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
    height: 30rem;
    width: 30rem;
    max-width: 100%;
    object-fit: cover;
    border-radius: 5px;
    @media (max-height: 640px) {
      height: 20rem;
      width: 20rem;
    }
  }
`;
