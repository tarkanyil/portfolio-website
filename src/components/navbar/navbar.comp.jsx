import React, { useState } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavDropdown,
  NavDropdownItem,
  LogoIcon,
  HamburgerIcon,
  CloseIcon,
} from './navbar.styles.jsx';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleBurgerClick = () => {
    setOpen(!open);
  }

  return (
    <>
      <Nav>
        <NavLink to="/">
          <LogoIcon />
        </NavLink>
        {!open ? (
          <HamburgerIcon
            onClick={handleBurgerClick}
          />
        ) : (
          <CloseIcon
            onClick={handleBurgerClick}
          />
        )}

        <NavMenu>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/portfolio">PORTFOLIO</NavLink>
          <NavLink to="/contact">CONTACT ME</NavLink>
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
