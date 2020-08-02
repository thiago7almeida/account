import React from 'react';

import {Container, ValueText, Dot, Collumn} from './styles';
import RoundedImage from '../RoundedImage';

const ChartItem: React.FC<{transfer: any; max: number}> = ({transfer, max}) => {
  const height = (150 * transfer.value) / max.value;
  return (
    <Container>
      <ValueText>{transfer.value}</ValueText>
      <Dot />
      <Collumn height={height} />
      <RoundedImage scale={0.5} />
    </Container>
  );
};

export default React.memo(ChartItem);
