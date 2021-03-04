import React, { useState } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavDropdown,
  NavDropdownItem,
} from './navbar-elements.jsx';
import logo from '../../assets/images/logo.svg';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <Bars
          onClick={() => {
            setOpen(!open);
          }}
        />
        <NavMenu>
          <NavLink to="/" >
            HOME
          </NavLink>
          <NavLink to="/portfolio" >
            PORTFOLIO
          </NavLink>
          <NavLink to="/contact" >
            CONTACT ME
          </NavLink>
        </NavMenu>
        {open && (
          <NavDropdown>
            <NavDropdownItem
              to="/"
              onClick={() => {
                setOpen(!open);
              }}
            >
              HOME
            </NavDropdownItem>
            <NavDropdownItem
              to="/portfolio"
              onClick={() => {
                setOpen(!open);
              }}
            >
              PORTFOLIO
            </NavDropdownItem>
            <NavDropdownItem
              to="/contact"
              onClick={() => {
                setOpen(!open);
              }}
            >
              CONTACT ME
            </NavDropdownItem>
          </NavDropdown>
        )}
      </Nav>
    </>
  );
};

export default Navbar;
