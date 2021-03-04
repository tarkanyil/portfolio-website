import styled from 'styled-components';
import { colors } from '../../utils/constants.jsx';

const Button = styled.button`
  width: 202px;
  height: 48px;
  border: 1px solid ${colors.primaryGrey};
  font-family: 'Public Sans';
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${colors.primaryGrey};
  background-color: ${colors.secondaryLightest};
  &:hover {
    color: ${colors.secondaryLightest};
    background-color: ${colors.primaryGrey};
    border: none;
  }
`;

export default Button;
