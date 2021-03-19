import React from 'react';

import PortfolioItem from '../../components/portfolio-item/portfolio-item.comp.jsx';

import { PageContainer } from '../../App.styles.jsx';

const InsurePage = () => {
  const projectId = 2;
  return (
    <PageContainer>
      <PortfolioItem projectId={projectId} />
    </PageContainer>
  );
};

export default InsurePage;