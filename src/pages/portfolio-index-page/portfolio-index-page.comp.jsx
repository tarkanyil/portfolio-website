import React from 'react';

import { portfolioItems as items } from '../../utils/constants';
import { Spacer } from '../../components/cond-elements/cond-elements.comp';

import { ButtonLink } from '../../components/button/button.comp';
import InterestedSection from '../../components/interested-section/interested-section.comp';
import { PageMotion } from '../../utils/motions';

import {
  ItemContainer,
  ItemImage,
  ItemImageContainer,
  ItemDescription,
} from './portfolio-index-page.styles';

import { H2, Body2, Separator } from '../../App.styles';

const PortfolioIndexPage = () => (
  <PageMotion>
    {items.map((item, idx) => {
      let evenOdd;
      const key = idx;
      if ((idx + 1) % 2 === 0) {
        evenOdd = 'even';
      } else {
        evenOdd = 'odd';
      }
      return (
        <div key={key}>
          <ItemContainer order={evenOdd}>
            <ItemImageContainer>
              <ItemImage src={item.img} alt="project image" />
            </ItemImageContainer>
            <Spacer mob="32" />

            <ItemDescription order={evenOdd}>
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
          <Spacer mob="72" tab="80" dt="80" />
        </div>
      );
    })}

    <Spacer mob="8" tab="24" dt="70" />

    <InterestedSection />
  </PageMotion>
);

export default PortfolioIndexPage;
