import React, { useEffect, useState, createContext, useContext } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import hero from '../../assets/images/homepage/mobile/image-homepage-hero@2x.jpg';
import profile from '../../assets/images/homepage/mobile/image-homepage-profile.jpg';
import profile_tablet from '../../assets/images/homepage/tablet/image-homepage-profile.jpg';

import {
  Container,
  Separator,
  WelcomeSection,
  WelcomeSubSection,
  AboutSection,
  ProfileImg,
  AboutRightSide,
  InterestedSection,
} from './homepage.styles.jsx';
import { H2, Body2, TextWrapper } from '../../App.styles.jsx';
import Spacer from '../../spacer.jsx';

import ButtonArrow from '../../components/button-arrow/button-arrow.comp.jsx';
import Button from '../../components/button/button.comp.jsx';

const HomePage = () => {
  // Returns the actual viewport width so we can use it in our components
  const useViewport = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return { width };
  };

  // Renders profile picture based on viewport width
  const ProfileImage = () => {
    const { width } = useViewport();
    const lowerBreakpoint = 768;
    // const higherBreakpoint = 1440;
    return width < lowerBreakpoint ? (
      <ProfileImg id="aboutme" src={profile} alt="profile-photo" />
    ) : (
      <ProfileImg id="aboutme" src={profile_tablet} alt="profile-photo" />
    );
  };

  const CondSpacer = (sizeMob, sizeTab) => {
    const { width } = useViewport();
    const lowerBreakpoint = 768;
    console.log(sizeTab);
    // const higherBreakpoint = 1440;
    if ((!sizeTab) && (width > lowerBreakpoint)) { return null }
    return width < lowerBreakpoint ? (
      <Spacer size={sizeMob} />
    ) : (
      <Spacer size={sizeTab} />
    );
  };

  const CondSeparator = () => {
    const { width } = useViewport();
    const lowerBreakpoint = 768;
    // const higherBreakpoint = 1440;
    return width > lowerBreakpoint && <Separator />;
  };

  return (
    <div>
      <Container>
        <WelcomeSection>
          {' '}
          <img src={hero} alt="starter-photo" />
          <Spacer size={24} />
          <WelcomeSubSection>
            <H2>
              Hey, I’m Alex Spencer and I love building beautiful websites
            </H2>
            <Spacer size={32} />
            <Link
              to="aboutme"
              duration={1500}
              smooth="easeOutQuint"
              delay={100}
            >
              <ButtonArrow href="#aboutme" />
            </Link>
          </WelcomeSubSection>
        </WelcomeSection>

        <Spacer size={96} />

        <AboutSection>
          {ProfileImage()}
          <AboutRightSide>
            {CondSpacer(32)}
            <Separator />
            <Spacer size={32} />
            <H2>About Me</H2>
            <Spacer size={28} />
            <Body2>
              I’m a junior front-end developer looking for a new role in an
              exciting company. I focus on writing accessible HTML, using modern
              CSS practices and writing clean JavaScript. When writing
              JavaScript code, I mostly use React, but I can adapt to whatever
              tools are required. I’m based in London, UK, but I’m happy working
              remotely and have experience in remote teams. When I’m not coding,
              you’ll find me outdoors. I love being out in nature whether that’s
              going for a walk, run or cycling. I’d love you to check out my
              work.
            </Body2>
            <Spacer size={24} />
            <Button to="/portfolio" text="GO TO PORTFOLIO" />
            <Spacer size={51} />
            <Separator />
          </AboutRightSide>
        </AboutSection>

        <Spacer size={115} />

        <InterestedSection>
          <TextWrapper width='350px'>
            <H2>
              Interested in doing a project together?
            </H2>
          </TextWrapper>
          {CondSpacer(40, 32)}
          {CondSeparator()}
          {CondSpacer(0, 32)}
          <Button to="/contact" text="CONTACT ME" />
        </InterestedSection>
        {CondSpacer(80, 96)}
      </Container>
    </div>
  );
};

export default HomePage;
