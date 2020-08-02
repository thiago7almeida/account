import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Platform, FlatList} from 'react-native';
import {metrics} from '../../constants';

export const Content = styled(SafeAreaView)`
  flex: 1;
  padding-top: ${Platform.OS === 'ios' ? 64 : 50}px;
`;

export const ContactList = styled(FlatList)`
  padding: 0 ${metrics.margin}px;
`;
