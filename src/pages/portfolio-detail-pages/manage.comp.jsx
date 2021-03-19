import React from 'react';

import PortfolioItem from '../../components/portfolio-item/portfolio-item.comp.jsx';

import { PageContainer } from '../../App.styles.jsx';

const ManagePage = () => {
  const projectId = 0;
  return (
    <PageContainer>
      <PortfolioItem projectId={projectId} />
    </PageContainer>
  );
};

export default ManagePage;