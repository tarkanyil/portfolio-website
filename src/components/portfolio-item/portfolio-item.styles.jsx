import styled from 'styled-components';

import { colors } from '../../utils/constants.jsx';

export const Image = styled.img`
  width: 100%;
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
`;
