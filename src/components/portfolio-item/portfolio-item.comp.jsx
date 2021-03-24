import React from 'react';

import { portfolioItems as items } from '../../utils/constants.jsx';

import { H2, H3, Body2, Separator } from '../../App.styles.jsx';
import {
  Image,
  Desc,
  GreenText,
  MainDetails,
  MainDetailsContent,
  DtRightSide,
  ItemDetailsContainer,
} from './portfolio-item.styles.jsx';
import { PageMotion } from '../../utils/motions.jsx';

import { ButtonHref } from '../button/button.comp.jsx';
import Pager from '../pager/pager.comp.jsx';
import InterestedSection from '../interested-section/interested-section.comp.jsx';
import { Spacer } from '../cond-elements/cond-elements.comps.jsx';

const PortfolioItem = ({ projectId }) => {
  let prev;
  let next;
  if (projectId === items.length - 1) {
    prev = items[projectId - 1].title;
    next = items[0].title;
  } else if (projectId === 0) {
    prev = items[items.length - 1].title;
    next = items[projectId + 1].title;
  } else {
    prev = items[projectId - 1].title;
    next = items[projectId + 1].title;
  }

  console.log({ next }, { prev }, next.toLowerCase());

  return (
    <PageMotion>
      <Image src={items[projectId].heroImg} alt="project header image" />
      <Spacer mob="40" tab="40" dt="115"/>
      <ItemDetailsContainer>
        <MainDetails>
          <Separator className="upper-sep" />

          <MainDetailsContent>
            <H2>{items[projectId].title}</H2>
            <Desc>{items[projectId].desc}</Desc>
            <div>
              <GreenText>{items[projectId].tasks}</GreenText>
              <GreenText>{items[0].tech}</GreenText>
            </div>
            <div>
              <ButtonHref
                to={items[projectId].websiteURL}
                text="Visit website"
              />
            </div>
          </MainDetailsContent>
          <Separator className="lower-sep" />
        </MainDetails>

        <DtRightSide>
          <Spacer mob="48" tab="40" />
          <H3>Project Background</H3>
          <Spacer mob="28" tab="40" dt="28" />
          <Body2>{items[projectId].projectBackground}</Body2>
          <Spacer mob="40" tab="40" dt="40" />
          <H3>Static Previews</H3>
          <Spacer mob="40" tab="40" dt="28" />
          <Image src={items[projectId].prevImg1} alt="static preview image" />
          <Spacer mob="33" tab="31" dt="32" />
          <Image src={items[projectId].prevImg2} alt="static preview image" />
          <Spacer mob="65" tab="80" dt="64" />
        </DtRightSide>
      </ItemDetailsContainer>
      <Pager
        prev={prev}
        prevURL={`/portfolio/${prev.toLowerCase()}`}
        next={next}
        nextURL={`/portfolio/${next.toLowerCase()}`}
      />

      <Spacer mob="64" tab="80" dt="115" />
      <InterestedSection />
    </PageMotion>
  );
};

export default PortfolioItem;
