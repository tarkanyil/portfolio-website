import React from 'react';
import { Btn, LinkInt, LinkExt } from './button.styles.jsx';

export const ButtonLink = ({ text, to }) => (
  <div>

      <LinkInt to={to}>
          <Btn type='button'>{text}</Btn>
      </LinkInt>

  </div>
);

export const ButtonHref = ({ text, to }) => (
  <div>

      <LinkExt href={to} target='_blank'>
          <Btn type='button'>{text}</Btn>
      </LinkExt>

  </div>
);
