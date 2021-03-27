import React from 'react';
import { Link } from 'react-scroll';

import hero from '../../assets/images/homepage/mobile/image-homepage-hero@2x.jpg';
import hero_desktop from '../../assets/images/homepage/desktop/image-homepage-hero@2x.jpg';
import profile from '../../assets/images/homepage/mobile/image-homepage-profile@2x.jpg';
import profile_tablet from '../../assets/images/homepage/tablet/image-homepage-profile.jpg';

import {
  WelcomeSection,
  WelcomeSubSection,
  AboutSection,
  ProfileImg,
  AboutRightSide,
  H2mod
} from './homepage.styles.jsx';
import { H2, Body2, Separator } from '../../App.styles.jsx';
import { Spacer } from '../../components/cond-elements/cond-elements.comps.jsx';
import { useViewport } from '../../components/cond-elements/cond-elements.comps.jsx';

import ButtonArrow from '../../components/button-arrow/button-arrow.comp.jsx';
import { ButtonLink } from '../../components/button/button.comp.jsx';
import InterestedSection from '../../components/interested-section/interested-section.comp.jsx';
import { PageMotion } from '../../utils/motions.jsx';

const HomePage = () => {
  // Renders profile picture based on viewport width
  const ProfileImage = () => {
    const { width } = useViewport();
    let image;
    const lowerBreakpoint = 768;
    const higherBreakpoint = 1440;
    if (width >= higherBreakpoint || width < lowerBreakpoint) {
      image = profile;
    } else {
      image = profile_tablet;
    }
    return <ProfileImg id="aboutme" src={image} alt="profile-photo" />;
  };

  // Renders hero picture based on viewport width
  const HeroImage = () => {
    const { width } = useViewport();
    const higherBreakpoint = 1440;
    return width >= higherBreakpoint ? (
      <img id="hero" src={hero_desktop} alt="hero-photo" />
    ) : (
      <img id="hero" src={hero} alt="hero-photo" />
    );
  };

  return (
    <PageMotion>
      <WelcomeSection>
        {' '}
        {HeroImage()}
        <Spacer mob="24" />
        <WelcomeSubSection>
          <H2mod>Hey, I’m Alex Spencer and I love building beautiful websites</H2mod>
          <Spacer mob="32" tab="49" dt="53" />
          <Link to="aboutme" duration={1500} smooth="easeOutQuint" delay={100}>
            <ButtonArrow href="#aboutme" />
          </Link>
        </WelcomeSubSection>
      </WelcomeSection>

      <Spacer mob="96" tab="96" dt="150" />

      <AboutSection>
        {ProfileImage()}
        <AboutRightSide>
          <Spacer mob="32" />
          <Separator />
          <Spacer mob="32" />
          <H2>About Me</H2>
          <Body2>
            I’m a junior front-end developer looking for a new role in an
            exciting company. I focus on writing accessible HTML, using modern
            CSS practices and writing clean JavaScript. When writing JavaScript
            code, I mostly use React, but I can adapt to whatever tools are
            required. I’m based in London, UK, but I’m happy working remotely
            and have experience in remote teams. When I’m not coding, you’ll
            find me outdoors. I love being out in nature whether that’s going
            for a walk, run or cycling. I’d love you to check out my work.
          </Body2>
          <ButtonLink to="/portfolio" text="GO TO PORTFOLIO" />
          <Spacer mob="51" />
          <Separator />
        </AboutRightSide>
      </AboutSection>

      <Spacer mob="115" tab="96" dt="150" />
      <InterestedSection />
    </PageMotion>
  );
};

export default HomePage;
