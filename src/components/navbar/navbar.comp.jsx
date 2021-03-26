import React, { useState } from 'react';

import OutsideClickHandler from 'react-outside-click-handler';

import {
  Nav,
  NavLink,
  NavMenu,
  NavDropdownContainer,
  NavDropdown,
  NavDropdownItem,
  LogoIcon,
  HamburgerIcon,
  CloseIcon,
} from './navbar.styles.jsx';

import Spacer from '../../spacer.jsx';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleDropdownClick = () => {
    setOpen(!open);
  };

  return (
    <Nav>
      <NavLink to="/">
        <LogoIcon />
      </NavLink>
      {!open ? (
        <HamburgerIcon onClick={handleDropdownClick}/>
      ) : (
        <CloseIcon />
      )}

      <NavMenu>
        <NavLink to="/" activeClassName="active" exact={true}>
          HOME
        </NavLink>
        <Spacer size={42} />
        <NavLink to="/portfolio" activeClassName="active">
          PORTFOLIO
        </NavLink>
        <Spacer size={43} />
        <NavLink to="/contact" activeClassName="active">
          CONTACT ME
        </NavLink>
      </NavMenu>
      {open && (
        <NavDropdownContainer>
          <OutsideClickHandler onOutsideClick={handleDropdownClick}>
            <NavDropdown>
              <NavDropdownItem to="/" onClick={handleDropdownClick}>
                HOME
              </NavDropdownItem>
              <NavDropdownItem to="/portfolio" onClick={handleDropdownClick}>
                PORTFOLIO
              </NavDropdownItem>
              <NavDropdownItem to="/contact" onClick={handleDropdownClick}>
                CONTACT ME
              </NavDropdownItem>
            </NavDropdown>
          </OutsideClickHandler>
        </NavDropdownContainer>
      )}
    </Nav>
  );
};

export default Navbar;
