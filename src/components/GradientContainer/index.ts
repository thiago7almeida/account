import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import {colors} from '../../constants';

export default styled(LinearGradient).attrs(() => ({
  colors: [colors.backgroundPrimary, colors.backgroundSecondary],
}))`
  flex: 1;
`;
