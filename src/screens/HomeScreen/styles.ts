import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native-safe-area-context';

import CustomButton from '../../components/CustomButton';

import {colors, fonts} from '../../constants';

export const Content = styled(SafeAreaView)`
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileInfoContainer = styled.View`
  flex-grow: 4;
  justify-content: center;
  align-items: center;
`;

export const ButtonsContainer = styled.View`
  flex-grow: 1;
  justify-content: flex-end;
`;

export const Button = styled(CustomButton)`
  width: 300px;
  margin-bottom: 15px;
`;

export const NameText = styled.Text`
  color: ${colors.white};
  font-size: ${fonts.extraLarge}px;
  font-weight: bold;
`;

export const EmailText = styled.Text`
  color: ${colors.white};
  font-size: ${fonts.large}px;
`;
