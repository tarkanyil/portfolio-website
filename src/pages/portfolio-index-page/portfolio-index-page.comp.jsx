import React from 'react';

import { portfolioItems as items } from '../../utils/constants.jsx';
import { useViewport } from '../../components/cond-elements/cond-elements.comps.jsx';

import { ButtonLink } from '../../components/button/button.comp.jsx';
import { Spacer } from '../../components/cond-elements/cond-elements.comps.jsx';
import InterestedSection from '../../components/interested-section/interested-section.comp.jsx';
import { PageMotion } from '../../utils/motions.jsx';

import {
  ItemContainer,
  ItemImage,
  ItemImageContainer,
  WhiteSpace,
  ItemDescription,
} from './portfolio-index-page.styles.jsx';

import { H2, Body2, PageContainer, Separator } from '../../App.styles.jsx';

const PortfolioIndexPage = () => {
  const { width } = useViewport();
  return (
    <PageMotion>
      <PageContainer>
        {items.map((item, idx) => {
          let flexDirection;
          if (width > 768) {
            if (idx % 2 === 1) {
              flexDirection = { 'flex-direction': 'row-reverse' };
            } else {
              flexDirection = { 'flex-direction': 'row' };
            }
          } else {
            flexDirection = { 'flex-direction': 'column' };
          }
          return (
            <div>
              <ItemContainer style={flexDirection}>
                <ItemImageContainer>
                  <ItemImage src={item.img} alt="project image" />
                </ItemImageContainer>
                <Spacer mob="32" />

                <WhiteSpace />

                <ItemDescription>
                  <Separator />
                  <H2>{item.title}</H2>
                  <Body2>{item.desc}</Body2>
                  <ButtonLink
                    to={`/portfolio/${item.title.toLowerCase()}`}
                    text="VIEW PROJECT"
                  />
                  <Separator />
                </ItemDescription>
              </ItemContainer>
              <Spacer mob="72" tab="80" />
            </div>
          );
        })}

        <Spacer mob="8" tab="24" />

        <InterestedSection />
      </PageContainer>
    </PageMotion>
  );
};

export default PortfolioIndexPage;
