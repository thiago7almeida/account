import React from 'react';
import {TouchableHighlightProps, View} from 'react-native';
import {DotIndicator} from 'react-native-indicators';

import {Container, Title} from './styles';
import {colors} from '../../constants';

interface Props extends TouchableHighlightProps {
  loading?: boolean;
}

const CustomButton: React.FC<Props> = ({loading = false, ...props}) => {
  return (
    <Container {...props} disabled={loading}>
      {loading ? (
        <DotIndicator color={colors.white} size={7} />
      ) : (
        <Title>{props.children}</Title>
      )}
    </Container>
  );
};

export default CustomButton;
