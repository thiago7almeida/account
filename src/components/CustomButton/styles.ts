import styled from 'styled-components/native';

import {colors} from '../../constants';

export const Container = styled.TouchableOpacity`
  background-color: ${colors.primary};
  border-radius: 100px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.Text`
  color: ${colors.white};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
`;
