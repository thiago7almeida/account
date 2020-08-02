import React from 'react';

import {BackgroundContainer, BackgroundLine} from './styles';

const BackgroundChart: React.FC = () => {
  const itemSeparator = Array(14).fill(null);

  return (
    <BackgroundContainer>
      {itemSeparator.map((_, index) => (
        <BackgroundLine strong={false} key={index.toString()} />
      ))}
      <BackgroundLine />
    </BackgroundContainer>
  );
};

export default React.memo(BackgroundChart);
