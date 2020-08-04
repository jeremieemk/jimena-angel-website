import React from "react";
import styled from "styled-components";

export default function Nav() {
  return (
    <NavList>
      <li>About</li>
      <li>Listen</li>
    </NavList>
  );
}

const NavList = styled.ul`
  padding-inline-start: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  margin-block-start: 0;
  margin-block-end: 0;
  li {
    cursor: pointer;
    font-size: 2em;
    text-transform: uppercase;
    list-style: none;
    color: white;
    margin: 1rem;
  }
`;
