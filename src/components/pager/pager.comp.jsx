import React from 'react';

import {
  PagerContainer,
  LeftSide,
  RightSide,
  RightArrowContainer,
  LeftArrowContainer,
  TextContainer,
} from './pager.styles';
import { H3, Body2 } from '../../App.styles';
import { Spacer } from '../cond-elements/cond-elements.comp';
import { ReactComponent as LeftArrow } from '../../assets/images/icons/arrow-left.svg';
import { ReactComponent as RightArrow } from '../../assets/images/icons/arrow-right.svg';

const Pager = ({ prev, prevURL, next, nextURL }) => (
  <PagerContainer>
    <LeftSide to={prevURL}>
      <Spacer mob="24" />
      <LeftArrowContainer>
        <LeftArrow />
      </LeftArrowContainer>
      <Spacer mob="16" />
      <TextContainer>
        <H3>{prev}</H3>
        <Body2>Previous Project</Body2>
      </TextContainer>
    </LeftSide>

    <RightSide to={nextURL}>
      <Spacer mob="24" />
      <RightArrowContainer>
        <RightArrow />
      </RightArrowContainer>
      <Spacer mob="16" />
      <div>
        <H3>{next}</H3>
        <Body2>Next Project</Body2>
      </div>
    </RightSide>
  </PagerContainer>
);

export default Pager;
