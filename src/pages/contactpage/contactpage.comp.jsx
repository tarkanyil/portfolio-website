import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

import { PageMotion } from '../../utils/motions';

import { H2, Body2, Separator } from '../../App.styles';

import { Button } from '../../components/button/button.comp';
import { Spacer } from '../../components/cond-elements/cond-elements.comp';

import {
  Github,
  Twitter,
  LinkedIn,
  Label,
  Input,
  Textarea,
  ErrorMsg,
  SocialLinks,
  GetInTouch,
  GetInTouchRight,
  ContactMe,
  MyForm,
} from './contactpage.styles';

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  let error;
  // if (meta.error !== undefined) {
  if (meta.touched && meta.error) {
    error = true;
  } else {
    error = false;
  }

  return (
    <>
      <Label htmlFor={props.id || props.name}>{label}</Label>
      <Spacer mob="8" tab="8" />
      {props.as === 'textarea' ? (
        <Textarea className="text-input" error={error} {...field} {...props} />
      ) : (
        <Input className="text-input" error={error} {...field} {...props} />
      )}
      {meta.touched && meta.error ? <ErrorMsg>{meta.error}</ErrorMsg> : null}
    </>
  );
};

const ContactPage = () => (
  <PageMotion>
    <Separator />
    <Spacer mob="24" tab="32" dt="48" />
    <GetInTouch>
      <H2>Get in Touch</H2>
      <Spacer mob="24" tab="24" />
      <GetInTouchRight>
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
        <Spacer mob="24" tab="24" dt="24" />
        <SocialLinks>
          <a href="https://github.com/" target="blank">
            <Github />
          </a>
          <a href="https://www.twitter.com/" target="blank">
            <Twitter />
          </a>
          <a href="https://www.linkedin.com" target="blank">
            <LinkedIn />
          </a>
        </SocialLinks>
        <Spacer mob="32" tab="32" dt="48" />
      </GetInTouchRight>
    </GetInTouch>
    <Separator />
    <Spacer mob="32" tab="32" dt="47" />

    <ContactMe>
      <H2>Contact Me</H2>
      <Spacer mob="32" tab="32" />

      <MyForm>
        <Formik
          initialValues={{
            name: '',
            email: '',
            message: '',
          }}
          onSubmit={async (values, event) => {
            event.preventDefault();
            await new Promise((r) => setTimeout(r, 500));
          }}
          validationSchema={Yup.object({
            name: Yup.string().required('This field is required'),
            email: Yup.string()
              .email('Please use a valid email address')
              .required('This field is required'),
            message: Yup.string().required('This field is required'),
          })}
        >
          <Form noValidate>
            <MyTextInput
              label="Name"
              name="name"
              type="text"
              placeholder="Jane Appleseed"
              autoComplete="off"
            />
            <Spacer mob="24" tab="24" dt="24" />
            <MyTextInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="email@example.com"
              autoComplete=""
            />
            <Spacer mob="24" tab="24" dt="24" />
            <MyTextInput
              label="Message"
              name="message"
              type="text"
              as="textarea"
              rows="3"
              placeholder="How can I help?"
            />
            <Spacer mob="24" tab="24" dt="24" />
            <Button type="submit" inverted>
              Send message
            </Button>
          </Form>
        </Formik>
      </MyForm>
    </ContactMe>
    <Spacer mob="80" tab="96" dt="109" />
  </PageMotion>
);

export default ContactPage;
