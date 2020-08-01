import React from 'react';

import ProfileImage from '../../components/ProfileImage';

import {
  Content,
  Button,
  ProfileInfoContainer,
  ButtonsContainer,
  NameText,
  EmailText,
} from './styles';
import GradientContainer from '../../components/GradientContainer';

const HomeScreen: React.FC = () => {
  return (
    <GradientContainer>
      <Content>
        <ProfileInfoContainer>
          <ProfileImage />
          <NameText>Thiago Almeida</NameText>
          <EmailText>thi@email.com</EmailText>
        </ProfileInfoContainer>
        <ButtonsContainer>
          <Button>enviar dinheiro</Button>
          <Button>histórico de envios</Button>
        </ButtonsContainer>
      </Content>
    </GradientContainer>
  );
};

export default HomeScreen;
