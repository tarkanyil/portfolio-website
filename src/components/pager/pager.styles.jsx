import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

import { colors } from '../../utils/constants';

export const PagerContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 9.25rem;
  border-bottom: 1px solid rgba(51, 50, 61, 0.15);
  border-top: 1px solid rgba(51, 50, 61, 0.15);
  justify-content: space-between;
  @media only screen and (min-width: 768px) {
    height: 8.25rem;
  }
`;

export const LeftSide = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 50%;
  border-right: 1px solid rgba(51, 50, 61, 0.15);
  text-decoration: none;
  color: ${colors.primaryGrey};
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    height: 100%;
  }
`;

export const RightSide = styled(Link)`
  display: flex;
  flex-direction: column;
  text-align: right;
  text-decoration: none;
  color: ${colors.primaryGrey};
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    align-self: center;
  }
`;

export const RightArrowContainer = styled.div`
  @media only screen and (min-width: 768px) {
    order: 3;
    margin-left: 2rem;
    height: 1rem;
    align-self: center;
  }
`;

export const LeftArrowContainer = styled.div`
  @media only screen and (min-width: 768px) {
    margin-right: 2rem;
    height: 1rem;
    align-self: center;
  }
`;

export const TextContainer = styled.div`
  @media only screen and (min-width: 768px) {
    align-self: center;
  }
`;
