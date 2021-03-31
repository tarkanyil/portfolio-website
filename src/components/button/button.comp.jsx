import React from 'react';
import {
  Btn, BtnInv, LinkInt, LinkExt,
} from './button.styles';

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

export const Button = ({ children, inverted }) => (
  <div>
    {inverted ? (
      <BtnInv type="button">{children}</BtnInv>
    ) : (
      <Btn type="button">{children}</Btn>
    )}
  </div>
);
