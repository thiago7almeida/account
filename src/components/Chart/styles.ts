import {FlatList} from 'react-native';
import styled from 'styled-components/native';

import {metrics} from '../../constants';
import {ITransfer} from '../../models/transfer';

export const ChartList = styled(
  FlatList as new () => FlatList<ITransfer>,
).attrs({
  contentContainerStyle: {padding: metrics.padding},
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin-bottom: ${metrics.margin}px;
`;
