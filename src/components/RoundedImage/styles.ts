import styled from 'styled-components/native';
import {ImageProps, ViewProps, TextProps} from 'react-native';
import {colors, fonts} from '../../constants';

interface CustomImageProps extends ImageProps {
  size: number;
  scale: number;
}
interface CustomViewProps extends ViewProps {
  size: number;
  scale: number;
}
interface CustomTextProps extends TextProps {
  scale: number;
}

export const Image = styled.Image<CustomImageProps>`
  border-width: ${({scale}) => 2 * scale}px;
  width: ${({size}) => size}px;
  height: ${({size}) => size}px;
  border-color: ${colors.primary};
  border-radius: ${({size}) => size / 2}px;
`;
export const NoImage = styled.View<CustomViewProps>`
  border-width: ${({scale}) => 2 * scale}px;
  width: ${({size}) => size}px;
  height: ${({size}) => size}px;
  justify-content: center;
  align-items: center;
  border-color: ${colors.primary};
  border-radius: ${({size}) => size / 2}px;
`;

export const NoImageText = styled.Text<CustomTextProps>`
  color: ${colors.primary};
  font-size: ${({scale}) => fonts.extraLarge * 2 * scale}px;
  font-weight: bold;
`;
