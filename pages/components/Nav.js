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
  li {
    cursor: pointer;
    font-size: 1.5em;
    text-transform: uppercase;
    list-style: none;
  }
`;
