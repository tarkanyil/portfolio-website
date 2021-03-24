import styled from 'styled-components';

import { colors } from '../../utils/constants.jsx';

import { ReactComponent as GithubIcon } from '../../assets/images/icons/github.svg';
import { ReactComponent as TwitterIcon } from '../../assets/images/icons/twitter.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/images/icons/linkedin.svg';

export const Github = styled(GithubIcon)`
  fill: ${colors.primaryGrey};
`;

export const Twitter = styled(TwitterIcon)`
  fill: ${colors.primaryGrey};
`;

export const LinkedIn = styled(LinkedInIcon)`
  fill: ${colors.primaryGrey};
`;

export const Label = styled.label`
  font-family: Public Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 30px;
  color: #33323d;
  mix-blend-mode: normal;
  opacity: 0.8;
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  background-color: ${colors.secondaryLight};
  font-family: Public Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 30px;
  color: #33323d;
  border: none;
  padding-left: 1rem;
  ::placeholder {
    opacity: 0.8;
  }
  :focus {
    outline: none;
    border: 1px solid ${colors.primaryCyan};
  }
  ${(props) => {
    if (props.error) {
      return `
        outline: none;
        border: 1px solid ${colors.secondaryRed};`;
    }
  }}
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 6rem;
  background-color: ${colors.secondaryLight};
  font-family: Public Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 30px;
  color: #33323d;
  border: none;
  padding-left: 1rem;
  padding-top: 0.5rem;
  resize: none;
  ::placeholder {
    opacity: 0.8;
  }
  :focus {
    outline: none;
    border: 1px solid ${colors.primaryCyan};
  }
  ${(props) => {
    if (props.error) {
      return `
        outline: none;
        border: 1px solid ${colors.secondaryRed};`;
    }
  }}
`;

export const ErrorMsg = styled.div`
  font-family: Public Sans;
  font-style: italic;
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
  color: ${colors.secondaryRed};
  margin-top: 0.25rem;
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 104px;
  height: 24px;
  @media only screen and (min-width: 768px) {
    margin: 0;
    padding: 0;
  }
`;
