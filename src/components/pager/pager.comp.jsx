import React from 'react';

import { PagerContainer, LeftSide, RightSide } from './pager.styles.jsx';
import { H2, H3, Body2, PageContainer, Separator } from '../../App.styles.jsx';
import { Spacer } from '../cond-elements/cond-elements.comps.jsx';
import { ReactComponent as LeftArrow } from '../../assets/images/icons/arrow-left.svg';
import { ReactComponent as RightArrow } from '../../assets/images/icons/arrow-right.svg';

const Pager = ({ prev, prevURL, next, nextURL }) => {
  
  console.log({prev}, {next}, {prevURL}, {nextURL})

  return (
    <PagerContainer>
      <LeftSide to={prevURL}>
        <Spacer mob="24" />
        <div>
          <LeftArrow />
        </div>
        <Spacer mob="16" />
        <div>
          <H3>{prev}</H3>
          <Body2>Previous Project</Body2>
        </div>
      </LeftSide>

      <RightSide to={nextURL}>
        <Spacer mob="24" />
        <div>
          <RightArrow />
        </div>
        <Spacer mob="16" />
        <div>
          <H3>{next}</H3>
          <Body2>Next Project</Body2>
        </div>
      </RightSide>
    </PagerContainer>
  );
};

export default Pager;
