import React from 'react';

import {
  ButtonContainer,
  ButtonSideOverlay,
  ButtonText,
  DownArrows,
} from './button-arrow.styles.jsx';

import downArrows from '../../assets/images/icons/down-arrows.svg';

const ButtonArrow = ({ href }) => (
  <a href={href}>
    <ButtonContainer>
      <ButtonText>ABOUT ME</ButtonText>
      <ButtonSideOverlay />
      <DownArrows src={downArrows} alt="down arrows" />
    </ButtonContainer>
  </a>
);

export default ButtonArrow;
