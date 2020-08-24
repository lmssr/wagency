import styled from "styled-components"
import { Link } from "gatsby"

export const NavItem = styled(Link)`
  text-decoration: none;
  color: #444444;
  font-family: alice;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;


  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: linear-gradient(180deg, #E9A0A0 0%, #9D5F5F 100%);
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    text-decoration: none;
    color: #9D5F5F;

    ::after {
      width: 100%;
      color: linear-gradient(180deg, #E9A0A0 0%, #9D5F5F 100%);
      text-decoration: none;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    display: block;
    text-align: center;
    z-index: 6;
  }
`
