import React, { useState } from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  NavDropdown,
  NavDropdownItem,
  LogoIcon,
  HamburgerIcon,
  CloseIcon,
} from './navbar.styles.jsx';

import Spacer from '../../spacer.jsx';

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
          <NavLink to="/" activeClassName="active" exact={true}>HOME</NavLink>
          <Spacer size={42} />
          <NavLink to="/portfolio" activeClassName="active">PORTFOLIO</NavLink>
          <Spacer size={43} />
          <NavLink to="/contact" activeClassName="active">CONTACT ME</NavLink>
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
