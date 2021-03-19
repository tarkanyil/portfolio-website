import React from 'react';
import { PageMotion } from '../../utils/motions.jsx';

const ContactPage = () => {
  const hello = 'Contact page body';

  return (
    <PageMotion>
      <h1>{hello}</h1>
    </PageMotion>
  );
};

export default ContactPage;
