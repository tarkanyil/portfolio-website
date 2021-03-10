import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { colors } from '../../utils/constants.jsx';

import { ReactComponent as LogoIcon } from '../../assets/images/logo.svg';
import { ReactComponent as GithubIcon } from '../../assets/images/icons/github.svg';
import { ReactComponent as TwitterIcon } from '../../assets/images/icons/twitter.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/images/icons/linkedin.svg';

export const FooterContainer = styled.div`
  background: ${colors.primaryGrey};
  width: 100%;
`;

export const Logo = styled(LogoIcon)`
  fill: ${colors.secondaryLightest};
`;

export const LogoContainer = styled.div`
  text-align: center;
  padding-top: 56px;
  margin-bottom: 8px;
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

export const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;
