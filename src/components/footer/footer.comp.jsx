import React from 'react';

import {
  FooterContainer,
  LogoContainer,
  Logo,
  Github,
  Twitter,
  LinkedIn,
  NavMenu,
  MenuItem,
  SocialLinks,
} from './footer.styles.jsx';

const Footer = () => (
  <div>
    <FooterContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavMenu>
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/portfolio">Portfolio</MenuItem>
        <MenuItem to="/contact">Contact me</MenuItem>
      </NavMenu>
      <SocialLinks>
        <a href="https://github.com/" target="blank">
          <Github />
        </a>
        <a href="https://www.twitter.com/" target="blank">
          <Twitter />
        </a>
        <a href="https://www.linkedin.com" target="blank">
          <LinkedIn />
        </a>
      </SocialLinks>
    </FooterContainer>
  </div>
);

export default Footer;
