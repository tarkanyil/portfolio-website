import React from 'react';

import {
  ButtonContainer,
  ButtonSideOverlay,
  ButtonText,
  DownArrows,
} from './button-arrow.styles.jsx';

import downArrows from '../../assets/images/icons/down-arrows.svg';

const ButtonArrow = () => (
  <ButtonContainer>
    <ButtonText>ABOUT ME</ButtonText>
    <ButtonSideOverlay />
    <DownArrows src={downArrows} alt="down arrows" />
  </ButtonContainer>
);

export default ButtonArrow;
