import React from "react";
import styled from "styled-components";

import Icons from "./components/Icons";
import Nav from "./components/Nav";

function LandingPage(props) {
  return (
    <Container>
      <Logo src="/img/logo.png" alt="jimena" />
      <Icons />

      <JimenaPic src="/img/jimena-sand.png" alt="jimena" />
      <Nav />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

const JimenaPic = styled.img`
  width: 90%;
`;
const Logo = styled.img`
  filter: invert(100%);
  height: 3rem;
  margin-top: 3rem;
`;

export default LandingPage;
