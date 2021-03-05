import React from 'react';
import styled from 'styled-components';

import { colors } from '../../utils/constants.jsx';
import downArrows from '../../assets/images/icons/down-arrows.svg';

// const ButtonArr = styled.div`
//   background: red;
//   border: 1px solid black;
//   height: 30px;
//   width: 120px;
//   display: inline-block;
// `;

const ButtonContainer = styled.div`
  width: 200px;
  height: 48px;
  background: ${colors.primaryBlue};
  cursor: pointer;
  position: relative;
  &:hover {
    background-color: ${colors.primaryCyan};
    border: none;
  }
`;

const ButtonText = styled.p`
  position: absolute;
  height: 14px;
  left: 24%;
  right: 0%;
  top: 5px;

  font-family: Public Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;

  color: #ffffff;
`;

const ButtonSideOverlay = styled.div`
  width: 48px;
  height: 48px;
  background: black;
  opacity: 0.1;
  z-index: 2;
  position: relative;
  left: 0;
  top: 0;
`;

const DownArrows = styled.img`
  position: absolute;
  width: 16px;
  height: 12px;
  left: 16px;
  top: 18px;
  z-index: 50;
`;

const ButtonArrow = () => (
  <ButtonContainer>
    <ButtonText>ABOUT ME</ButtonText>
    <ButtonSideOverlay />
    <DownArrows src={downArrows} alt="down arrows" />
  </ButtonContainer>
);

export default ButtonArrow;
