import styled from 'styled-components/native';

import {metrics} from '../../constants';
import {Separator} from '../Separator';

export const BackgroundContainer = styled.View`
  height: 100%;
  width: 100%;
  position: absolute;
  padding-top: ${metrics.padding / 2}px;
  flex: 1;
`;

export const BackgroundLine = styled(Separator)`
  margin: 6px 0;
`;
