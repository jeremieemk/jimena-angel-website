import React from "react";
import styled from "styled-components";

function StreamLinks(props) {
  return (
    <StreamLinksContainer onClick={props.closeModal}>
      <img src="/img/bestof.jpg" alt="playlist cover art" />

      <div>
        <a
          href="https://open.spotify.com/artist/1K0Pin4AUnN7GVGJaS7z0E"
          target="_blank"
        >
          <i className="lab la-spotify"></i>
          <h1>SPOTIFY</h1>
        </a>
        <a
          href="https://open.spotify.com/artist/1K0Pin4AUnN7GVGJaS7z0E"
          target="_blank"
        >
          <i className="lab la-youtube"></i>
          <h1>YOUTUBE</h1>
        </a>
      </div>
    </StreamLinksContainer>
  );
}
const StreamLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 1.2rem;
  }
  a {
    margin-left: 1rem;
  }
  img {
    width: 100%;
    margin-bottom: 2rem;
  }
  div {
    display: flex;
    justify-content: center;
    i {
      font-size: 5rem;
    }
  }
`;

export default StreamLinks;
