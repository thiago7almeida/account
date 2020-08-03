import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {TextInputMask} from 'react-native-masked-text';

import {metrics, colors, fonts} from '../../constants';
import CustomButton from '../CustomButton';

export const Container = styled.TouchableOpacity`
  flex-grow: 1;
  flex-direction: row;
  margin: ${metrics.margin}px;
`;

export const NameText = styled.Text`
  font-size: ${fonts.extraLarge}px;
  color: ${colors.primary};
  font-weight: bold;
`;

export const PhoneText = styled.Text`
  font-size: ${fonts.large}px;
  color: ${colors.primary};
`;

export const ValueText = styled.Text`
  font-size: ${fonts.regular}px;
  color: ${colors.primary};
`;

export const InfoContainer = styled.View`
  justify-content: center;
  margin-left: ${metrics.margin}px;
`;

export const ModalContainer = styled.View`
  background-color: ${colors.backgroundTertiary};
  padding: ${metrics.padding}px;
  border-radius: 30px;
  align-items: center;
`;

export const Close = styled(Icon).attrs({
  color: colors.white,
  size: 35,
  name: 'close',
})`
  position: absolute;
  margin: ${metrics.margin}px;
  align-self: flex-start;
`;

export const NameTextModal = styled(NameText)`
  color: ${colors.white};
  margin-top: ${metrics.margin / 2}px;
`;

export const PhoneTextModal = styled(PhoneText)`
  color: ${colors.white};
`;

export const DescribeTextModal = styled(PhoneText)`
  color: ${colors.white};
  margin-top: ${metrics.margin}px;
`;

export const InputContainer = styled.View`
  background-color: ${colors.white};
  width: 100%;
  height: 60px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  margin-top: ${metrics.margin / 2}px;
`;

export const TextInput = styled.TextInput`
  font-size: ${fonts.extraLarge * 2}px;
  color: ${colors.primary};
  font-weight: bold;
`;

export const Button = styled(CustomButton)`
  width: 100%;
  margin-top: ${metrics.margin}px;
`;
