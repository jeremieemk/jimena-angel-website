import React from "react";
import styled from "styled-components";

export default function Icons() {
  return (
    <IconList>
      <a href="https://www.instagram.com/jimenangel/" target="_blank">
        <i class="lab la-instagram"></i>
      </a>
      <a href="https://www.facebook.com/jimenaangeloficial" target="_blank">
        <i class="lab la-facebook"></i>
      </a>
      <a href="https://www.youtube.com/user/jimenangel1" target="_blank">
        <i class="lab la-youtube"></i>
      </a>
      <a
        href="https://open.spotify.com/artist/1K0Pin4AUnN7GVGJaS7z0E"
        target="_blank"
      >
        <i class="lab la-spotify"></i>
      </a>
    </IconList>
  );
}

const IconList = styled.div`
  a:visited {
    color: inherit;
  }
  i {
    font-size: 2rem;
    cursor: pointer;
  }
`;
