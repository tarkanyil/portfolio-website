import React from 'react';

import PortfolioItem from '../../components/portfolio-item/portfolio-item.comp.jsx';

import { PageContainer } from '../../App.styles.jsx';

const BookmarkPage = () => {
  const projectId = 1;
  return (
    <PageContainer>
      <PortfolioItem projectId={projectId} />
    </PageContainer>
  );
};

export default BookmarkPage;