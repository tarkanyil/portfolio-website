import React from 'react';
import hero from '../../assets/images/homepage/mobile/image-homepage-hero.jpg';
import profile from '../../assets/images/homepage/mobile/image-homepage-profile.jpg';

import { Container, Separator, Section } from './homepage.styles.jsx';
import { H2, Body2 } from '../../App.styles.jsx';
import Spacer from '../../spacer.jsx';

import ButtonArrow from '../../components/button-arrow/button-arrow.comp.jsx';
import Button from '../../components/button/button.comp.jsx';

const HomePage = () => {
  return (
    <div>
      <Container>
        <img src={hero} alt="starter-photo" />
        <Spacer size={24} />
        <H2>Hey, I’m Alex Spencer and I love building beautiful websites</H2>
        <Spacer size={32} />
        <ButtonArrow href='#aboutme' />
        <Spacer size={96} />
        <img id="aboutme" src={profile} alt="profile-photo" />
        <Spacer size={32} />
        <Separator />
        <Spacer size={32} />
        <H2>About Me</H2>
        <Spacer size={28} />
        <Body2>
          I’m a junior front-end developer looking for a new role in an exciting
          company. I focus on writing accessible HTML, using modern CSS
          practices and writing clean JavaScript. When writing JavaScript code,
          I mostly use React, but I can adapt to whatever tools are required.
          I’m based in London, UK, but I’m happy working remotely and have
          experience in remote teams. When I’m not coding, you’ll find me
          outdoors. I love being out in nature whether that’s going for a walk,
          run or cycling. I’d love you to check out my work.
        </Body2>
        <Spacer size={24} />
        <Button to="/portfolio" text="GO TO PORTFOLIO" />
        <Spacer size={51} />
        <Separator />
        <Spacer size={115} />
        <Section>
          <H2>Interested in doing a project together?</H2>
          <Spacer size={40} />
          <Button to="/contact" text="CONTACT ME" />
        </Section>
      </Container>
    </div>
  );
};

export default HomePage;
