import React from 'react';
import { Btn, BtnInv, LinkInt, LinkExt } from './button.styles.jsx';

export const ButtonLink = ({ text, to, inverted }) => (
  <div>
    <LinkInt to={to}>
      {inverted ? (
        <BtnInv type="button">{text}</BtnInv>
      ) : (
        <Btn type="button">{text}</Btn>
      )}
    </LinkInt>
  </div>
);

export const ButtonHref = ({ text, to, inverted }) => (
  <div>
    <LinkExt href={to} target="_blank">
      {inverted ? (
        <BtnInv type="button">{text}</BtnInv>
      ) : (
        <Btn type="button">{text}</Btn>
      )}
    </LinkExt>
  </div>
);
