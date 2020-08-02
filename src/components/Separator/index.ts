import styled from 'styled-components/native';
import {ViewProps} from 'react-native';

import {colors} from '../../constants';

interface CustomViewProps extends ViewProps {
  strong?: boolean;
}

export const Separator = styled.View<CustomViewProps>`
  width: 100%;
  background-color: ${colors.secondary};
  height: ${({strong = true}) => (strong ? 1.5 : 0.5)}px;
`;
