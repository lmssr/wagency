import React from 'react'
import {useStaticQuery, Link, graphql} from 'gatsby'
import { FooterWrapper, FooterSocialWrapper, FooterSocialIcons, P } from '../elements'
import {
    FaTwitter, FaInstagram, FaFacebook, FaLinkedin
} from 'react-icons/fa';

export const Footer = () => {
  return <FooterWrapper>
            <FooterSocialWrapper>
              <FooterSocialIcons>
              <Link className="img" to="/">
                  <FaFacebook/>
                </Link>
                <Link className="img" to="/">
                  <FaInstagram/>
                </Link>
                <Link className="img" to="/">
                  <FaTwitter/>
                </Link>
                <Link className="img" to="/">
                  <FaLinkedin/>
                </Link>
              </FooterSocialIcons>
              <P size="xSmall">WAgency | Agence Evénementielle </P>
              <P size="xSmall"> © 2020 - Luc Mosser</P>
            </FooterSocialWrapper>
          </FooterWrapper>
}

