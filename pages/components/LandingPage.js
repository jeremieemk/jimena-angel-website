import React from "react";
import styled from "styled-components";
import Modal from "react-modal";

import Icons from "./Icons";
import Nav from "./Nav";
import Layout from "./Layout";
import StreamLinks from "./StreamLinks";

function LandingPage(props) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <Layout title={"Jimena Angel"}>
      <Container>
        <Logo src="/img/logo.png" alt="jimena" />

        <PicContainer>
          <JimenaPic src="/img/jimena-sand2.jpg" alt="jimena" />
          <h1>JIMENA ANGEL</h1>
          <Nav openModal={openModal} />
        </PicContainer>
        <Icons />
      </Container>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <StreamLinks closeModal={closeModal} />
      </Modal>
    </Layout>
  );
}

const PicContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  h1 {
    position: absolute;
    top: 0;
    right: 0;
    margin-block-start: 0;
    background: black;
    padding: 0.3rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
  position: relative;
  color: #d2e1dd;
  background: black;
`;

const JimenaPic = styled.img`
  width: 100%;
`;
const Logo = styled.img`
  filter: invert(100%);
  height: 1em;
  position: absolute;
  bottom: 1rem;
`;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default LandingPage;
