import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as Close } from '../../assets/images/icons/close.svg';
import { ReactComponent as Hamburger } from '../../assets/images/icons/hamburger.svg';
import { colors } from '../../utils/constants.jsx';

export const Nav = styled.nav`
  height: 32px;
  width: 83%;
  margin: 32px auto 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  position: relative;
`;

export const LogoIcon = styled(Logo)`
  fill: ${colors.primaryGrey};
`;

export const CloseIcon = styled(Close)`
  fill: ${colors.primaryGrey};
  cursor: pointer;
`;

export const HamburgerIcon = styled(Hamburger)`
  display: none;
  fill: ${colors.primaryGrey};
  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavDropdown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.primaryGrey};
  width: 223px;
  height: 186px;
  position: absolute;
  top: 56px;
  right: 0;
  padding: 8px 0 40px 0;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  animation: mymove 0.8s ease-out forwards;
  animation-iteration-count: 1;

  /* Safari and Chrome */
  -webkit-animation: mymove 0.8s;
  -webkit-animation-iteration-count: 1;

  @keyframes mymove {
    from {
      top: 45px;
      opacity: 0;
    }
    to {
      top: 56px;
      opacity: 1;
    }
  }

  @-webkit-keyframes mymove /* Safari and Chrome */ {
    from {
      top: 45px;
      opacity: 0;
    }
    to {
      top: 56px;
      opacity: 1;
    }
  }
`;

export const NavDropdownItem = styled(Link)`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-items: center;
  text-decoration: none;
  padding: 0 1rem;
  margin-top: 32px;
  cursor: pointer;
  font-family: Public Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;
