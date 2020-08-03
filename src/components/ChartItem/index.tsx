import React from 'react';

import {Container, ValueText, Dot, Collumn} from './styles';
import RoundedImage from '../RoundedImage';
import {ITransfer} from '../../models/transfer';
import {MaskService} from 'react-native-masked-text';

type Props = {
  transfer: ITransfer;
  max: number;
};

const ChartItem: React.FC<Props> = ({transfer, max}) => {
  const height = (150 * transfer.Valor) / max;
  return (
    <Container>
      <ValueText>
        {MaskService.toMask('money', transfer.Valor?.toString() ?? '', {
          unit: 'R$',
        })}
      </ValueText>
      <Dot />
      <Collumn height={height} />
      <RoundedImage
        name={transfer.contact?.name}
        image={transfer.contact?.photo}
        scale={0.5}
      />
    </Container>
  );
};

export default React.memo(ChartItem);
