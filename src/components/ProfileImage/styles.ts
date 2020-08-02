import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import {colors} from '../../constants';

const gradientConfig = {start: {x: 0, y: 0}, end: {x: 1, y: 1}};

export const Image = styled.Image`
  width: 140px;
  height: 140px;
  border-radius: 70px;
`;
export const NoImage = styled.View`
  width: 140px;
  height: 140px;
  border-radius: 70px;
  background-color: ${colors.backgroundTertiary};
  position: absolute;
`;

export const GradiendBorder = styled(LinearGradient).attrs({
  colors: [colors.transparent, colors.border],
  ...gradientConfig,
})`
  width: 150px;
  height: 150px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
`;

export const SeparatorBorder = styled(LinearGradient).attrs({
  colors: [colors.border, colors.borderSecondary],
  ...gradientConfig,
})`
  height: 75px;
  border-top-right-radius: 75px;
`;

export const SeparatorBorderContainer = styled.View`
  height: 150px;
  width: 75px;
  position: absolute;
  align-self: flex-end;
`;
