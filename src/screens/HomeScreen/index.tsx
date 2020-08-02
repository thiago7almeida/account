import React, {useEffect, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {DotIndicator} from 'react-native-indicators';

import ProfileImage from '../../components/ProfileImage';
import GradientContainer from '../../components/GradientContainer';

import {
  Content,
  Button,
  ProfileInfoContainer,
  ButtonsContainer,
  NameText,
  EmailText,
  LoadingContainer,
} from './styles';
import {AppState} from '../../store';
import * as userActions from '../../store/ducks/user';
import {colors} from '../../constants';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const user = useSelector((state: AppState) => state.user);

  const getTokenAsync = useCallback(() => dispatch(userActions.getToken()), [
    dispatch,
  ]);

  const goToContactList = () => {
    navigation.navigate('ContactList');
  };
  const goToHistory = () => {
    navigation.navigate('History');
  };

  const getToken = () => {
    if (!!!user.token) {
      getTokenAsync();
    }
  };

  useEffect(() => {
    getToken();
  }, [user.token]);

  return (
    <GradientContainer>
      <Content>
        <ProfileInfoContainer>
          <ProfileImage photo={user.photo} />
          <NameText>{user.name}</NameText>
          <EmailText>{user.email}</EmailText>
        </ProfileInfoContainer>
        {user.loading || !!!user.token ? (
          <LoadingContainer>
            <DotIndicator color={colors.primary} size={30} />
          </LoadingContainer>
        ) : (
          <ButtonsContainer>
            <Button onPress={goToContactList}>enviar dinheiro</Button>
            <Button onPress={goToHistory}>histórico de envios</Button>
          </ButtonsContainer>
        )}
      </Content>
    </GradientContainer>
  );
};

export default HomeScreen;
