import styled from 'styled-components';

import { colors } from '../../utils/constants.jsx';
import { Body2 } from '../../App.styles.jsx';

export const Image = styled.img`
  width: 100%;
`;

export const Desc = styled(Body2)`
  @media only screen and (min-width: 768px) {
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
  max-width: 800px;
  @media only screen and (min-width: 768px) {
    height: 15.5rem;
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
`;
