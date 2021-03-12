import styled from 'styled-components';
import { colors } from '../../utils/constants.jsx';

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
    bottom: 23px;
    background-color: ${colors.secondaryLightest};
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
`;

export const ProfileImg = styled.img`
  width: 100%;
`;

export const AboutRightSide = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  text-align: left;
  align-items: left;
  justify-content: space-between;
`;
