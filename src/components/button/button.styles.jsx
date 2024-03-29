import { NavLink as Link } from 'react-router-dom';

import styled from 'styled-components';
import { colors } from '../../utils/constants';

export const Btn = styled.div`
  width: 202px;
  height: 48px;
  border: 1px solid ${colors.primaryGrey};
  font-family: 'Public Sans';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 48px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${colors.primaryGrey};
  background-color: ${colors.secondaryLightest};
  cursor: pointer;
  text-align: center;
  &:hover {
    color: ${colors.secondaryLightest};
    background-color: ${colors.primaryGrey};
  }
`;

export const BtnInv = styled(Btn)`
  color: ${colors.secondaryLightest};
  background-color: ${colors.primaryGrey};
  &:hover {
    color: ${colors.primaryGrey};
    background-color: ${colors.secondaryLightest};
  }
`;

export const LinkInt = styled(Link)`
  text-decoration: none !important;
`;

export const LinkExt = styled.a`
  text-decoration: none !important;
`;
