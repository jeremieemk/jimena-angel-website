import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import LandingPage from "./LandingPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jimena Angel</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
        ></link>
      </Head>
      <GlobalStyle />
      <LandingPage />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: Cerebris-Sans;
  src: url("fonts/cerebris/CerebriSans-Regular.ttf");
  };
  @font-face {
  font-family: apercu;
  src: url("fonts/apercu/apercu-pro-mono.otf");
  };
  @font-face {
  font-family: apercu-bold;
  src: url("fonts/apercu/bold.otf");
  };
  body {
    margin: 0;
    background: black;
    font-family: apercu-bold;
    width: 100%;
    margin: 0px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
`;

const Logo = styled.img`
  height: 10rem;
  filter: invert(100%);
`;

const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  div {
    position: relative;
  }
`;
