import React from 'react';
import { Btn, LinkText } from './button.styles.jsx';

const Button = ({ text, to }) => (
  <div>

      <LinkText to={to}>
          <Btn type='button'>{text}</Btn>
      </LinkText>

  </div>
);

export default Button;
