import styled from 'styled-components';
import { colors } from '../../utils/constants.jsx';
import { H2 } from '../../App.styles.jsx';

export const PageContainer = styled.div`
  width: 83%;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (min-width: 768px) {
    width: 90%;
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background: #33323d;
  opacity: 15%;
`;

export const HeroImg = styled.img`
  margin-top: 40px;
`;

export const WelcomeSection = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: left;
  @media only screen and (min-width: 768px) {
    position: relative;
  }
`;

export const WelcomeSubSection = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: left;
  @media only screen and (min-width: 768px) {
    width: 514px;
    height: 278px;
    padding-right: 90px;
    padding-top: 56px;
    position: absolute;
    bottom: 0;
    background-color: ${colors.secondaryLightest};
  }
  @media only screen and (min-width: 1440px) {
    width: 445px;
    height: 357px;
    padding-right: 50px;
    padding-top: 56px;
    position: absolute;
    bottom: 0;
  }
`;

export const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: left;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 69px;
  }
  @media only screen and (min-width: 1440px) {
    gap: 125px;
  }
`;

export const ProfileImg = styled.img`
  width: 100%;
  @media only screen and (min-width: 1440px) {
    height: 600px;
  }
`;

export const AboutRightSide = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  text-align: left;
  align-items: left;
  justify-content: space-between;

  @media only screen and (min-width: 1440px) {
    padding-right: 95px;
  }
`;

export const H2mod = styled(H2)`
  @media only screen and (min-width: 1440px) {
    font-size: 3.125rem;
    line-height: 3.125rem;
    letter-spacing: -0.45px;
  }
`;
