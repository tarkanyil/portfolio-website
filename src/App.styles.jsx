import styled from 'styled-components';
import { colors } from './utils/constants.jsx';

export const AppContainer = styled.div`
  min-width: 375px;
  margin-left: auto;
  margin-right: auto;
  color: #33323d;
  box-sizing: border-box;
  background-color: ${colors.secondaryLightest};
`;

export const PageContainer = styled.div`
  width: 83%;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (min-width: 768px) {
    width: 90%;
  }
  @media only screen and (min-width: 1440px) {
    width: 77%;
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background: #33323d;
  opacity: 15%;
`;

export const H1 = styled.p`
  font-family: Ibarra Real Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 50px;
  letter-spacing: -0.45px;
  margin: 0 !important;
`;

export const H2 = styled.p`
  font-family: Ibarra Real Nova;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 42px;
  letter-spacing: -0.36px;
  margin: 0 !important;
`;

export const H3 = styled.p`
  font-family: Ibarra Real Nova;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 36px;
  letter-spacing: -0.29px;
  margin: 0 !important;
`;

export const Body1 = styled.p`
  font-family: Public Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;
  margin: 0 !important;
  opacity: 0.8;
`;

export const Body2 = styled.p`
  font-family: Public Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 30px;
  margin: 0 !important;
  opacity: 0.8;
`;

export const TextWrapper = styled.div`
  @media only screen and (min-width: 768px) {
    flex: 0 0 ${(props) => props.width};
  }
`;
