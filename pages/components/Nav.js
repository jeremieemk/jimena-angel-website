import React from "react";
import Link from "next/link";
import styled from "styled-components";

export default function Nav() {
  return (
    <NavList>
      <a
        href="https://open.spotify.com/playlist/0JGjs0YPhn2XfrINwH1m51?si=OoelDU1QQwmOagkfoo6cbQ"
        target="_blank"
      >
        <span>Listen</span>
      </a>
      <Link href="/bio">
        <span>About</span>
      </Link>
    </NavList>
  );
}

const NavList = styled.div`
  padding-inline-start: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-block-start: 0;
  margin-block-end: 0;
  position: absolute;
  left: 0;
  bottom: 0;
  span {
    cursor: pointer;
    font-size: 1.5em;
    background: black;
    text-transform: uppercase;
    color: white;
    padding: 0.3rem;
  }
`;
