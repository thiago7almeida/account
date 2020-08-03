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
import * as transfersActions from '../../store/ducks/transfers';
import {colors} from '../../constants';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const user = useSelector((state: AppState) => state.user);
  const transfers = useSelector((state: AppState) => state.transfers);

  const getTokenAsync = useCallback(() => dispatch(userActions.getToken()), [
    dispatch,
  ]);
  const getTransfersAsync = useCallback(
    () => dispatch(transfersActions.getTransfers()),
    [dispatch],
  );

  const goToContactList = () => {
    navigation.navigate('ContactList');
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
          <NameText testID="nameText">{user.name}</NameText>
          <EmailText testID="emailText">{user.email}</EmailText>
        </ProfileInfoContainer>
        {user.loading || !!!user.token ? (
          <LoadingContainer testID="loadingContainer">
            <DotIndicator color={colors.primary} size={30} />
          </LoadingContainer>
        ) : (
          <ButtonsContainer testID="buttons">
            <Button testID="goToContacts" onPress={goToContactList}>
              enviar dinheiro
            </Button>
            <Button
              testID="goToHistory"
              loading={transfers.loading}
              onPress={getTransfersAsync}>
              histórico de envios
            </Button>
          </ButtonsContainer>
        )}
      </Content>
    </GradientContainer>
  );
};

export default HomeScreen;
