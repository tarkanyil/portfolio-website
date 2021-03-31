import styled from 'styled-components';

import { colors } from '../../utils/constants';
import { Body2 } from '../../App.styles';

export const ItemDetailsContainer = styled.div`
  @media only screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    gap: 120px;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const Desc = styled(Body2)`
  @media only screen and (min-width: 768px) and (max-width: 1439px) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 4;
    order: 5;
  }
`;

export const GreenText = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 20px;
  color: ${colors.primaryCyan};
`;

export const MainDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 28rem;
  @media only screen and (min-width: 768px) {
    height: 15.5rem;
  }
  @media only screen and (min-width: 1440px) {
    height: 31.125rem;
  }
`;

export const MainDetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
  @media only screen and (min-width: 768px) {
    display: grid;
    height: 85%;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto;
  }
  @media only screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
  }
`;

export const DtRightSide = styled.div`
  @media only screen and (min-width: 1440px) {
    flex: 1 0 57%;
  }
`;
