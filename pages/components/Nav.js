import React from "react";
import Link from "next/link";
import styled from "styled-components";

export default function Nav(props) {
  return (
    <NavList>
      <a href="https://ampl.ink/E91OQ" target="_blank">
        <span>Listen</span>
      </a>
      <Link href="/bio">
        <span>About</span>
      </Link>
      <a onClick={() => props.openModal("newsletter")}>
        <span>Sign Up</span>
      </a>
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
  font-size: 0.7em;
  span {
    cursor: pointer;
    font-size: 1.5em;
    background: black;
    text-transform: uppercase;
    color: white;
    padding: 0.3rem;
  }
`;
