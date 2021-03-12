import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { Separator } from '../../App.styles.jsx';

function getHeight({ axis, size }) {
  return axis === 'horizontal' ? 1 : size;
}
function getWidth({ axis, size }) {
  return axis === 'vertical' ? 1 : size;
}
const SpacerBlock = styled.span`
  display: block;
  width: ${getWidth}px;
  min-width: ${getWidth}px;
  height: ${getHeight}px;
  min-height: ${getHeight}px;
`;

const lowerBreakpoint = 768;
// const higherBreakpoint = 1440;
  
// Returns the actual viewport width so we can use it in our components
const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return { width };
};

export const Spacer = ( { mob, tab } ) => {
  const { width } = useViewport();
  if (!tab && width > lowerBreakpoint) {
    return null;
  }
  return width < lowerBreakpoint ? (
    <SpacerBlock size={mob} />
  ) : (
    <SpacerBlock size={tab} />
  );
};

export const CondSeparator = () => {
  const { width } = useViewport();
  return width > lowerBreakpoint && <Separator />;
};
