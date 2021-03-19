import React from 'react';

import { portfolioItems as items } from '../../utils/constants.jsx';

import { H2, H3, Body2, Separator } from '../../App.styles.jsx';
import { Image, GreenText, MainDetails } from './portfolio-item.styles.jsx';
import { PageMotion } from '../../utils/motions.jsx';

import { ButtonHref } from '../button/button.comp.jsx';
import Pager from '../pager/pager.comp.jsx';
import InterestedSection from '../interested-section/interested-section.comp.jsx';
import { Spacer } from '../cond-elements/cond-elements.comps.jsx';

const PortfolioItem = ({ projectId }) => {
  let prev;
  let next;
  if (projectId === items.length-1) {
    prev = items[projectId-1].title;
    next = items[0].title;
  } else if (projectId === 0) {
    prev = items[items.length-1].title;
    next = items[projectId+1].title;
  } else {
    prev = items[projectId-1].title;
    next = items[projectId+1].title;
  }

  console.log({next}, {prev}, next.toLowerCase());

  return (
    <PageMotion>
      <Image src={items[projectId].heroImg} alt="project header image" />
      <Spacer mob="40" />

      <MainDetails>
        <Separator />
        <H2>{items[projectId].title}</H2>
        <Body2>{items[projectId].desc}</Body2>
        <div>
          <GreenText>{items[projectId].tasks}</GreenText>
          <GreenText>{items[0].tech}</GreenText>
        </div>
        <ButtonHref to={items[projectId].websiteURL} text="Visit website" />
        <Separator />
      </MainDetails>

      <Spacer mob="48" />
      <H3>Project Background</H3>
      <Spacer mob="28" />
      <Body2>{items[projectId].projectBackground}</Body2>
      <Spacer mob="40" />
      <H3>Static Previews</H3>
      <Spacer mob="40" />
      <Image src={items[projectId].prevImg1} alt="static preview image" />
      <Spacer mob="33" />
      <Image src={items[projectId].prevImg2} alt="static preview image" />
      <Spacer mob="65" />
      <Pager prev={prev} prevURL={`/portfolio/${prev.toLowerCase()}`} next={next} nextURL={`/portfolio/${next.toLowerCase()}`} />
      <Spacer mob="64" />
      <InterestedSection />
    </PageMotion>
  );
};

export default PortfolioItem;
