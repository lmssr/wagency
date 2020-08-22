// NavbarLinks.js

import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { NavItem } from "../elements"
import {
    FaTwitter, FaInstagram, FaMedium, FaBars
} from 'react-icons/fa';

export const NavbarLinks = () => {
  return (
    <div>
      <NavItem to="https://lucmosser.com/">catalogue évenementiel</NavItem>
      <NavItem to="/a-propos">mariages</NavItem>
      <NavItem to="/a-propos">à propos</NavItem>
      <NavItem to="/contact">contact</NavItem>
    </div>
  )
}


