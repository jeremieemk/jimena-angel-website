import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import Icons from "./components/Icons";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Jimena Angel</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
        ></link>
      </Head>
      <GlobalStyle />
      <body>
        <div className="header">
          <Icons />
          <Nav />
        </div>
      </body>
    </div>
  );
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

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
    font-family: apercu-bold
  }  
`;
