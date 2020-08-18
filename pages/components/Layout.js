import React from "react";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";

function Layout(props) {
  return (
    <>
      <Head>
        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content="Jimena Angel" />
        <meta
          name="og:description"
          property="og:description"
          content="The Official Website of Jimena Angel"
        />
        <meta property="og:site_name" content="Jimena Angel" />
        <meta property="og:url" content="http://www.jimenaangel.com/" />
        <meta
          name="description"
          content="The Official Website of Jimena Angel"
        />
        <title>{props.title}</title>
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
      {props.children}
    </>
  );
}

export default Layout;

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: Cerebris-Sans;
  src: url("fonts/cerebris/CerebriSans-Regular.ttf");
  };
  @font-face {
  font-family: apercu;
  src: url("fonts/apercu/light.otf");
  };
  @font-face {
  font-family: apercu-bold;
  src: url("fonts/apercu/bold.otf");
  };
  @font-face {
  font-family: taki;
  src: url("fonts/taki.otf");
  };
  body {
    margin: 0;
    font-family: apercu-bold;
    width: 100%;
    margin: 0px;
    box-sizing: border-box;
    background: black;
    @media (min-width: 801px) {
      padding: 0 30%
    }
  }
  a {
    text-decoration: none;
    &:visited {
      color: inherit
    }
  }
`;
