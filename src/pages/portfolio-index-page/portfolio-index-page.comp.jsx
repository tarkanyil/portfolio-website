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
  ItemDescription,
} from './portfolio-index-page.styles.jsx';

import { H2, Body2, Separator } from '../../App.styles.jsx';

const PortfolioIndexPage = () => {
  const { width } = useViewport();
  return (
    <PageMotion>
      {items.map((item, idx) => {
        let evenOdd;
        if (((idx+1) % 2) === 0) {
          evenOdd = 'even';
        } else {
          evenOdd = 'odd';
        }
        return (
          <div>
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
};

export default PortfolioIndexPage;
