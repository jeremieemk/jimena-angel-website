import React from "react";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";

function Layout(props) {
  return (
    <>
      <Head>
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
  body {
    margin: 0;
    font-family: apercu-bold;
    width: 100%;
    margin: 0px;
  }
`;
