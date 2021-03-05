import React, { useState } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavDropdown,
  NavDropdownItem,
  Logo,
} from './navbar-elements.jsx';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Nav>
        <NavLink to="/">
          <Logo />
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
