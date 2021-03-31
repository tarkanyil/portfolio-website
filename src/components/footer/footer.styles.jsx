import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { colors } from '../../utils/constants';

import { ReactComponent as LogoIcon } from '../../assets/images/logo.svg';
import { ReactComponent as GithubIcon } from '../../assets/images/icons/github.svg';
import { ReactComponent as TwitterIcon } from '../../assets/images/icons/twitter.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/images/icons/linkedin.svg';

export const FooterContainer = styled.div`
  background: ${colors.primaryGrey};
`;

export const FooterContent = styled.div`
  background: ${colors.primaryGrey};
  width: 83%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    height: 80px;
    width: 90%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  @media only screen and (min-width: 1440px) {
    width: 77%
  }
`;

export const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    width: 418px;
    justify-content: space-between;
  }
`;

export const Logo = styled(LogoIcon)`
  fill: ${colors.secondaryLightest};
`;

export const LogoContainer = styled.div`
  text-align: center;
  padding-top: 56px;
  margin-bottom: 8px;
  @media only screen and (min-width: 768px) {
    margin: 0;
    padding: 0;
  }
`;

export const MenuItem = styled(Link)`
  color: ${colors.secondaryLightest};
  font-family: Public Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 32px;
  text-decoration: none;
  display: block;
  @media only screen and (min-width: 768px) {
    margin: 0;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  width: 104px;
  height: 24px;
  margin-top: 40px;
  padding-bottom: 56px;
  opacity: 0.5;
  @media only screen and (min-width: 768px) {
    margin: 0;
    padding: 0;
    opacity: 1;
  }
`;

export const Github = styled(GithubIcon)`
  fill: ${colors.secondaryLightest};
`;

export const Twitter = styled(TwitterIcon)`
  fill: ${colors.secondaryLightest};
`;

export const LinkedIn = styled(LinkedInIcon)`
  fill: ${colors.secondaryLightest};
`;
