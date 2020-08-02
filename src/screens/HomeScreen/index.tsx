import React from 'react';
import {useNavigation} from '@react-navigation/native';

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
  const navigation = useNavigation();

  const goToContactList = () => {
    navigation.navigate('ContactList');
  };
  return (
    <GradientContainer>
      <Content>
        <ProfileInfoContainer>
          <ProfileImage />
          <NameText>Thiago Almeida</NameText>
          <EmailText>thi@email.com</EmailText>
        </ProfileInfoContainer>
        <ButtonsContainer>
          <Button onPress={goToContactList}>enviar dinheiro</Button>
          <Button>histórico de envios</Button>
        </ButtonsContainer>
      </Content>
    </GradientContainer>
  );
};

export default HomeScreen;
