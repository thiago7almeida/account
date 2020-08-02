import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {ViewProps} from 'react-native';

import {metrics, colors, fonts} from '../../constants';

interface CustomViewProps extends ViewProps {
  height: number;
}

export const Container = styled.View`
  margin: 0 ${metrics.margin / 2}px;
  align-items: center;
  justify-content: flex-end;
`;

export const ValueText = styled.Text`
  color: ${colors.primary};
  font-size: ${fonts.small}px;
`;

export const Dot = styled.View`
  width: 10px;
  height: 10px;
  z-index: 2;
  margin-bottom: -1px;
  border-radius: 5px;
  background-color: ${colors.secondary};
`;

export const Collumn = styled(LinearGradient).attrs({
  colors: [colors.secondary, colors.primary],
})<CustomViewProps>`
  width: 3px;
  height: ${({height}) => height}px;
  margin-bottom: -1px;
  border-radius: 5px;
  background-color: ${colors.white};
`;
