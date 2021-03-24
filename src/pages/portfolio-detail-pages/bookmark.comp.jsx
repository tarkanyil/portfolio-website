import React from 'react';

import PortfolioItem from '../../components/portfolio-item/portfolio-item.comp.jsx';

const BookmarkPage = () => {
  const projectId = 1;
  return (
      <PortfolioItem projectId={projectId} />
  );
};

export default BookmarkPage;