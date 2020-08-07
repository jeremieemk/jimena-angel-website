import React from "react";
import styled from "styled-components";

export default function Icons() {
  return (
    <IconList>
      <a
        href="https://open.spotify.com/artist/1K0Pin4AUnN7GVGJaS7z0E"
        target="_blank"
      >
        <i className="lab la-spotify"></i>
      </a>
      <a href="https://www.instagram.com/jimenangel/" target="_blank">
        <i className="lab la-instagram"></i>
      </a>
      <a href="https://www.facebook.com/jimenaangeloficial" target="_blank">
        <i className="lab la-facebook"></i>
      </a>
      <a href="https://www.youtube.com/user/jimenangel1" target="_blank">
        <i className="lab la-youtube"></i>
      </a>
    </IconList>
  );
}

const IconList = styled.div`
  top: 0;
  a:visited {
    color: inherit;
  }
  i {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 3rem;
    cursor: pointer;
    color: white;
  }
`;
