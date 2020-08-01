import React from 'react';
import {TouchableHighlightProps} from 'react-native';

import {Container, Title} from './styles';

const CustomButton: React.FC<TouchableHighlightProps> = (props) => {
  return (
    <Container {...props}>
      <Title>{props.children}</Title>
    </Container>
  );
};

export default CustomButton;
