import React from 'react';

import ProfileImage from '../../components/ProfileImage';

import {
  Container,
  Content,
  Button,
  ProfileInfoContainer,
  ButtonsContainer,
  NameText,
  EmailText,
} from './styles';

const HomeScreen: React.FC = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default HomeScreen;
