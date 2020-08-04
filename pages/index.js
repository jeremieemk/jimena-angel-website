import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import Icons from "./components/Icons";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jimena Angel</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
        ></link>
      </Head>
      <GlobalStyle />
      <Body>
        <Container>
          <img className="background" src="/img/sand.png" alt="jimena" />
          <div className="content">
            <Header>
              <Icons />
            </Header>
            <Nav />
            <ImgContainer>
              <div>
                <img
                  className="dancing-avatar"
                  src="/img/jimena-sand.png"
                  alt="jimena"
                />
                {/* <Logo src="/img/logo.png" alt="jimena" /> */}
              </div>
            </ImgContainer>
          </div>
        </Container>
      </Body>
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
`;

const Body = styled.body`
  font-family: apercu-bold;
  width: 100%;
  margin: 0px;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  img {
    height: 50px;
  }
`;

const Container = styled.div`
  .background {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .content {
    position: relative;
  }
`;

const Logo = styled.img`
  position: absolute;
  height: 3rem;
  bottom: 0;
  left: 0;
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
