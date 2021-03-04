import React from 'react';
import hero from '../../assets/images/homepage/mobile/image-homepage-hero.jpg';
import profile from '../../assets/images/homepage/mobile/image-homepage-profile.jpg';

import { Container, Separator } from './homepage.styles.jsx';
import ButtonArrow from '../../components/button-arrow/button-arrow.comp.jsx';
import Button from '../../components/button/button.comp.jsx';

const HomePage = () => {
  const hello = 'Homepage body';
  return (
    <div>
      <h1>{hello}</h1>

      <Container>
        <img src={hero} alt="starter-photo" />
        <h1>Hey, I’m Alex Spencer and I love building beautiful websites</h1>
        <ButtonArrow />
        <img src={profile} alt="profile-photo" />
        <Separator />
        <h2>About Me</h2>
        <p>
          I’m a junior front-end developer looking for a new role in an exciting
          company. I focus on writing accessible HTML, using modern CSS
          practices and writing clean JavaScript. When writing JavaScript code,
          I mostly use React, but I can adapt to whatever tools are required.
          I’m based in London, UK, but I’m happy working remotely and have
          experience in remote teams. When I’m not coding, you’ll find me
          outdoors. I love being out in nature whether that’s going for a walk,
          run or cycling. I’d love you to check out my work.
        </p>
        <Button text='GO TO PORTFOLIO'/>
        <Separator />
        <h2>Interested in doing a project with me?</h2>
        <Button text='CONTACT ME'/>
      </Container>
    </div>
  );
};

export default HomePage;
