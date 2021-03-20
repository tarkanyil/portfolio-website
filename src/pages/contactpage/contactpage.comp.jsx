import React from 'react';
import { PageMotion } from '../../utils/motions.jsx';

import { H2, Body2, PageContainer, Separator } from '../../App.styles.jsx';

import { ButtonHref } from '../../components/button/button.comp.jsx';
import { Spacer } from '../../components/cond-elements/cond-elements.comps.jsx';

import {
  Github,
  Twitter,
  LinkedIn,
  Label,
  Input,
  Textarea,
} from './contactpage.styles.jsx';

const ContactPage = () => {
  return (
    <PageMotion>
      <PageContainer>
        <Separator />
        <H2>Get in Touch</H2>
        <Body2>
          I’d love to hear about what you’re working on and how I could help.
          I’m currently looking for a new role and am open to a wide range of
          opportunities. My preference would be to find a position in a company
          in London. But I’m also happy to hear about opportunites that don’t
          fit that description. I’m a hard-working and positive person who will
          always approach each task with a sense of purpose and attention to
          detail. Please do feel free to check out my online profiles below and
          get in touch using the form.
        </Body2>
        <div>
          <a href="https://github.com/" target="blank">
            <Github />
          </a>
          <a href="https://www.twitter.com/" target="blank">
            <Twitter />
          </a>
          <a href="https://www.linkedin.com" target="blank">
            <LinkedIn />
          </a>
        </div>
        <Separator />
        <H2>Contact Me</H2>
        <form action="/" autoComplete='off'>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" placeholder="Jane Appleseed" autoComplete='off' />
          <Label htmlFor="email">Email Address</Label>
          <Input type="email" id="email" placeholder="email@example.com" autoComplete='off' />
          <Label htmlFor="message">Message</Label>
          <Textarea
            type="textarea"
            id="message"
            rows="3"
            placeholder="How can I help?"
          />
          <ButtonHref to="#" text="Send message" inverted />
        </form>
      </PageContainer>
    </PageMotion>
  );
};

export default ContactPage;
