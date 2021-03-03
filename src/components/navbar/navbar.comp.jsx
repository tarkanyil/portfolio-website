import React from 'react';
import {
  Nav, NavLink, Bars, NavMenu,
} from './navbar-elements.jsx';
import logo from '../../assets/images/logo.svg';

const Navbar = () => (
  <>
    <Nav>
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink to="/" activeStyle>
          HOME
        </NavLink>
        <NavLink to="/portfolio" activeStyle>
          PORTFOLIO
        </NavLink>
        <NavLink to="/contact" activeStyle>
          CONTACT ME
        </NavLink>
      </NavMenu>
    </Nav>
  </>
);

export default Navbar;
