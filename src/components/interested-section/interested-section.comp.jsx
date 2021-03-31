import React from 'react';

import { H2, TextWrapper } from '../../App.styles';
import { ButtonLink } from '../button/button.comp';
import {
  Spacer,
  CondSeparator,
} from '../cond-elements/cond-elements.comp';

import Interested from './interested-section.styles';

const InterestedSection = () => (
  <div>
    <Interested>
      <TextWrapper width="350px">
        <H2>Interested in doing a project together?</H2>
      </TextWrapper>
      <Spacer mob="40" tab="32" dt="32" />
      <CondSeparator />
      <Spacer mob="0" tab="32" dt="32" />
      <ButtonLink to="/contact" text="CONTACT ME" />
    </Interested>
    <Spacer mob="80" tab="96" dt="150" />
  </div>
);

export default InterestedSection;
