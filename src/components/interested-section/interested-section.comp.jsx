import React, { useState, useEffect } from 'react';

import { H2, TextWrapper, Separator } from '../../App.styles.jsx';
import Button from '../../components/button/button.comp.jsx';
import {
  Spacer,
  CondSeparator,
} from '../cond-elements/cond-elements.comps.jsx';

import { Interested } from './interested-section.styles';

const InterestedSection = () => (
  <div>
    <Interested>
      <TextWrapper width="350px">
        <H2>Interested in doing a project together?</H2>
      </TextWrapper>
      <Spacer mob="40" tab="32" />
      <CondSeparator />
      <Spacer mob="0" tab="32" />
      <Button to="/contact" text="CONTACT ME" />
    </Interested>
    <Spacer mob="80" tab="96" />
  </div>
);

export default InterestedSection;
