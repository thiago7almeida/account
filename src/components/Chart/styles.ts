import {FlatList} from 'react-native';
import styled from 'styled-components/native';

import {metrics} from '../../constants';

export const ChartList = styled(FlatList).attrs({
  contentContainerStyle: {padding: metrics.padding},
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin-bottom: ${metrics.margin}px;
`;
