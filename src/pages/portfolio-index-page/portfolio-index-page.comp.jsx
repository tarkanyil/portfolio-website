import React from 'react';

import Button from '../../components/button/button.comp.jsx';
import {
  Spacer,
  CondSeparator,
} from '../../components/cond-elements/cond-elements.comps.jsx';
import InterestedSection from '../../components/interested-section/interested-section.comp.jsx';

import { ItemContainer, ItemImage, ItemDescription } from './portfolio-index-page.styles.jsx';

import {
  H2,
  Body2,
  TextWrapper,
  PageContainer,
  Separator,
} from '../../App.styles.jsx';

const PortfolioIndexPage = () => {
  const hello = '';
  return (
    <div>
      <PageContainer>
        {/* <Spacer tab="160" mob="160" /> */}

        <ItemContainer>
          <ItemImage>lalala</ItemImage>
          <ItemDescription>
            <H2>
              Manage
            </H2>
            <Body2>
              Description
            </Body2>
            <Button to="#" text="VIEW PROJECT" />
          </ItemDescription>
        </ItemContainer>

        <InterestedSection />
      </PageContainer>
    </div>
  );
};

export default PortfolioIndexPage;
