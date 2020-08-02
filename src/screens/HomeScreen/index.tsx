import React from 'react';
import {useNavigation} from '@react-navigation/native';

import ProfileImage from '../../components/ProfileImage';
import GradientContainer from '../../components/GradientContainer';

import {
  Content,
  Button,
  ProfileInfoContainer,
  ButtonsContainer,
  NameText,
  EmailText,
} from './styles';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  const goToContactList = () => {
    navigation.navigate('ContactList');
  };
  const goToHistory = () => {
    navigation.navigate('History');
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
          <Button onPress={goToHistory}>histórico de envios</Button>
        </ButtonsContainer>
      </Content>
    </GradientContainer>
  );
};

export default HomeScreen;
